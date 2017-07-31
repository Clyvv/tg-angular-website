namespace glc.ui {
    "use strict";

    let app = angular.module("glc");

    interface IPeople extends ng.IController {

    }

    class Controller implements IPeople {

        page: string = "Profiles";
        profiles: Array<data.ILawyerProfile> = [];

        static $inject = ["GlcService", "$state"];
        constructor(private glcService: data.IGlcService,
            public state: ng.ui.IStateService) {
        }

        $onInit = () => {
            this.glcService.queryProfiles().then((response) => {
                this.profiles = response.data;
            })
        }

        selected = (id: string): void => {
            this.state.go("SingleProfile", { id: id });
        }


    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/workspace/profiles/profiles.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {
            };

        }
    }

    app.component("glcProfiles", new Component());

}
