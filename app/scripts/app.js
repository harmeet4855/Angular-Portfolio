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
        controllerAs: 'projectsCtrl',
        navigateUp: 'start.home',
        titlename: 'Projects'
      })
      //INDIVIDUAL PROJECTS ---- start
        .state('start.sigcloud', {
          url: 'sigcloud',
          templateUrl: 'views/projects/sigcloud.html',
          controller: 'SigcloudController',
          controllerAs: 'sigcloudCtrl',
          navigateUp: 'start.projects',
          titlename: 'Sigcloud'
        })
        .state('start.sociotags', {
          url: 'sociotags',
          templateUrl: 'views/projects/sociotags.html',
          controller: 'SociotagsController',
          controllerAs: 'sociotagsCtrl',
          navigateUp: 'start.projects',
          titlename: 'Sociotags'
        })
        .state('start.chatIo', {
          url: 'chatIo',
          templateUrl: 'views/projects/chat.io.html',
          controller: 'ChatIoController',
          controllerAs: 'chatIoCtrl',
          navigateUp: 'start.projects',
          titlename: 'Chat.io'
        })
        .state('start.flexflights', {
          url: 'flexflights',
          templateUrl: 'views/projects/flexflights.html',
          controller: 'FlexflightsController',
          controllerAs: 'flexflightsCtrl',
          navigateUp: 'start.projects',
          titlename: 'Flexflights'
        })
        .state('start.salsa', {
          url: 'salsa',
          templateUrl: 'views/projects/salsa.html',
          controller: 'SalsaController',
          controllerAs: 'salsaCtrl',
          navigateUp: 'start.projects',
          titlename: 'Salsa'
        })
        .state('start.techwebsite', {
          url: 'techwebsite',
          templateUrl: 'views/projects/techwebsite.html',
          controller: 'TechwebsiteController',
          controllerAs: 'techwebsiteCtrl',
          navigateUp: 'start.projects',
          titlename: 'Techniche Website'
        })
      //INDIVIDUAL PROJECTS ---- end
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
