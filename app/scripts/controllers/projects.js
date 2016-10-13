(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name portfolioApp.controller:ProjectsController
   * @description
   * # ProjectsController
   * Controller of the portfolioApp
   */
  angular.module('portfolioApp')
    .controller('ProjectsController', function ($log, $state) {
      var vm = this;
      $log.debug($state.current);

      //Declare properties here
      vm.projects = [
        {
          ux: 1,
          web: 0,
          name: 'Adobe-Anigo',
          designation: 'UX Design Intern',
          logo: 'images/experience/adobe/logo.png',
          thumb: 'images/covers/covers-08.jpg',
          state: 'start.anigo',
          keywords: 'Video-Creation | Youtubers',
          desc: ' Adobe Internship Project, Anigo involved creating an end-to-end solution for Youtubers, Social Media Managers, Instructors etc. to help them create high quality video and animation content for Social Media.'
        },
        {
          ux: 1,
          web: 0,
          name: 'Saathi',
          thumb: 'images/covers/covers-02.jpg',
          state: 'start.saathi',
          keywords: 'Wearables | Time Perception',
          desc: 'Saathi is a smart watch which taps the problem of lack of time perception amongst children with learning disabilities, by displaying time in the form of visuals, audio feedback and images from the daily life.'
        },
        {
          ux: 1,
          web: 0,
          name: 'Ignition',
          thumb: 'images/covers/covers-07.jpg',
          state: 'start.ignition',
          keywords: 'Startups | Systems Approach',
          desc: 'Analyzing journey of various Service-based Startups & developing an end-to-end solution for increasing their chances of success by closely linking Startups, Investors and Freelancers and making them more aware.'
        },
        {
          ux: 1,
          web: 1,
          name: 'Sigcloud',
          thumb: 'images/covers/covers-03.jpg',
          state: 'start.sigcloud',
          keywords: 'Big Data | Cloud Comp',
          desc: 'SigCloud caters to easy deployment of packages of big data services on cloud based infrastructure, along with the provision of monitoring & management capabilities for the infrastructure deployed on cloud.'
        },
        {
          ux: 1,
          web: 0,
          name: 'Sociotags',
          thumb: 'images/covers/covers-05.jpg',
          state: 'start.sociotags',
          keywords: 'Social Interaction | Airports',
          desc: 'Sociotags are color coded smart tags, brought in place of Airport handbag tags, which tries to cater the problem of social isolation by depicting similar interests in people travelling and motivating them to interact.'
        },
        {
          ux: 1,
          web: 0,
          name: 'MedTour',
          thumb: 'images/covers/covers-04.jpg',
          state: 'start.medtour',
          keywords: 'Medical Tourism | Wearables',
          desc: 'MedTour is a wearable which helps in easing the journey of a Medical Tourist by providing contextual information from environment around and helping the person to be prepared beforehand for the next step. '
        },
        {
          ux: 1,
          web: 0,
          name: 'Alz-Mob',
          thumb: 'images/covers/covers-06.jpg',
          state: 'start.alzmob',
          keywords: 'Alzheimer | Mobile Phone',
          desc: 'Alz-Mob is a customized mobile phone for Alzheimer patients. It builds upon assumptions based on movable buttons in 3D space matrix, and contextually adjusts gutter space and evident buttons on panel.'
        }
        // ,
        // {
        //   name: 'Statusbrew',
        //   thumb: 'images/covers/statusbrew.jpg',
        //   state: 'start.statusbrew',
        //   keywords: 'Social Community | Organization',
        //   desc: 'Statusbrew is basically a tool for managing user’s social community (Facebook, Twitter, Instagram etc.). The organization segment of the tool caters to adding members to team, assigning permissions to members.'
        // }
      ];

      //Declare methods here
      vm.goToProject = goToProject;

      function goToProject(state){
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


      // vm.projects = [
      //   {
      //     name: 'Sigcloud',
      //     thumb: 'images/sig-cloud.png',
      //     state: 'start.sigcloud'
      //   },
      //   {
      //     name: 'Sociotags',
      //     thumb: 'images/socioTags.png',
      //     state: 'start.sociotags'
      //   },
      //   {
      //     name: 'Chat.io',
      //     thumb: 'images/chat.io.png',
      //     state: 'start.chatIo'
      //   },
      //   {
      //     name: 'Flexflights',
      //     thumb: 'images/flexFlights.png',
      //     state: 'start.flexflights'
      //   },
      //   {
      //     name: 'Salsa',
      //     thumb: 'images/foodPrinting.png',
      //     state: 'start.salsa'
      //   },
      //   {
      //     name: 'Techniche Website',
      //     thumb: 'images/technicheWeb.png',
      //     state: 'start.techwebsite'
      //   }
      // ];