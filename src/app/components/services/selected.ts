namespace glc.ui {
    "use strict";

    let app = angular.module("glc");

    interface ILinks extends ng.IController {

    }

    class Controller implements ILinks {
        service: string;
        services: Array<data.IService> = [];
        description: string;
        static $inject = ["GlcService"];
        constructor(private glcService: data.IGlcService) {
        }

        $onChanges = (changes: any) => {
            if (this.service)
                this.glcService.queryServices().then((response) => {
                    this.services = response.data;
                    this.services.forEach((service) => {
                        if (this.service == service.name) {
                            this.description = service.description;
                        }
                    })
                })
        }

    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/components/services/selected.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {
                service: "<"
            };

        }
    }

    app.component("glcServiceSelected", new Component());

}
