namespace lglc.ui {
    "use strict";

    let app = angular.module("lglc");

    interface IExpertise extends ng.IController {

    }

    class Controller implements IExpertise {

       
    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/workspace/expertise/expertise.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {

            };

        }
    }

    app.component("lglcExpertise", new Component());

}
