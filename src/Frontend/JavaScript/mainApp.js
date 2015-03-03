/**
 * Created by Andrew on 2/21/2015.
 */
var app = angular.module("mainApp", ['dummyDAO','ui.router']);

app.config(function($stateProvider, $urlRouterProvider ) {

    $urlRouterProvider.otherwise('main-home');

    $stateProvider

        .state('main', {
            url: '/main',
            template: '',
            controller: 'mainController'

        })
            .state('main.home', {
                url: '-home',
                templateUrl: '../HTML/mainView.html',
                views: {

                    // the main template will be placed here (relatively named)
                    '': {templateUrl: 'mainView.html'},

                    // the child views will be defined here (absolutely named)
                    view1: {
                        templateUrl: 'table-data.html',
                        controller: 'scotchController'
                    },

                    // for column two, we'll define a separate controller
                    view2: {
                        templateUrl: '../HTML/trending.html',
                        controller:'trendingController'
                    }
                }
            })
            .state('main.about', {
                url: '-about',
                templateUrl: '../HTML/mainView.html',
                views: {

                    // the main template will be placed here (relatively named)
                    '': {templateUrl: 'mainView.html'},

                    // the child views will be defined here (absolutely named)
                    view1: {
                        templateUrl: '../HTML/test.html'
                    },

                    // for column two, we'll define a separate controller
                    view2: {
                        template: 'Look I am a ABOUT man!!!!'
                    }
                }

            })
            .state('main.search', {
                url: '-search',
                templateUrl: '../HTML/mainView.html',
                views: {

                    // the main template will be placed here (relatively named)
                    '': {templateUrl: 'mainView.html'},

                    // the child views will be defined here (absolutely named)
                    view1: {
                        templateUrl: '../HTML/search.html'
                    },

                    // for column two, we'll define a separate controller
                    view2: {
                        templateUrl: 'trending.html'
                    }
                }

            });
});

            //.state('main.search',{
            //    url: '-search',
            //    templateUrl:'../HTML/mainView.html',
            //    controller: 'mainController',
            //    views: {
            //
            //        // the main template will be placed here (relatively named)
            //        '': { templateUrl: 'mainView.html' },
            //
            //        // the child views will be defined here (absolutely named)
            //        'view1@main-search':{
            //            templateUrl:'search.html'
            //        },
            //
            //        // for column two, we'll define a separate controller
            //        'view2@main-search': {
            //            template: 'we are searching!'
            //        }
            //    }
            //
            //});



        //    // nested list with custom controller
        //    .state('main.list', {
        //        url: '/list',
        //        templateUrl: 'partial-home-list.html',
        //        controller: function($scope) {
        //            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        //        }
        //    })
        //
        //    // nested list with just some random string data
        //    .state('main.paragraph', {
        //        url: '/paragraph',
        //        template: 'I could sure use a drink right now.'
        //    })
        //
        //.state('about', {
        //    url: '/about',
        //    views: {
        //
        //        // the main template will be placed here (relatively named)
        //        '': { templateUrl: 'partial-about.html' },
        //
        //        // the child views will be defined here (absolutely named)
        //        'columnOne@about': { template: 'Look I am a column!' },
        //
        //        // for column two, we'll define a separate controller
        //        'columnTwo@about': {
        //            templateUrl: 'table-data.html',
        //            controller: 'scotchController'
        //        }
        //    }
        //
        //});

