namespace glc.ui {
    "use strict";

    let app = angular.module("glc");

    interface IHome extends ng.IController {

    }

    class Controller implements IHome {
        page: string = "Home";

    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/workspace/home/home.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {

            };

        }
    }

    app.component("glcHome", new Component());

}
