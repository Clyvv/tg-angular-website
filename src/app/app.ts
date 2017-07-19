namespace glc {

  "use strict";

  export const appName = "glc";

  let app = angular.module(glc.appName, ["ngComponentRouter",
    "ngResource", "ui.bootstrap", "ngSanitize"]);

  app.value("$routerRootComponent", "glcApp");

  class LglcApp implements ng.IComponentOptions {
    templateUrl = "app/workspace/app.html";

    $routeConfig = [{
      path: "/home",
      component: "glcHome",
      name: "Home",
      useAsDefault: true
    },{
      path: "/about",
      component: "glcAbout",
      name: "About"
    },{
      path: "/areas-of-practice",
      component: "glcAreasOfPractice",
      name: "AreasOfPractice"
    },{
      path: "/profiles",
      component: "glcProfiles",
      name: "Profiles"
    },{
      path: "/clientele",
      component: "glcClientele",
      name: "Clientele"
    },{
      path: "/contact-us",
      component: "glcContact",
      name: "Contact"
    }
    ];



  }

  app.component("glcApp", new LglcApp());

}