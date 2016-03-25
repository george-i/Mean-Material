angular.module('app').config ($stateProvider) ->
  $stateProvider.state 'home',
    url: '/'
    templateUrl: 'home.html'
    data: {
      pageTitle: 'Home'
    }