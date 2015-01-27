(
function(){
var directives=angular.module('directive',[]);
directives.directive('loadQuiz',function($http)
{
return {
restrict:'E',
templateUrl:'partials/quiz.html',
controller:function()
{
var quiz=this;
debugger;
$http.get('resources/quiz.json').success(function(data)
{

this.quizdata=data;
});
}


};});

})();