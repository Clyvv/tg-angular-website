namespace glc.ui {
    "use strict";


    let app = angular.module("glc");

    interface IHeader extends ng.IController {

    }

    class Controller implements IHeader {
        page: string;

    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/components/header/header.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {
                page: "<"
            };

        }
    }

    app.component("glcHeader", new Component());

}
