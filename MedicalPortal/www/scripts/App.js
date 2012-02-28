var App = window.App = {};
App.ViewModels = {};

$(document).on("pageinit", "#home", function () {
    ko.applyBindings(new App.ViewModels.HomeViewModel(), this);
});

$(document).on("pageinit", "#diagnostics", function () {
    ko.applyBindings(new App.ViewModels.DiagnosticsViewModel(), this);
});