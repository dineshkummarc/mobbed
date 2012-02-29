(function (App) {
    App.ViewModels.DiagnosticsViewModel = function () {
        var self = {};

        self.startTests = function () {
            App.ViewModels.Tests.testHomeViewModel();
        };

        return self;
    };
})(App);