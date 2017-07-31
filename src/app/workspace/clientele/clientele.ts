namespace glc.ui {
    "use strict";

    let app = angular.module("glc");

    interface IPublication extends ng.IController {

    }

    class Controller implements IPublication {
        page: string = "Clientele";

    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/workspace/clientele/clientele.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {

            };

        }
    }

    app.component("glcClientele", new Component());

}
