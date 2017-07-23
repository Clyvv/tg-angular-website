namespace glc {

  "use strict";

  export const appName = "glc";

  let app = angular.module(glc.appName, ["ngComponentRouter",
    "ngResource", "ui.bootstrap", "ngSanitize"]);
  /* 
    class Configuration {
      constructor(private $stateProvider: ng.ui.IStateProvider, private $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        this.init();
      }
  
      private init(): void {
        this.$stateProvider.state("home", Configuration.defaultState());
        this.$stateProvider.state("about", Configuration.about());
        this.$urlRouterProvider.otherwise('/home');
      }
  
      private static defaultState(): ng.ui.IState {
        return {
          url: "/home",
          templateUrl: "app/workspace/home/home.html",
          controller: "glcHome",
          controllerAs: "vm"
        }
      }
  
      private static about(): ng.ui.IState {
        return {
          url: "/about",
          templateUrl: "app/workspace/about/about.html",
          controller: "glcAbout",
          controllerAs: "vm"
        }
      }
    }
  
    app.config(['$stateProvider', '$urlRouterProvider',
      ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        return new Configuration($stateProvider, $urlRouterProvider)
      }]) */

  app.value("$routerRootComponent", "glcApp");

  class LglcApp implements ng.IComponentOptions {
    templateUrl = "app/workspace/app.html";

    $routeConfig = [{
      path: "/home",
      component: "glcHome",
      name: "Home",
      useAsDefault: true
    }, {
      path: "/about",
      component: "glcAbout",
      name: "About"
    }, {
      path: "/areas-of-practice",
      component: "glcAreasOfPractice",
      name: "AreasOfPractice"
    }, {
      path: "/areas-of-practice/:service",
      component: "glcSingleAreaOfPractice",
      name: "SingleAreaOfPractice"
    }, {
      path: "/profiles",
      component: "glcProfiles",
      name: "Profiles"
    }, {
      path: "/profiles/:id",
      component: "glcSingleProfile",
      name: "SingleProfile"
    }, {
      path: "/clientele",
      component: "glcClientele",
      name: "Clientele"
    }, {
      path: "/contact-us",
      component: "glcContact",
      name: "Contact"
    }
    ];



  }

  app.component("glcApp", new LglcApp());

}