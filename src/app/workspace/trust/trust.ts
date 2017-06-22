namespace lglc.ui {
    "use strict";

    let app = angular.module("lglc");

    interface ITrust extends ng.IController {

    }

    class Controller implements ITrust {

        home:string = "IN Trust";
        $onInit = () => {
            console.log(this.home);
        }
    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/workspace/trust/trust.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {

            };

        }
    }

    app.component("lglcTrust", new Component());

}
