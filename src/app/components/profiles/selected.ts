namespace glc.ui {
    "use strict";

    let app = angular.module("glc");

    interface ILinks extends ng.IController {

    }

    class Controller implements ILinks {
        id: string;
        profile: data.ILawyerProfile;
        profiles: Array<data.ILawyerProfile> = [];
        static $inject = ["GlcService"];
        constructor(private glcService: data.IGlcService) {
        }

        $onChanges = (onChangesObj: ng.IOnChangesObject) => {
            if (this.id)
                this.glcService.queryProfiles().then((response) => {
                    this.profiles = response.data;
                    this.profiles.forEach((profile) => {
                        if (this.id == profile.id) {
                            this.profile = profile;
                        }
                    })
                })
        }

    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/components/profiles/selected.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {
                id: "<"
            };

        }
    }

    app.component("glcProfileSelected", new Component());

}
