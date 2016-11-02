"use strict";

var app = angular.module("app", ["ngRoute", "ngResource"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/page/:id", {
        templateUrl : function(page){
        	return "assets/page-"+page.id+".html"
        },
        controller: "pagesController"
    })
    .otherwise("/page/0");
})
.controller("pagesController",function($scope,$log,$rootScope,$routeParams,$interval){
	$scope.page=parseInt($routeParams.id) || 0;
	
})
.controller('ListScoreController', function($scope, $http,$log) {
  $http.get("http://localhost:8081/?controller=user").then(function (response) {
      $newArray = response.data.records;
      $newArray.sort();
      alert("IN LIST");
      alert($newArray);
      $scope.UserScore=$newArray;
  });
})

.controller("menuController",function ($scope,$log,$rootScope,$routeParams) {
		$scope.page=parseInt($routeParams.id) || 0;
	})
.directive("menuDirective" , function(){
		return {
			restrict: 'E',
			templateUrl:"assets/directives/menu.html",
			replace: true,
			// transclude: true,
			scope:{
			current:'='
		    },
			controller: function($scope){
			 //$scope.page=parseInt($routeParams.id) || 0;
			 //$scope.current=$scope.page;
			 }
		}
	})