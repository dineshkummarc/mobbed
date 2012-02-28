(function (App) {
    App.ViewModels.DiagnosticsViewModel = function () {
        var self = {};

        self.status = ko.observable("Unknown");

        self.runDiagnostics = function () {
            self.status("Checking status...");
        };

        return self;
    };
})(App);