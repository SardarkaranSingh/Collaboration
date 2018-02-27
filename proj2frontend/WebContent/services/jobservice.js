/**
 * 
 */
app.factory('JobService',function($http){
	var jobService={}
	
	jobService.addJob=function(job){
		return $http.post("http://localhost:8085/proj2middleware/addjob",job)
	}
	
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:8085/proj2middleware/alljobs")
	}
	
	return jobService;
})