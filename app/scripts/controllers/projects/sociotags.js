(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name portfolioApp.controller:SociotagsController
   * @description
   * # SociotagsController
   * Controller of the portfolioApp
   */
  angular.module('portfolioApp')
    .controller('SociotagsController', function ($log, $state) {
      var vm = this;
      $log.debug($state.current);

      //Declare properties here
      vm.images = [
        'images/sociotags/1.png',
        'images/sociotags/2.png',
        'images/sociotags/3.png'
      ]

      // vm.methods = [
      //   {
      //     name: 'Step 1',
      //     desc: 'Defining Problem Statement',
      //     thumb: 'images/sociotags/sociotags-01.jpg',
      //     size: '100'
      //   },
      //   {
      //     name: 'Step 2',
      //     desc: 'Choosing a Focus Group',
      //     thumb: 'images/sociotags/sociotags-02.jpg',
      //     size: '50'
      //   },
      //   {
      //     name: 'Step 3',
      //     desc: 'Passenger Journey Map',
      //     thumb: 'images/sociotags/sociotags-03.jpg',
      //     size: '50'
      //   },
      //   {
      //     name: 'Step 4',
      //     desc: 'User Research',
      //     thumb: 'images/sociotags/sociotags-04.jpg',
      //     size: '100'
      //   },
      //   {
      //     name: 'Step 5',
      //     desc: 'Creating a System Model',
      //     thumb: 'images/sociotags/sociotags-05.jpg',
      //     size: '100'
      //   },
      //   {
      //     name: 'Step 6',
      //     desc: 'Attributes of Solution',
      //     thumb: 'images/sociotags/sociotags-06.jpg',
      //     size: '50'
      //   }
      // ]

      vm.deliverables = [
        {
          name: 'Solution',
          desc: 'EXAMPLE SCENARIO',
          thumb: 'images/sociotags/deliverable_1.png'
        }
      ]

      //Declare methods here

    });
})();
