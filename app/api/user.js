const fetchModule = require("fetch");
const config = require("~/appConfig");

const login = function (user) {
    return fetchModule.fetch(config.apiUrl + "user/" + config.appKey + "/login", {
        method: "POST",
        body: JSON.stringify({
            username: user.email,
            password: user.password
        }),
        headers: getCommonHeaders()
    })
        .then(handleErrors)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            config.token = data._kmd.authtoken;
        });
};

const register = function (user) {
    return fetchModule.fetch(config.apiUrl + "user/" + config.appKey, {
        method: "POST",
        body: JSON.stringify({
            username: user.email,
            email: user.email,
            password: user.password
        }),
        headers: getCommonHeaders()
    }).then(handleErrors);
};

function getCommonHeaders() {
    return {
        "Content-Type": "application/json",
        "Authorization": config.appUserHeader
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
    login: login,
    register: register,
};