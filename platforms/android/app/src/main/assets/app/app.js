const Vue = require("nativescript-vue");
const Login = require("./modules/login");


new Vue({
  render: h => h(Login)
}).$start()