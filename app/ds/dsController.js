'use strict';

var dsController = angular.module('dsController', []);

dsController.controller('DsCtrl', ['$scope', '$localStorage',
    function($scope, $localStorage) {
        $scope.showNew = false;

        $scope.saveNewChar = function() {

        }
        /*$scope.redirectToTimeline = function() {
         $location.path('/timeline');
         };

         $scope.redirectToMaps = function() {
         $location.path('/maps');
         };*/

    }]);