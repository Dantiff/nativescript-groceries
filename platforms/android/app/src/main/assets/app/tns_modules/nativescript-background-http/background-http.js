"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("application");
var observable_1 = require("data/observable");
var utils_1 = require("utils/utils");
var fileSystemModule = require("file-system");
var ProgressReceiver;
function onProgressReceiverProgress(context, uploadInfo) {
    var uploadId = uploadInfo.getUploadId();
    var task = Task.fromId(uploadId);
    var totalBytes = uploadInfo.getTotalBytes();
    var currentBytes = uploadInfo.getUploadedBytes();
    task.setTotalUpload(totalBytes);
    task.setUpload(currentBytes);
    task.setStatus("uploading");
    task.notify({ eventName: "progress", object: task, currentBytes: currentBytes, totalBytes: totalBytes });
}
function onProgressReceiverCancelled(context, uploadInfo) {
    var uploadId = uploadInfo.getUploadId();
    var task = Task.fromId(uploadId);
    task.setStatus("cancelled");
    task.notify({ eventName: "cancelled", object: task });
}
function onProgressReceiverError(context, uploadInfo, error) {
    var uploadId = uploadInfo.getUploadId();
    var task = Task.fromId(uploadId);
    task.setStatus("error");
    task.notify({ eventName: "error", object: task, error: error });
}
function onProgressReceiverCompleted(context, uploadInfo, serverResponse) {
    var uploadId = uploadInfo.getUploadId();
    var task = Task.fromId(uploadId);
    var totalUpload = uploadInfo.getTotalBytes();
    if (!totalUpload || !isFinite(totalUpload) || totalUpload <= 0) {
        totalUpload = 1;
    }
    task.setUpload(totalUpload);
    task.setTotalUpload(totalUpload);
    task.setStatus("complete");
    task.notify({ eventName: "progress", object: task, currentBytes: totalUpload, totalBytes: totalUpload });
    task.notify({ eventName: "responded", object: task, data: serverResponse.getBodyAsString() });
    task.notify({ eventName: "complete", object: task, response: serverResponse });
}
function initializeProgressReceiver() {
    if (ProgressReceiver) {
        return;
    }
    var zonedOnProgress = global.zonedCallback(onProgressReceiverProgress);
    var zonedOnCancelled = global.zonedCallback(onProgressReceiverCancelled);
    var zonedOnError = global.zonedCallback(onProgressReceiverError);
    var zonedOnCompleted = global.zonedCallback(onProgressReceiverCompleted);
    var ProgressReceiverImpl = net.gotev.uploadservice.UploadServiceBroadcastReceiver.extend({
        onProgress: function (context, uploadInfo) {
            zonedOnProgress(context, uploadInfo);
        },
        onCancelled: function (context, uploadInfo) {
            zonedOnCancelled(context, uploadInfo);
        },
        onError: function (context, uploadInfo, error) {
            zonedOnError(context, uploadInfo);
        },
        onCompleted: function (context, uploadInfo, serverResponse) {
            zonedOnCompleted(context, uploadInfo, serverResponse);
        }
    });
    ProgressReceiver = ProgressReceiverImpl;
}
var hasNamespace = false;
function ensureUploadServiceNamespace() {
    if (!hasNamespace) {
        net.gotev.uploadservice.UploadService.NAMESPACE = application.android.packageName;
        hasNamespace = true;
    }
}
var receiver;
function session(id) {
    ensureUploadServiceNamespace();
    if (!receiver) {
        var context = utils_1.ad.getApplicationContext();
        initializeProgressReceiver();
        receiver = new ProgressReceiver();
        receiver.register(context);
    }
    return new Session(id);
}
exports.session = session;
var ObservableBase = (function (_super) {
    __extends(ObservableBase, _super);
    function ObservableBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObservableBase.prototype.notifyPropertyChanged = function (propertyName, value) {
        this.notify({ object: this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: propertyName, value: value });
    };
    return ObservableBase;
}(observable_1.Observable));
var Session = (function () {
    function Session(id) {
        this._id = id;
    }
    Session.prototype.uploadFile = function (fileUri, options) {
        return Task.create(this, fileUri, options);
    };
    Session.prototype.multipartUpload = function (params, options) {
        return Task.createMultiPart(this, params, options);
    };
    Object.defineProperty(Session.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    return Session;
}());
var Task = (function (_super) {
    __extends(Task, _super);
    function Task() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Task.create = function (session, file, options) {
        var task = new Task();
        task._session = session;
        task._id = session.id + "{" + ++Task.taskCount + "}";
        var context = application.android.context;
        var request = new net.gotev.uploadservice.BinaryUploadRequest(context, task._id, options.url);
        request.setFileToUpload(file);
        var displayNotificationProgress = typeof options.androidDisplayNotificationProgress === "boolean" ? options.androidDisplayNotificationProgress : true;
        if (displayNotificationProgress) {
            request.setNotificationConfig(new net.gotev.uploadservice.UploadNotificationConfig());
        }
        var autoDeleteAfterUpload = typeof options.androidAutoDeleteAfterUpload === "boolean" ? options.androidAutoDeleteAfterUpload : false;
        if (autoDeleteAfterUpload) {
            request.setAutoDeleteFilesAfterSuccessfulUpload(true);
        }
        var headers = options.headers;
        if (headers) {
            for (var header in headers) {
                var value = headers[header];
                if (value !== null && value !== void 0) {
                    request.addHeader(header, value.toString());
                }
            }
        }
        task.setDescription(options.description);
        request.setMethod(options.method ? options.method : "GET");
        task.setUpload(0);
        task.setTotalUpload(1);
        task.setStatus("pending");
        request.startUpload();
        Task.cache[task._id] = task;
        return task;
    };
    Task.createMultiPart = function (session, params, options) {
        var task = new Task();
        task._session = session;
        task._id = session.id + "{" + (++Task.taskCount) + "}";
        var context = application.android.context;
        var request = new net.gotev.uploadservice.MultipartUploadRequest(context, task._id, options.url);
        for (var i = 0; i < params.length; i++) {
            var curParam = params[i];
            if (typeof curParam.name === 'undefined') {
                throw new Error("You must have a `name` value");
            }
            if (curParam.filename) {
                var fileName = curParam.filename;
                if (fileName.startsWith("~/")) {
                    fileName = fileName.replace("~/", fileSystemModule.knownFolders.currentApp().path + "/");
                }
                var destFileName = curParam.destFilename || fileName.substring(fileName.lastIndexOf('/') + 1, fileName.length);
                request.addFileToUpload(fileName, curParam.name, destFileName, curParam.mimeType);
            }
            else {
                request.addParameter(params[i].name, params[i].value);
            }
        }
        var utf8 = options.utf8;
        if (utf8) {
            request.setUtf8Charset();
        }
        var displayNotificationProgress = typeof options.androidDisplayNotificationProgress === "boolean" ? options.androidDisplayNotificationProgress : true;
        if (displayNotificationProgress) {
            request.setNotificationConfig(new net.gotev.uploadservice.UploadNotificationConfig());
        }
        var headers = options.headers;
        if (headers) {
            for (var header in headers) {
                var value = headers[header];
                if (value !== null && value !== void 0) {
                    request.addHeader(header, value.toString());
                }
            }
        }
        task.setDescription(options.description);
        request.setMethod(options.method ? options.method : "GET");
        task.setUpload(0);
        task.setTotalUpload(1);
        task.setStatus("pending");
        request.startUpload();
        Task.cache[task._id] = task;
        return task;
    };
    Task.fromId = function (id) {
        return Task.cache[id];
    };
    Object.defineProperty(Task.prototype, "upload", {
        get: function () {
            return this._upload;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "totalUpload", {
        get: function () {
            return this._totalUpload;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "session", {
        get: function () {
            return this._session;
        },
        enumerable: true,
        configurable: true
    });
    Task.prototype.setTotalUpload = function (value) {
        this._totalUpload = value;
        this.notifyPropertyChanged("totalUpload", value);
    };
    Task.prototype.setUpload = function (value) {
        this._upload = value;
        this.notifyPropertyChanged("upload", value);
    };
    Task.prototype.setStatus = function (value) {
        this._status = value;
        this.notifyPropertyChanged("status", value);
    };
    Task.prototype.setDescription = function (value) {
        this._description = value;
        this.notifyPropertyChanged("description", value);
    };
    Task.prototype.cancel = function () {
        net.gotev.uploadservice.UploadService.stopUpload(this._id);
    };
    Task.taskCount = 0;
    Task.cache = {};
    return Task;
}(ObservableBase));
