// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('allergia', ['ionic', 'controllers'])


    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

        });
    })



    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html"

            })

            .state('app.home', {
                url: "/home",
                views: {
                    'menuContent': {
                        templateUrl: "templates/home.html"
                    }

                }
            })

            .state('app.all', {
                url: "/all",
                views: {
                    'menuContent': {
                        templateUrl: "templates/all.html",
                        controller: 'ChartsCtrl'
                    }
                }
            })

            .state('app.tallinn', {
                url: "/tallinn",
                views: {
                    'menuContent': {
                        templateUrl: "templates/tallinn.html",
                        controller: 'ChartsCtrl'
                    }
                }
            })

            .state('app.tartu', {
                url: "/tartu",
                views: {
                    'menuContent': {
                        templateUrl: "templates/tartu.html",
                        controller: 'ChartsCtrl'
                    }
                }
            })

            .state('app.parnu', {
                url: "/parnu",
                views: {
                    'menuContent': {
                        templateUrl: "templates/parnu.html",
                        controller: 'ChartsCtrl'
                    }
                }
            })

            .state('app.kuressaare', {
                url: "/kuressaare",
                views: {
                    'menuContent': {
                        templateUrl: "templates/kuressaare.html",
                        controller: 'ChartsCtrl'
                    }
                }
            })

            .state('app.johvi', {
                url: "/johvi",
                views: {
                    'menuContent': {
                        templateUrl: "templates/johvi.html",
                        controller: 'ChartsCtrl'
                    }
                }
            })

            .state('app.info', {
                url: "/info",
                views: {
                    'menuContent': {
                        templateUrl: "templates/info.html"
                    }
                }
            })

            .state('app.tips', {
                url: "/tips",
                views: {
                    'menuContent': {
                        templateUrl: "templates/tips.html"
                    }
                }
            })

            .state('app.table', {
                url: "/table",
                views: {
                    'menuContent': {
                        templateUrl: "templates/table.html"
                    }
                }
            })




        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    });
