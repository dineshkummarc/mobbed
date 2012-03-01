App.Tests = {};

App.Tests.MockService = (function () {
    var _self = {};
    _self.peopleToReturn = [
            { firstName: "Steve", lastName: "Greatrex" },
            { firstName: "Jess", lastName: "Greatrex" },
            { firstName: "OP", lastName: "Bauer" }
        ];

    _self.getPeople = function (callback) {
        callback(_self.peopleToReturn);
    };

    return _self;
})();