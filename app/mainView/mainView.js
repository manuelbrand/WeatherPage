'use strict';

angular.module('myApp.mainView', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'mainView/mainView.html',
            controller: 'mainViewCtrl'
        });
    }])

    .controller('mainViewCtrl', [function() {

    }]);