namespace glc.ui {
    "use strict";

    let app = angular.module("glc");

    interface IPeople extends ng.IController {

    }

    class Controller implements IPeople {

        page: string = "Profiles";
        id: string;
        profiles: Array<data.ILawyerProfile> = [];

        static $inject = ["GlcService", "$state", "$stateParams"];
        constructor(private glcService: data.IGlcService,
            public state: ng.ui.IStateService,
            public params: ng.ui.IStateParamsService) {
            this.id = params["id"];
        }

        $onInit = () => { }
        
        selected = (id: string) => {
            this.state.go("SingleProfile", { id: id });
        }



    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/workspace/single-profile/single.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {
            };

        }
    }

    app.component("glcSingleProfile", new Component());

}
