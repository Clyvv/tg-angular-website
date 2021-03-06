namespace glc.ui {
    "use strict";

    let app = angular.module("glc");

    interface IAbout extends ng.IController {

    }

    class Controller implements IAbout {
        page: string = "About";

        $onInit = () => { }
        
    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/workspace/about/about.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {

            };

        }
    }

    app.component("glcAbout", new Component());

}
