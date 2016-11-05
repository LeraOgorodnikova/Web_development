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
.value('pok', {
  power: 0,
  speed: 0,
  width: 100 ,
  height: 100 ,
  image: ""
})
.controller("gameController",['pok',function ($scope,$log,$rootScope,$routeParams,$interval) {
	$scope.ballPos={'X':0,'Y':0};
    $scope.score=0;
    $scope.level=1;
    $scope.time=0;
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
		$rootScope.$on('catch',function(){
		$scope.level++;
        $scope.score+= pok.power*tic*pok.speed;
	});
	}])
.directive("pokemonDirective" ,['pok', function(){
		return {
			restrict: 'E',
			templateUrl:"assets/directives/pokemon.html",
			replace: true,
		    controller: function($scope){
		        $scope.catch=function(){
		        $rootScope.$emit('catch');
	            };
		    },
		    controller:function($scope, $http){
                $http.get("?controller=pokemon").then(function (response) {
                var newArray = response.data;
                pok.power=newArray["power"];
                pok.speed=newArray["speed"];
                pok.image=newArray["image"];
                });
		    },
            scope:{
			pokwidth: pok.width,
            pokheight: pok.height,
            imagePokemon: pok.image
		    }
		}
	}])