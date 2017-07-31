namespace glc.ui {
    "use strict";

    let app = angular.module("glc");

    interface IExpertise extends ng.IController {

    }

    class Controller implements IExpertise {

        page: string = "AreasOfPractice";
        service: string;

        static $inject = ["$state", "$stateParams"];

        constructor(public state: ng.ui.IStateService,
            public params: ng.ui.IStateParamsService) {
            this.service = params["service"];
        }
        selected = (service: string) => {
            this.state.go("SingleAreaOfPractice", { service: service });
        }

    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/workspace/single-area-of-practice/area-of-practice.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {
            };

        }
    }

    app.component("glcSingleAreaOfPractice", new Component());

}
