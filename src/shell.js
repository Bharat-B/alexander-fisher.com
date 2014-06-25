define(["require", "exports", "durandal/app", "knockout"], function(require, exports, app, ko) {
    var Shell = (function () {
        function Shell() {
            this.name = ko.observable("");
        }
        Shell.prototype.sayHello = function () {
            app.showMessage("Hello " + this.name() + "! Nice to meet you.", "Greetings");
        };
        return Shell;
    })();
    
    return Shell;
});
