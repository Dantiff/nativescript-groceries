const fetchModule = require("fetch");
const config = require("~/appConfig");

const baseUrl = config.apiUrl + "appdata/" + config.appKey + "/Groceries";

const load = function () {
    return fetch(baseUrl, {
        headers: getCommonHeaders()
    })
        .then(handleErrors)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        });
};

 const add = function (grocery) {
    return fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify({
            Name: grocery
        }),
        headers: getCommonHeaders()
    })
        .then(handleErrors)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data;
        });
};

const remove = function (id) {
    return fetch(baseUrl + "/" + id, {
        method: "DELETE",
        headers: getCommonHeaders()
    })
        .then(handleErrors)
        .then(function (data) {
            return data;
        });
};

function getCommonHeaders() {
    return {
        "Content-Type": "application/json",
        "Authorization": "Kinvey " + config.token
    }
}

function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;
}

module.exports = {
    load: load,
    add, add,
    remove: remove,
};