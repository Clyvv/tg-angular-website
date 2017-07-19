namespace glc.data {
    "use strict";

    let app = angular.module("glc");

    export interface IService {
        name: string;
        description: string;
    }

    export interface IGlcService {

        queryServices(): ng.IHttpPromise<Array<IService>>;

    }


    class GlcService implements IGlcService {

        static $inject = ["$http"];
        constructor(private http: ng.IHttpService) {
        }

        queryServices = (): ng.IHttpPromise<Array<IService>> => {
            let url: string = "assets/services.json";
            return this.http.get(url);
        }


    }

    app.service("GlcService", GlcService);
}