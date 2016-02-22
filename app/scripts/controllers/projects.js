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
          name: 'Saathi',
          thumb: 'images/covers/saathi.jpg',
          state: 'start.saathi'
        },
        {
          name: 'Sigcloud',
          thumb: 'images/covers/sigcloud.jpg',
          state: 'start.sigcloud'
        },
        {
          name: 'Sociotags',
          thumb: 'images/covers/sociotags.jpg',
          state: 'start.sociotags'
        },        
        {
          name: 'Alz-Mob',
          thumb: 'images/covers/mobcustom.jpg',
          state: 'start.mobcustom'
        },
        {
          name: 'Statusbrew',
          thumb: 'images/covers/statusbrew.jpg',
          state: 'start.statusbrew'
        }
      ];

      //Declare methods here
      vm.goToProject = goToProject;

      function goToProject(state){
        $state.go(state);
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