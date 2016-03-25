angular.module("app").config(function($urlRouterProvider) {
    //$urlRouterProvider.html5Mode(true);
    // provide default page if no other route matches
    // see routes/* for more
    $urlRouterProvider.otherwise('/');
});