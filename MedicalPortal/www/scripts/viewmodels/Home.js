var HomeViewModel = function () {
    this.welcomeMessage = ko.observable("Hello who?");
    this.isUpdateLinkVisible = ko.observable(true);

    this.updateMessage = function () {
        this.welcomeMessage("Hello world!");
        this.isUpdateLinkVisible(false);
    };
};