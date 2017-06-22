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
      component: "lglcHome",
      name: "Home",
      useAsDefault: true
    },{
      path: "/about",
      component: "lglcAbout",
      name: "About"
    },{
      path: "/expertise",
      component: "lglcExpertise",
      name: "Expertise"
    },{
      path: "/people",
      component: "lglcPeople",
      name: "People"
    },{
      path: "/trust",
      component: "lglcTrust",
      name: "Trust"
    },{
      path: "/publications",
      component: "lglcPublication",
      name: "Publication"
    },{
      path: "/careers",
      component: "lglcCareer",
      name: "Career"
    },{
      path: "/contact-us",
      component: "lglcContact",
      name: "Contact"
    }
    ];



  }

  app.component("lglcApp", new LglcApp());

}