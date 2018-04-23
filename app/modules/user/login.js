const dialogsModule = require("ui/dialogs");
const frameModule = require("ui/frame");
const LoadingIndicator = require("../../nativescript-loading-indicator").LoadingIndicator;

const UserApi = require("../../api/user");
const Grocery = require("../grocery");
const appLoader = new LoadingIndicator();
const appLoaderOptions = {
    message: 'Loading...',
    progress: 0.65,
    android: {
        indeterminate: true,
        cancelable: true,
        cancelListener: function (dialog) { console.log("Loading cancelled") },
        max: 100,
        progressNumberFormat: "%1d/%2d",
        progressPercentFormat: 0.53,
        progressStyle: 1,
        secondaryProgress: 1
    },
    ios: {
        details: "Additional detail note!",
        margin: 10,
        dimBackground: true,
        color: "#4B9ED6", // color of indicator and labels
        // background box around indicator
        // hideBezel will override this if true
        backgroundColor: "yellow",
        hideBezel: true, // default false, can hide the surrounding bezel
  },
};

const Login = {
    data() {
        return {
            email: '',
            password: '',
            errors: {
                email: '',
                password: '',
            },
            isLoggingIn: true,
            submittingUser: false,
        };
    },
    computed: {
        user() {
            return { email: this.email, password: this.password };
        },
    },
    watch: {
        email() {
            this.isEmailValid(this.email);
        },
        password() {
            this.isPwdValid(this.password);
        },
        submittingUser() {
            if (this.submittingUser) {
                appLoader.show(appLoaderOptions);
            } else {
                appLoader.hide();
            }
        },
    },
    methods: {
        toggleDisplay() {
            this.isLoggingIn = !this.isLoggingIn;
        },
        submit() {
            if (this.isEmailValid(this.email) && this.isPwdValid(this.password)) {
                if (this.isLoggingIn) {
                    this.login();
                } else {
                    this.signUp();
                }
            }
        },
        login() {
            const that = this;
            that.submittingUser = true;
            UserApi.login(this.user)
                .catch(function (error) {
                    that.submittingUser = false;
                    dialogsModule.alert({
                        message: "Unfortunately we could not find your account.",
                        okButtonText: "OK"
                    });
                    return Promise.reject();
                })
                .then(function () {
                    that.submittingUser = false;
                    that.$navigateTo(Grocery);
                });
        },
        signUp() {
            const that = this;
            that.submittingUser = true;
            UserApi.register(this.user)
                .then(function () {
                    that.submittingUser = false;
                    dialogsModule
                        .alert("Your account was successfully created.")
                        .then(function () {
                            that.toggleDisplay();
                        });
                }).catch(function (error) {
                    that.submittingUser = false;
                    dialogsModule
                        .alert({
                            message: "Unfortunately we were unable to create your account.",
                            okButtonText: "OK"
                        });
                });
        },
        isEmailValid(email) {
            const validEmail = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
            if (!email.length) {
                this.errors.email = 'The email field is required';
                return false;
            }
            if (!validEmail.test(email)) {
                this.errors.email = 'Please use a valid email address';
                return false;
            }
            this.errors.email = '';
            return true;
        },
        isPwdValid(pwd) {
            if (!pwd.length) {
                this.errors.password = 'The password field is required';
                return false;
            }
            if (pwd.length < 8) {
                this.errors.password = 'Please use a stronger password';
                return false;
            }
            this.errors.password = '';
            return true;
        },
    },
    template: `
        <Page actionBarHidden="true">
            <FlexboxLayout class="page-base">
                <StackLayout id="form" :class="isLoggingIn ? 'form' : 'form dark'" orientation="vertical">
                    
                    <Image src="~/images/gyg-logo.jpg" height="200" width="300" />

                    <TextView :text="errors.email" v-if="errors.email.length" class="form-errors" />
                    <TextView :text="errors.password" v-if="errors.password.length" class="form-errors" />

                    <TextField class="input input-border" id="email" v-model="email" hint="Email Address" keyboardType="email" autocorrect="false"
                    autocapitalizationType="none" />
                    <TextField class="input input-border" secure="true" v-model="password" hint="Password" />

                    <Button class="btn btn-primary" :text="submittingUser ? 'loading... ' : isLoggingIn ? 'Sign in' : 'Sign up'" @tap="submit" />
                    <Button :text="isLoggingIn ? 'Sign up' : 'Back to login'" class="link" @tap="toggleDisplay" />
                </StackLayout>
            </FlexboxLayout>
        </Page>
  `
};

module.exports = Login;