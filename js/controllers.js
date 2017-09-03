var loginModule = angular.module('loginModule',[]);
var log = [];
loginModule.controller('iformController',function($scope,$http){

  // $scope.submit = function(){
  //   console.log($scope);
  //   $http({
  //     method :'post',
  //     url:'http://jjh.console.10039.cc/user/getLoginStatus',
  //     data:$scope.user
  //   }).success(function(data){
  //   });
  // };
});

loginModule.controller('BookListCtrl',function($scope,$http){
  $scope.myData =[{name:'zhangsan',age:50},{name:'lisi',age:30},{name:'wangwu',age:40}];
  $scope.gridOptions = {data:'myData'};
});