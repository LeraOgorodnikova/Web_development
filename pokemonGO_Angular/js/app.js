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
			scope:{
			current:'='
		    }
		}
	})
.controller("gameController",function ($scope,$log,$rootScope,$routeParams) {
	$scope.ballPos={'X':0,'Y':0};

    var tictac, tic=0;
		$scope.start=function(){
		tictac=$interval(function(){
			tic++;
			$scope.ballPos.X=50*Math.sin(tic/50);
			$scope.ballPos.Y=20*Math.cos(tic/20);
		},50);	
	};
	})
.directive("pokemonDirective" , function(){
		return {
			restrict: 'E',
			templateUrl:"assets/directives/pokemon.html",
			replace: true,
			scope:{
			current:'='
		    },
		    //code
		}
	})