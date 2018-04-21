var dialogsModule = require("ui/dialogs");
var frameModule = require("ui/frame");

var UserApi = require("../../api/user");
const Stores = require("../stores/createEdit");

const Login = {
    data() {
        return {
            user: {
                email: '',
                password: '',
            },
            isLoggingIn: true,
        };
    },
    methods: {
        toggleDisplay() {
            this.isLoggingIn = !this.isLoggingIn;
        },
        submit() {
            if (this.isLoggingIn) {
                this.login();
            } else {
                this.signUp();
            }
        },
        login() {
            const that = this;
            UserApi.login(this.user)
                .catch(function (error) {
                    dialogsModule.alert({
                        message: "Unfortunately we could not find your account.",
                        okButtonText: "OK"
                    });
                    return Promise.reject();
                })
                .then(function () {
                    that.$navigateTo(Stores);
                });
        },
        signUp() {
            UserApi.register(this.user)
                .then(function () {
                    dialogsModule
                        .alert("Your account was successfully created.")
                        .then(function () {
                            this.toggleDisplay();
                        });
                }).catch(function (error) {
                    dialogsModule
                        .alert({
                            message: "Unfortunately we were unable to create your account.",
                            okButtonText: "OK"
                        });
                });
        },
    },
    template: `
        <Page actionBarHidden="true">
            <FlexboxLayout>
                <StackLayout id="form" :class="isLoggingIn ? 'form' : 'form dark'" orientation="vertical">
                
                    <Image src="http://i63.tinypic.com/1z5pwcg.jpg" height="200" width="300" />

                    <TextField class="input input-border" id="email" v-model="user.email" hint="Email Address" keyboardType="email" autocorrect="false"
                    autocapitalizationType="none" />
                    <TextField class="input input-border" secure="true" v-model="user.password" hint="Password" />

                    <Button class="btn btn-primary" :text="isLoggingIn ? 'Sign in' : 'Sign up'" @tap="submit" />
                    <Button :text="isLoggingIn ? 'Sign up' : 'Back to login'" class="link" @tap="toggleDisplay" />
                </StackLayout>
            </FlexboxLayout>
        </Page>
  `
};

module.exports = Login;