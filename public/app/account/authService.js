var bookApp = angular.module("bookApp");

bookApp.factory("identity",function($window,User){
    var currentUser = undefined;
    if($window.serverUser){
        currentUser = new User();
        angular.extend(currentUser,$window.serverUser);
        //currentUser = user;
    }
    
    return {
        currentUser:currentUser,
        isAuthenticated: function(){
            return !!this.currentUser;
        },
        isAuthorized : function(role){
            return this.isAuthenticated() && this.currentUser.roles && this.currentUser.roles.indexOf(role) > -1;
        }
    }
})

bookApp.factory("authService",function($http,identity,User,$q){
    
    return {
        login:function(username,password){
            return $http.post("/login",{username:username,password:password}).success(function(data){
               var user = new User();
               console.log("Login Data user");
               console.log(data);
               angular.extend(user,data.user);
               
               identity.currentUser = user;
            }).error(function(err){
                console.log(err);
            });
        },
        
        logout : function(){
          return $http.post("/logout",{logout:true}).success(function(data){
              identity.currentUser = undefined;
          }).error(function(err){
              console.log(err);
          })  
        },
        
        authorizeForRoute : function(role){
           if(identity.isAuthorized(role)){
               return true;
           }
           return $q.reject("Not Authorized");
        }
        
    }
    
});