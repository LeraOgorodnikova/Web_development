"use strict";

var app = angular.module("game", ["ngRoute", "ngResource"]);

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

	.controller("menuController",function ($scope,$log,$rootScope,$routeParams) {
		$scope.page=parseInt($routeParams.id) || 0;
	})
	.directive("menuDirective" , function(){
		return {
			restrict: 'E',
			templateUrl:"assets/directives/menu.html",
			replace: true,
			transclude: true,
			controller: function($scope){
				switch($scope.current) {
					case 0:{
						$scope.button1="menu__item";
						$scope.button2="menu__item";
						$scope.button3="menu__item";
						break;
					}
					case 1:{
						$scope.button1="menu__item-disable";
						$scope.button2="menu__item";
						$scope.button3="menu__item";
						break;
					}
					case 2:{
						$scope.button1="menu__item";
						$scope.button2="menu__item-disable";
						$scope.button3="menu__item";
						break;
					}
					case 3:{
						$scope.button1="menu__item";
						$scope.button2="menu__item";
						$scope.button3="menu__item-disable";
						break;
					}
				}
			}
		}
	})