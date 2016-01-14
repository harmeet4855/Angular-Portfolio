'use strict';


angular.module('portfolioApp', [
  'ngMaterial',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'views/projects.html',
        controller: 'ProjectsController',
        controllerAs: 'projectsCrl'
      })
      .state('experience', {
        url: '/experience',
        templateUrl: 'views/experience.html',
        controller: 'ExperienceController',
        controllerAs: 'experienceCrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('index', {
        url: '/',
        templateUrl: 'views/contact.html',
        controller: 'ContactController',
        controllerAs: 'contactCrl'
      })
      .state('resume', {
        url: '/resume',
        templateUrl: 'views/resume.pdf'
      });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  });
