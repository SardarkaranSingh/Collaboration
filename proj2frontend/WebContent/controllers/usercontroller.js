/**
 * 
 */
app.controller('UserController',function($scope,$location,UserService){
	
	$scope.registerUser=function(user)
	{
		 UserService.registerUser(user).then(function(response){
				alert('Updated Details successfully')
				$location.path('/getallemployees')
			},function(response){
				$scope.errorMessage=response.data
			})
	}
	$scope.login=function(user)
	{
		console.log('UserCnntroller -> login')
		console.log(user)
		UserService.login(user).then(function(response){
			console.log('sucess')
			console.log('response.data')
			$location.path('/home')
		},function(response)
		{
			console.log('error')
			$scope.error=response.data
			$location.path('/login')
		})
	}	




})
