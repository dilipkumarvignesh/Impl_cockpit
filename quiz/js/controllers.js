angular.module('quizcontrollers',[]).
controller('quizController',function($scope){
	{
	$scope.questions=[
     {"questions":{
        "question": "Current Implementation Cockpit Supports how many Change Projects",
                "answers": [
                    "1",
                    "2",
                     "10",
                     "Multiple"
                ],
                "a": '0'
            }
			},{
			"questions":
			{
                "question":"Change Project can be created in which Phase",
				"answers":[
				"ProductionPhase",
				"RealizePhase",
				"ChangePhase",			
				"EvaluatePhase"
				],
				"a":'2'
			}},
			{
			"questions":
			{
                "question":"Implementation Cockpit Belongs to ",
				"answers":[
				"SFin",
				"ERP",			
				"SCrm",
				"Logistics"
				],
				"a":'2'
			}},{
			"questions":
			{
                "question":"Change Project can be created in which Phase",
				"answers":[
				"ProductionPhase",
				"RealizePhase",
				"ChangePhase",			
				"EvaluatePhase"
				],
				"a":'2'
			}},{
			"questions":
			{
                "question":"Change Project can be created in which Phase",
				"answers":[
				"ProductionPhase",
				"RealizePhase",
				"ChangePhase",			
				"EvaluatePhase"
				],
				"a":'2'
			}},{
			"questions":
			{
                "question":"Change Project can be created in which Phase",
				"answers":[
				"ProductionPhase",
				"RealizePhase",
				"ChangePhase",			
				"EvaluatePhase"
				],
				"a":'2'
			}}
			];
			$scope.setAnswer=function()
		{
		alert("hello");
		}
		$scope.compute=function()
		{
		alert("hello");
		}
	
	}
	

});