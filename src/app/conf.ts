namespace glc {
    "use strict";

    let app = angular.module("glc");

    class GlcApp implements ng.IComponentOptions {
        templateUrl = "app/workspace/app.html";
    }

    app.component("glcApp", new GlcApp());

}