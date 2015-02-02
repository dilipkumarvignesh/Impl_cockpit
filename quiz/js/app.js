angular.module('quizApp', [
  'quizcontrollers',
  'ngRoute'
]).
config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when("/phase1",{templateUrl:"partials/phase1.html",controller:"phase1Controller"}).
	when("/phase2",{templateUrl:"partials/phase2.html",controller:"phase1Controller"}).
	otherwise({redirectTo:'/phases'});



}]);