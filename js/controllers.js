var loginModule = angular.module('loginModule',[])
loginModule.controller('iformController',['$scope',function($scope){
  $scope.submit = function(){
    alert("aaa");
  }
}]);