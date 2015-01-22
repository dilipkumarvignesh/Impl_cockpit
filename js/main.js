(function()
{
var app=angular.module('main',[]);

var progress=0;
var badge=0;

app.service('dataService',function(){
this.progress=10;
this.badge=0;

});

app.controller('mainController',function()
{

});

app.controller('progressController',function(dataService)
{
this.progress={};
this.progress.status=progress;
});

app.controller('badgeController',function()
{
this.badges=['evaluate','realize','goLive','production','change'];
});
app.controller('updateController',function(dataService)
{
this.setUpdate=function()
{
progress=progress+10;
alert(dataService.progress);
};
});

})();