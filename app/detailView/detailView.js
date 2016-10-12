'use strict';

angular.module('myApp.detailView', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/detail', {
            templateUrl: 'detailView/detailView.html',
            controller: 'detailViewCtrl'
        });
    }])

    .controller('detailViewCtrl', [ '$scope', function($scope) {
        $scope.nrs = ['1','2','3','4','5'];
    }]);