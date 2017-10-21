angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('phoneCall', {
    url: '/page2',
    templateUrl: 'templates/phoneCall.html',
    controller: 'phoneCallCtrl'
  })

  .state('chaperone', {
    url: '/page4',
    templateUrl: 'templates/chaperone.html',
    controller: 'chaperoneCtrl'
  })

  .state('contactingAllies', {
    url: '/page3',
    templateUrl: 'templates/contactingAllies.html',
    controller: 'contactingAlliesCtrl'
  })

  .state('noAlliesFound', {
    url: '/page5',
    templateUrl: 'templates/noAlliesFound.html',
    controller: 'noAlliesFoundCtrl'
  })

  .state('allyFound', {
    url: '/page6',
    templateUrl: 'templates/allyFound.html',
    controller: 'allyFoundCtrl'
  })

  .state('profile', {
    url: '/page8',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});