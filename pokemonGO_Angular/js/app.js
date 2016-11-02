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
	$scope.ballPos={'X':0,'Y':0};

    var tictac, tic=0;
		$scope.start=function(){
		tictac=$interval(function(){
			tic++;
			$scope.ballPos.X=50*Math.sin(tic/50);
			$scope.ballPos.Y=20*Math.cos(tic/20);
		},50);	
	};
	$scope.stop=function(){
		$interval.cancel(tictac);
	};
	
})
.controller('ListScoreController', function($scope, $http) {
  $http.get("?controller=user").then(function (response) {
      var newArray = response.data;
      $scope.UserScore=newArray;
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