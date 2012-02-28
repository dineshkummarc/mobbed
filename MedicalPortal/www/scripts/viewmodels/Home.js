(function (App) {
    App.ViewModels.HomeViewModel = function () {
        var self = {};

        self.welcomeMessage = ko.observable("Hello who?");
        self.isUpdateLinkVisible = ko.observable(true);

        self.updateMessage = function () {
            self.welcomeMessage("Hello world!");
            self.isUpdateLinkVisible(false);
            console.log("executed");
        };

        return self;
    };
})(App);