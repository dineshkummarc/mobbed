var App = window.App = {};
App.ViewModels = {};

$(document).on("pagecreate", function(event, ui) {
   ko.applyBindings(new App.ViewModels.HomeViewModel()); 
});