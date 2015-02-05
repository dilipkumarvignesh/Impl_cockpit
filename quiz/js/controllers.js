angular.module('quizcontrollers',[]).
controller('quizController',function($scope){
	{
	$scope.showResult=false;
	$scope.answerScore=0;
	$scope.questions=[
     {"questions":{
        "question": "Current Implementation Cockpit Supports how many Change Projects",
                "answers": [
                    "1",
                    "2",
                     "10",
                     "Multiple"
                ],
                "a": 0
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
				"a":2
			}},
			{
			"questions":
			{
                "question":"Implementation Cockpit Belongs to ",
				"answers":[
				"SFin",
				"SPro",			
				"SSuite",
				"SCrm"
				],
				"a":2
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
				"a":2
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
				"a":2
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
				"a":1
			}}
			];
			
			$scope.setAnswer=function(question,answer)
		{
		if($scope.questions[question].questions.a == answer)
		$scope.answerScore++;
		 
		}
		$scope.compute=function(question)
		{
		$scope.showResult=true;
		}
	
	}
	

});