const Vue = require("nativescript-vue");
const Login = require("~/modules/user/login");
// const Login = require("~/modules/store");

Vue.filter('capitalizeWord', value => {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});


new Vue({
  render: h => h(Login)
}).$start()