namespace glc.ui {
    "use strict";

    let app = angular.module("glc");

    interface IPeople extends ng.IController {

    }

    class Controller implements IPeople {

        
    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/workspace/profiles/profiles.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {

            };

        }
    }

    app.component("glcProfiles", new Component());

}
