(
function(){
var directives=angular.module('directive',[$http,]);
directives.directive('loadQuiz',function($http)
{
return {
restrict:'E',
templateUrl:'partials/quiz.html',
controller:function()
{
$http.get('$')
}
};
});
})();