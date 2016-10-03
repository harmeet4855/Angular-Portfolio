(function () {
  'use strict';

  /**
 * @ngdoc function
 * @name portfolioApp.controller:ExperienceController
 * @description
 * # ExperienceController
 * Controller of the portfolioApp
 */
  angular.module('portfolioApp')
    .controller('ExperienceController', function ($log, $state) {
      var vm = this;
      $log.debug($state.current);

      //Declare properties here
      vm.experiences = [
        {
          ux: 1,
          web: 0,
          name: 'Adobe',
          designation: 'UX Design Intern',
          logo: 'images/experience/adobe/logo.png',
          project: 'Anigo',
          thumb: 'images/covers/anigo.jpg',
          state: 'start.anigo',
          keywords: 'Video-Creation | Youtubers',
          desc: 'Project Anigo involved creating an end-to-end solution for Youtubers, Social Media Managers, Video Instructors etc. to help them create high quality video and animation content for Social Media...'
        },
        {
          ux: 1,
          web: 1,
          name: 'Statusbrew',
          designation: 'UX Design Intern',
          logo: 'images/experience/statusbrew/logo.png',
          project: 'Statusbrew',
          thumb: 'images/covers/statusbrew.jpg',
          state: 'start.statusbrew',
          keywords: 'Social Community | Organization',
          desc: 'Statusbrew is basically a tool for managing user’s social community (Facebook, Twitter, Instagram etc.). The organization segment of the tool caters to adding members to team, assigning permissions to members...'
        },
        {
          ux: 1,
          web: 1,
          name: 'Sigmoid',
          designation: 'Software Development Intern',
          logo: 'images/experience/sigmoid/logo.png',
          project: 'SigCloud',
          thumb: 'images/covers/sigcloud.jpg',
          state: 'start.sigcloud',
          keywords: 'Big Data | Cloud Comp',
          desc: 'SigCloud caters to easy deployment of packages of big data services on cloud based infrastructure, along with the provision of monitoring & management capabilities for the infrastructure deployed on cloud...'
        }
      ];

      //Declare methods here
      vm.goToExperience = goToExperience;

      function goToExperience(state){
        if(state === 'start.medtour'){
          window.open(
            'https://instructionaldesignisfun.wordpress.com/2016/04/07/taking-out-the-load-from-a-medical-tourists-journey/',
            '_blank' // <- This is what makes it open in a new window.
          );
        }
        else{
          $state.go(state);
        }        
      }
    });
})();
