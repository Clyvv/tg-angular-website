namespace glc.ui {
    "use strict";

    let app = angular.module("glc");

    interface IExpertise extends ng.IController {

    }

    class Controller implements IExpertise {
        service: string;
        selected = (service: string) => {
            this.service = service;
        }

    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/workspace/areas-of-practice/areas-of-practice.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {

            };

        }
    }

    app.component("glcAreasOfPractice", new Component());

}
