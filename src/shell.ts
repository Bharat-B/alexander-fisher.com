/// <reference path="../typings/tsd.d.ts" />
import app = require("durandal/app");
import ko = require("knockout");

class Shell {
    name: KnockoutObservable<string>;
    constructor(){
        this.name = ko.observable("");
    }

    sayHello(){
        app.showMessage("Hello " + this.name() + "! Nice to meet you.", "Greetings");
    }
}
export = Shell;