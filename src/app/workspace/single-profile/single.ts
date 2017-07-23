namespace glc.ui {
    "use strict";

    let app = angular.module("glc");

    interface IPeople extends ng.IController {

    }

    class Controller implements IPeople {

        $router: any;
        id: string;
        profiles: Array<data.ILawyerProfile> = [];

        static $inject = ["GlcService"];
        constructor(private glcService: data.IGlcService) {
        }

        selected = (id: string) => {
            this.$router.navigate(["SingleProfile", { id: id }]);
        }

        $routerOnActivate = (params: any) => {
            this.id = params.params.id;
        }


    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/workspace/single-profile/single.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {
                $router: "<"
            };

        }
    }

    app.component("glcSingleProfile", new Component());

}
