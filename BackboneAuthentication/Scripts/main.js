
$(function () {
    var Credentials = Backbone.Model.extend({
        url: "/api/account"
    });

    var LoginView = Backbone.View.extend({
        el: $("#loginForm"),

        events: {
            "click #login": "login"
        },

        initialize: function () {
            var self = this;

            this.username = $("#username");
            this.password = $("#password");

            this.username.change(function (e) {
                self.model.set({ username: $(e.currentTarget).val() });
            });

            this.password.change(function (e) {
                self.model.set({ password: $(e.currentTarget).val() });
            });
        },

        login: function (e) {
            e.preventDefault();
            var user = this.model.get('username');
            var pword = this.model.get('password');
            this.model.save({
                "Username": user,
                "Password": pword
            });
        }
    });

    var GetModel = Backbone.Model.extend({
        url: "/api/sample"
    });
    var GetView = Backbone.View.extend({
        el: $("#getButton"),

        events: {
            "click": "get"
        },

        initialize: function () {
            var self = this;
        },

        get: function () {
            this.model.fetch({
                success: function (data) { console.log(data); }
            });
        }

    });
    var x = new GetView({ model: new GetModel() });
    window.LoginView = new LoginView({ model: new Credentials() });
});
