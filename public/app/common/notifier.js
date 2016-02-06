var bookApp = angular.module("bookApp");

bookApp.value("toaster",toastr);

bookApp.factory("notifier",function(toaster){
    return {
        notify: function(msg){
            toaster.success(msg);
            console.log(msg);
        }
    }
});