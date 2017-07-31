namespace glc {

  "use strict";

  export const appName = "glc";

  let app = angular.module(glc.appName, ["ngComponentRouter",
    "ngResource", "ui.bootstrap", "ngSanitize", "ui.router"]);


  app.value("$routerRootComponent", "glcApp");



  class Config {
    static $inject = ["$stateProvider", "$urlRouterProvider"];

    constructor(stateProvider: ng.ui.IStateProvider,
      routeProvider: ng.ui.IUrlRouterProvider) {
      stateProvider.state("Home", {
        url: "/home",
        component: "glcHome"
      }).state("About", {
        url: "/about",
        component: "glcAbout"
      }).state("AreasOfPractice", {
        url: "/areas-of-practice",
        component: "glcAreasOfPractice"
      }).state("SingleAreaOfPractice", {
        url: "/areas-of-practice/:service",
        component: "glcSingleAreaOfPractice"
      }).state("Profiles", {
        url: "/profiles",
        component: "glcProfiles"
      }).state("SingleProfile", {
        url: "/profiles/:id",
        component: "glcSingleProfile"
      }).state("Clientele", {
        url: "/clientele",
        component: "glcClientele"
      }).state("Contact", {
        url: "/contact-us",
        component: "glcContact"
      });

      routeProvider.otherwise("/home");

    }

  }
  app.config(Config);

}