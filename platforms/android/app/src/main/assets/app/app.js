const Vue = require("nativescript-vue");
const Login = require("./modules/user/login");
const Grocery = require("./modules/grocery");


new Vue({
  render: h => h(Login)
}).$start()