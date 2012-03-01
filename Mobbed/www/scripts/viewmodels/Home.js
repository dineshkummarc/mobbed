(function (App) {
    App.ViewModels.HomeViewModel = function (service) {
        var _self = {};
        _self.people = ko.observableArray();


        //reload people
        var _getPeople = function () {
            _self.people.removeAll();
            service.getPeople(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _self.people.push(data[i]);
                }
            });
        };

        _getPeople();

        return _self;
    };
})(App);