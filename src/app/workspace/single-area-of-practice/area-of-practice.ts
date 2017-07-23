namespace glc.ui {
    "use strict";

    let app = angular.module("glc");

    interface IExpertise extends ng.IController {

    }

    class Controller implements IExpertise {
        $router: any;
        service: string;
        selected = (service: string) => {
            this.$router.navigate(["SingleAreaOfPractice", { service: service }]);
        }

        $routerOnActivate = (params: any) => {
            this.service = params.params.service;
        }
    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/workspace/single-area-of-practice/area-of-practice.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {
                $router: "<"
            };

        }
    }

    app.component("glcSingleAreaOfPractice", new Component());

}
