var App = window.App = {};
App.ViewModels = {};

$(document).on("pageinit", "#home", function () {
    ko.applyBindings(new App.ViewModels.HomeViewModel(App.Tests.MockService), this);
});