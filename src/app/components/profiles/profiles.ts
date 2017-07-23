namespace glc.ui {
    "use strict";

    let app = angular.module("glc");

    interface ILinks extends ng.IController {
        selected: (id: Object) => void;
    }

    class Controller implements ILinks {
        id: string;
        public selected: (id: Object) => void;
        profiles: Array<data.ILawyerProfile> = [];

        static $inject = ["GlcService"];
        constructor(private glcService: data.IGlcService) {
        }


        $onInit = () => {
            this.glcService.queryProfiles().then((response) => {
                this.profiles = response.data;
            })
        }

        changeProfile = (id: string) => {
            this.id = id;
            this.selected({ id: id });
        }

    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/components/profiles/profiles.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {
                selected: "&",
                id: "<"
            };

        }
    }

    app.component("glcLawyerProfiles", new Component());

}
