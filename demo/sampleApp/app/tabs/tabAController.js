﻿new function() {

    var sampleApp = new base2.Package(this, {
        name:    "sampleApp",
        imports: "miruken.mvc",
        exports: "TabAController"
    });

    eval(this.imports);

    var TabAController = Controller.extend({
        message: "hello",
        items:   [0,1,2,3]
    });

    eval(this.exports);

}