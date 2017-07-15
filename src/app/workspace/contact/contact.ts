namespace lglc.ui {
    "use strict";

    let app = angular.module("lglc");

    interface IContact extends ng.IController {

    }

    class Controller implements IContact {

       
    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/workspace/contact/contact.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {

            };

        }
    }

    app.component("lglcContact", new Component());

}
