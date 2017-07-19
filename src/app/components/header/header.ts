namespace glc.ui {
    "use strict";

    let app = angular.module("glc");

    interface IHeader extends ng.IController {

    }

    class Controller implements IHeader {
        
    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/components/header/header.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {
            };

        }
    }

    app.component("glcHeader", new Component());

}
