var bootApp = angular.module('bootApp',['ui.router']);

bootApp.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/index');
  $stateProvider.state('index',{
    url:'/index',
    views:{
      '':{
        templateUrl:'tpls/home.html'
      },
      'main@index':{
        templateUrl:'tpls/login.html'
      }
    }
    
  })
});