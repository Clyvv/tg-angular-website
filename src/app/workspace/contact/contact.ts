namespace glc.ui {
    "use strict";

    let app = angular.module("glc");

    interface IContact extends ng.IController {

    }

    class Controller implements IContact {
        page: string = "Contact";

        $onInit = () => { }
        
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

    app.component("glcContact", new Component());

}
