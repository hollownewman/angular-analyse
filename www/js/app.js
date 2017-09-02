var bootApp = angular.module('bootApp',['ui.router','loginModule','ngGrid']);

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
  .state('booklist',{
    url:'/{bookType:[0-9]{1,4}',
    views:{
      '':{
        templateUrl:'tpls/bookList.html'
      },
      'booktype@booklist':{
        templateUrl:'tpls/booktype.html'
      },
      'bookgrid@booklist':{
        templateUrl:'tpls/bookgrid.html'
      }

    }
  })
  .state('addbook',{
    url:'/addbook',
    templateUrl:'tpls/addBook.html'
  });
});