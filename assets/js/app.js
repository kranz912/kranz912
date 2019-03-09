(function(){
    'use strict';
     angular.module('myapp',['ui.router','ngAnimate'])
        .controller('mainctrl',mainctrl)
        .config(config);
    mainctrl.$inject=["$scope"];
    function mainctrl($scope){
        $scope.name="Kranz Nikolai Fontanilla";
    }
    function config($stateProvider,$urlRouterProvider){
        var aboutState={
            name:'about',
            url:'/about',
            templateUrl:'about.html'
        }
        var defaultstate={
            name:'default',
            url:'/',
            templateUrl:'home.html'
        }
        $urlRouterProvider.otherwise("/");
        $stateProvider.state(defaultstate);
        $stateProvider.state(aboutState);
       
    }
})();