var App = window.App = {};
App.ViewModels = {};
App.ViewModels.Tests = {};

$(document).on("pageinit", "#home", function () {
    ko.applyBindings(new App.ViewModels.HomeViewModel(), this);
});

$(document).on("pageinit", "#diagnostics", function () {
    ko.applyBindings(new App.ViewModels.DiagnosticsViewModel(), this);
});