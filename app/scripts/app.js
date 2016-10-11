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
      .state('start', {
        abstract: true,
        url: '/',
        templateUrl: 'views/start.html',
        controller: 'StartController',
        controllerAs: 'startCtrl'
      })
      // .state('start.home', {
      //   url: '',
      //   templateUrl: 'views/home.html',
      //   controller: 'HomeController',
      //   controllerAs: 'homeCtrl',
      //   titlename: 'Highlights'
      // })
      // .state('start.experience', {
      //   url: '',
      //   templateUrl: 'views/experience.html',
      //   controller: 'ExperienceController',
      //   controllerAs: 'experienceCtrl',
      //   // navigateUp: 'start.experience',
      //   titlename: 'Experience'
      // })
      .state('start.projects', {
        url: '',
        templateUrl: 'views/projects.html',
        controller: 'ProjectsController',
        controllerAs: 'projectsCtrl',
        // navigateUp: 'start.experience',
        titlename: 'Projects'
      })
      //INDIVIDUAL PROJECTS ---- start
        .state('start.anigo', {
          url: 'anigo',
          templateUrl: 'views/projects/anigo.html',
          controller: 'AnigoController',
          controllerAs: 'anigoCtrl',
          navigateUp: 'start.projects',
          titlename: 'Adobe-Anigo'
        })
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
        .state('start.saathi', {
          url: 'saathi',
          templateUrl: 'views/projects/saathi.html',
          controller: 'SaathiController',
          controllerAs: 'saathiCtrl',
          navigateUp: 'start.projects',
          titlename: 'Saathi'
        })
        .state('start.ignition', {
          url: 'ignition',
          templateUrl: 'views/projects/ignition.html',
          controller: 'IgnitionController',
          controllerAs: 'ignitionCtrl',
          navigateUp: 'start.projects',
          titlename: 'Ignition'
        })
        .state('start.medtour', {
          url: 'medtour',
          templateUrl: 'views/projects/medtour.html',
          controller: 'MedtourController',
          controllerAs: 'medtourCtrl',
          navigateUp: 'start.projects',
          titlename: 'MedTour'
        })
        .state('start.statusbrew', {
          url: 'statusbrew',
          templateUrl: 'views/projects/statusbrew.html',
          controller: 'StatusbrewController',
          controllerAs: 'statusbrewCtrl',
          navigateUp: 'start.projects',
          titlename: 'Statusbrew'
        })
        .state('start.alzmob', {
          url: 'alz-mob',
          templateUrl: 'views/projects/alzmob.html',
          controller: 'AlzmobController',
          controllerAs: 'alzmobCtrl',
          navigateUp: 'start.projects',
          titlename: 'Alz-Mob'
        })
        .state('start.waterlogging', {
          url: 'waterlogging',
          templateUrl: 'views/projects/waterlogging.html',
          controller: 'WaterloggingController',
          controllerAs: 'waterloggingCtrl',
          navigateUp: 'start.projects',
          titlename: 'Waterlogging '
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
      .state('start.resume', {
        url: 'resume',
        templateUrl: 'views/resume.html',
        // navigateUp: 'start.projects',
        titlename: 'Resume'
      })
      .state('start.contact', {
        url: 'contact',
        templateUrl: 'views/contact.html',
        controller: 'ContactController',
        controllerAs: 'contactCtrl',
        // navigateUp: 'start.projects',
        titlename: 'Contact Me'
      });

    //// use the HTML5 History API
    //$locationProvider.html5Mode({
    //  enabled: true,
    //  requireBase:false,
    //  rewriteLinks: true
    //});
  });
