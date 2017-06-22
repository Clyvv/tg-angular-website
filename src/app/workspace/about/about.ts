namespace lglc.ui {
    "use strict";

    let app = angular.module("lglc");

    interface IAbout extends ng.IController {

    }

    class Controller implements IAbout {

        home:string = "IN About";
        $onInit = () => {
            console.log(this.home);
        }
    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/workspace/about/about.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {

            };

        }
    }

    app.component("lglcAbout", new Component());

}
