namespace lglc.ui {
    "use strict";

    let app = angular.module("lglc");

    interface IPeople extends ng.IController {

    }

    class Controller implements IPeople {

        home:string = "IN People";
        $onInit = () => {
            console.log(this.home);
        }
    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/workspace/people/people.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {

            };

        }
    }

    app.component("lglcPeople", new Component());

}
