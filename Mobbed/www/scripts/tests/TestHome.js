module("Home Tests");

test("Populates people", function () {
    var model = new App.ViewModels.HomeViewModel(App.Tests.MockService);

    equal(model.people().length, 3, "Expected 3 people");

    for (var i = 0; i < 3; i++) {
        equal(model.people()[i], App.Tests.MockService.peopleToReturn[i], "Should be populated with the people from the mock service");
    }
});