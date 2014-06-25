/// <reference path="../typings/tsd.d.ts" />
require.config({
    paths: {
        "jquery": "../bower_components/jquery/jquery.min",
        "durandal": "../bower_components/durandal/js",
        "plugins": "../bower_components/durandal/js/plugins",
        "transitions": "../bower_components/durandal/js/transitions",
        "knockout": "../bower_components/knockout.js/knockout"
    }
});

require(["durandal/app", "durandal/system"], function (app, system) {
    system.debug(true);

    app.title = "Alexander Fisher's Portfolio Site";

    app.configurePlugins({
        router: true,
        dialog: true
    });

    app.start().then(function () {
        app.setRoot("shell");
    });
});
