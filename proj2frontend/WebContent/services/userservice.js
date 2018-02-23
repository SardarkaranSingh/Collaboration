/**
 * 
 */
app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
		return $http.post("http://localhost:8085/proj2middleware/registeruser",user)
	}
	
	userService.login=function(user){
		return $http.post("http://localhost:8085/proj2middleware/login",user)
	}
	
	userService.logout=function(){
		return $http.put("http://localhost:8085/proj2middleware/logout")
	}
	
	return userService
})