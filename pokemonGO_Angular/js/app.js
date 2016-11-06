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

.factory("GameScore", function() {
  var score = 0;
  function setScore(value) {
    score=value;
  };
  function getScore() {
    return score
  };
  return {
    getScore: getScore,
    setScore: setScore
  };
})
.controller("gameController", function ($scope,$log,$rootScope,$routeParams,$interval,GameScore,$http,$location) {
	$scope.ballPos={'X':0,'Y':0};
    $scope.score=0;
    $scope.finalScore=GameScore.getScore();
    $scope.level=1;
    $scope.time=0;
    var tictac, tic=0;

	$scope.sendUser=function()
	{
			$http.post('/?controller=user&name='+$scope.name.username.$modelValue+'&score='+$scope.finalScore)
			.success(function () {
				$location.path('/page/3');
			});
	}
	})
.directive("pokemonDirective" , function(){
		return {
			restrict: 'E',
			templateUrl:"assets/directives/pokemon.html",
			replace: true,
		    controller: function($scope){
		        $scope.catch=function(){
		        $rootScope.$emit('catch');
	            };
		    },
		    controller:function($scope, $http,GameScore,$interval,$location){
                  	var timer;
  		            var tic =0;
  		            $scope.ballPos={'X':0,'Y':0};

            $scope.startGame=function(){

  			var start = Date.now();
  			timer = $interval(function() {
  			$scope.time = parseInt(10-(Date.now() - start)/1000);
            $http.get('/?controller=pokemon&id='+$scope.level)
              .success(function(data) {
              $scope.PokemonNow = data;
              })
  			if ($scope.time <=0) {
  				//$location.path('/page/5');
    			clearInterval(timer);
    			$scope.catch();
    			start = Date.now();
  			}			
  			tic++;
			$scope.ballPos.X=40*Math.sin(tic/50);
			$scope.ballPos.Y=50*Math.cos(tic/60);
		}, 50);
  		};
		 $scope.catch=function(){ 
        $scope.level++;
        if ($scope.level==4){
			$location.path('/page/5');
		}
		
        GameScore.setScore(GameScore.getScore()+$scope.PokemonNow.power*$scope.time);
        //alert(GameScore.getScore());
        $scope.score=GameScore.getScore();
		$http.get('?controller=pokemon&id='+parseInt($scope.level))
			.success(function(data) {
  				$scope.PokemonNow=data;

  			})

		$interval.cancel(timer);
		$scope.startGame();
	    };
		
		},
		}
	})