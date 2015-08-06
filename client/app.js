angular.module('app', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  var home = {
    name: 'home',
    url: '/',
    templateUrl: './home/home.html'
  };

  var leaderboard = {
    name: 'leaderboard',
    url: '/leaderboard',
    templateUrl: './leaderboard/leaderboard.html'
  };

  $stateProvider
    .state(home)
    .state(leaderboard)

}])

.run(['$state', function($state){
  $state.transitionTo('home');
}]);