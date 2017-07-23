namespace glc.data {
    "use strict";

    let app = angular.module("glc");

    export interface IService {
        id: string;
        name: string;
        description: string;
    }

    export interface ILawyerProfile {
        id: string;
        profileType: string;
        name: string;
        position: string;
        yearOfRegistration: string;
        qualification: string;
        email: string;
        status: string;
        areaofPractice: string;
        imgUrl: string;
    }

    export interface IGlcService {

        queryServices(): ng.IHttpPromise<Array<IService>>;
        queryProfiles(): ng.IHttpPromise<Array<ILawyerProfile>>;

    }


    class GlcService implements IGlcService {

        static $inject = ["$http"];
        constructor(private http: ng.IHttpService) {
        }

        queryServices = (): ng.IHttpPromise<Array<IService>> => {
            let url: string = "assets/services.json";
            return this.http.get(url);
        }

        queryProfiles = (): ng.IHttpPromise<Array<ILawyerProfile>> => {
            let url: string = "assets/profiles.json";
            return this.http.get(url);
        }


    }

    app.service("GlcService", GlcService);
}