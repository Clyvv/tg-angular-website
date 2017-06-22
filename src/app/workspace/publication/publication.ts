namespace lglc.ui {
    "use strict";

    let app = angular.module("lglc");

    interface IPublication extends ng.IController {

    }

    class Controller implements IPublication {

        home:string = "IN Publication";
        $onInit = () => {
            console.log(this.home);
        }
    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/workspace/publication/publication.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {

            };

        }
    }

    app.component("lglcPublication", new Component());

}
