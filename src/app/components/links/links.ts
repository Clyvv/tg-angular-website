namespace glc.ui {
    "use strict";

    let app = angular.module("glc");

    interface ILinks extends ng.IController {

    }

    class Controller implements ILinks {
        page: string;

        $onInit = () => { }

        currentPage = (page: string): boolean => {
            let result: boolean = false;
            if (this.page == page) {
                result = true;
            }
            return result;
        }

    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/components/links/links.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {
                page: "@"
            };

        }
    }

    app.component("glcLinks", new Component());

}
