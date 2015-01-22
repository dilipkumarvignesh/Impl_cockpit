(function()
{
var app=angular.module('main',['directive']);



app.service('dataService',function(){
this.progress=20;
this.badge=0;

});

app.controller('mainController',function()
{

});

app.controller('progressController',function($scope,dataService)
{

this.progress={};
this.progress.status=10;
/*$scope.apply(function(){
$scope.progress=dataService.progress;
});
*/
this.setUpdate=function(){
this.progress.status=dataService.progress;
};
});

app.controller('badgeController',function()
{
this.badges=['evaluate','realize','goLive','production','change'];
});
app.controller('updateController',function(dataService)
{
this.setUpdate=function()
{
dataService.progress+=10;

};
});

})();