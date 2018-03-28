/**
 * 
 */
app.factory('FriendService',function($http){
	var friendService={}
	
	friendService.getAllSuggestedUsers=function(){
		return $http.get("http://localhost:8085/proj2middleware/suggestedusers")
	}
	
	friendService.addFriend=function(toId){
		return $http.post("http://localhost:8085/proj2middleware/addfriend",toId)
	}
	
	friendService.getPendingRequests=function()
	{
		return $http.get("http://localhost:8085/proj2middleware/pendingrequests");
	}
	
	friendService.acceptRequest=function(request){
		return $http.put("http://localhost:8085/proj2middleware/acceptrequest",request);
	}
	
	friendService.deleteRequest=function(request){
		return $http.put("http://localhost:8085/proj2middleware/deleterequest",request);
	}
	
	friendService.getAllFriends=function(){
		return $http.get("http://localhost:8085/proj2middleware/friends");
	}
	
	
	return friendService;
})