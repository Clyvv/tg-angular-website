namespace lglc {

  "use strict";

  export const appName = "lglc";

  let app = angular.module(lglc.appName, ["ngComponentRouter",
    "ngResource", "ui.bootstrap", "ngSanitize"]);

  app.value("$routerRootComponent", "lglcApp");

  class LglcApp implements ng.IComponentOptions {
    templateUrl = "app/app.html";

    $routeConfig = [{
      path: "/home",
      component: "lglcDashboard",
      name: "Dashboard",
      useAsDefault: true
    }];



  }

  app.component("lglcApp", new LglcApp());

}