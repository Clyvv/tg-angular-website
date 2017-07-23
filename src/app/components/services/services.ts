namespace glc.ui {
    "use strict";

    let app = angular.module("glc");

    interface ILinks extends ng.IController {
        selected: (service: Object) => void;
    }

    class Controller implements ILinks {
        service: string;
        public selected: (service: Object) => void;
        services: Array<data.IService> = [];

        static $inject = ["GlcService"];
        constructor(private glcService: data.IGlcService) {
        }


        $onInit = () => {
            this.glcService.queryServices().then((response) => {
                this.services = response.data;
            })
        }

        changeService = (service: string) => {
            this.service = service;
            this.selected({ service: service });
        }

    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/components/services/services.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {
                selected: "&",
                service: "<"
            };

        }
    }

    app.component("glcServices", new Component());

}
