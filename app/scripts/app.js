'use strict';


angular.module('portfolioApp', [
  'ngMaterial',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'angular-carousel'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('start', {
        abstract: true,
        url: '/',
        templateUrl: 'views/start.html',
        controller: 'StartController',
        controllerAs: 'startCtrl'
      })
      .state('start.home', {
        url: '',
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl',
        titlename: 'Highlights'
      })
      .state('start.projects', {
        url: 'projects',
        templateUrl: 'views/projects.html',
        controller: 'ProjectsController',
        controllerAs: 'projectsCrl',
        navigateUp: 'start.home',
        titlename: 'Projects'
      })
      .state('start.experience', {
        url: 'experience',
        templateUrl: 'views/experience.html',
        controller: 'ExperienceController',
        controllerAs: 'experienceCrl',
        navigateUp: 'start.home',
        titlename: 'Experience'
      })
      .state('start.contact', {
        url: 'contact',
        templateUrl: 'views/contact.html',
        controller: 'ContactController',
        controllerAs: 'contactCrl',
        navigateUp: 'start.home',
        titlename: 'Contact Me'
      });

    //// use the HTML5 History API
    //$locationProvider.html5Mode({
    //  enabled: true,
    //  requireBase:false,
    //  rewriteLinks: true
    //});
  });
