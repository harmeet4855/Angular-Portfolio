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
          name: 'Sigcloud',
          thumb: 'images/sigcloud.png',
          state: 'start.sigcloud'
        },
        {
          name: 'Sociotags',
          thumb: 'images/socioTags.png',
          state: 'start.sociotags'
        },
        {
          name: 'Chat.io',
          thumb: 'images/chat.io.png',
          state: 'start.chatIo'
        },
        {
          name: 'Flexflights',
          thumb: 'images/flexFlights.png',
          state: 'start.flexflights'
        },
        {
          name: 'Salsa',
          thumb: 'images/foodPrinting.png',
          state: 'start.salsa'
        },
        {
          name: 'Techniche Website',
          thumb: 'images/technicheWeb.png',
          state: 'start.techwebsite'
        }
      ];

      //Declare methods here
      vm.goToProject = goToProject;

      function goToProject(state){
        $state.go(state);
      }
    });
})();
