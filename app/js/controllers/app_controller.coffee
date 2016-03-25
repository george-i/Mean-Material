angular.module("app").controller 'AppController', ($scope,$state) ->
    $scope.app = 'cross-app stuff'

    # layout helper methods for templating
    $scope.layout =
        template: (file)-> "layout/#{file}.html"        
        partial:  (file)-> "partials/#{file}.html"

    $scope.$state = $state

    $scope.isActive = (st)->
      return st == $state.current.name

