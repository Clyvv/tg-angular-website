namespace lglc.ui {
    "use strict";

    let app = angular.module("lglc");

    interface ICareer extends ng.IController {

    }

    class Controller implements ICareer {

       
    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/workspace/career/career.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {

            };

        }
    }

    app.component("lglcCareer", new Component());

}
