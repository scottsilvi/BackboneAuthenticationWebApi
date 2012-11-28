
$(function () {
    var Credentials = Backbone.Model.extend({
        urlRoot: "/api/account"
    });

    var LoginView = Backbone.View.extend({
        el: $("#loginForm"),

        events: {
            "click #login": "login",
            "click #logout": "logout"
        },

        initialize: function () {
            var self = this;

            this.username = $("#username");
            this.password = $("#password");

            this.username.on('change',function (e) {
                self.model.set({ username: $(e.currentTarget).val() });
            });

            this.password.on('change',function (e) {
                self.model.set({ password: $(e.currentTarget).val() });
            });
        },
        logout: function () {
            console.log('Logout Clicked');
            var logout = $.ajax({
                url: "home/logout",
                dataType: "json"
            }).always(function (data) {
                console.log("Logged Out");
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
        urlRoot: "/api/sample"
    });
    var GetView = Backbone.View.extend({
        el: $("#getButton"),

        events: {
            "click": "get"
        },

        initialize: function () {
            var self = this;
            this.id = $("#id");
            this.id.on('change', function (e) {
                self.model.set({ id: $(e.currentTarget).val() });
            });
        },

        get: function () {

            this.model.fetch({
                id: this.model.get('id'),
                success: function (data) { console.log(data); }
            });
        }

    });
    var x = new GetView({ model: new GetModel() });
    window.LoginView = new LoginView({ model: new Credentials() });
});
