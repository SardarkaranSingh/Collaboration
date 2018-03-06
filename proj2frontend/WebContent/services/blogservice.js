/**
 * 
 */
app.factory('BlogService',function($http){
	var blogService={}
	
	blogService.addBlog=function(blog){
		return $http.post("http://localhost:8085/proj2middleware/addblogpost",blog)
	}
	

	blogService.getBlogsWaitingForApproval=function(){
		return $http.get("http://localhost:8085/proj2middleware/getblogs/"+0)
	}
	
	blogService.getBlogsApproved=function(){
		return $http.get("http://localhost:8085/proj2middleware/getblogs/"+1)
	}
	
	blogService.getBlog=function(id){
		return $http.get("http://localhost:8085/proj2middleware/getblog/"+id)
	}
	blogService.approve=function(blog){
		return $http.put("http://localhost:8085/proj2middleware/approve",blog)
	}
	
	blogService.reject=function(blog,rejectionReason){
		return $http.put("http://localhost:8085/proj2middleware/reject/"+rejectionReason,blog)
	}
	return blogService;
	
})