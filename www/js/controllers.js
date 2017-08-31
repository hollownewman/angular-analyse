var loginModule = angular.module('loginModule',[]);
var log = [];
loginModule.controller('iformController',function($scope,$http){
  // var values = {name:'misko',gender:'male'};
  // angular.forEach(values,function(value,key){
  //   console.log(value+'z');
  //   console.log(this==log);
  //   this.push(key+':'+value);
  //   $scope.dd = log.join(',');
  // },log);
  
  $scope.submit = function(){
    console.log($http);
    console.log($scope.user);
    alert("aaa");
  }
});