(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name portfolioApp.controller:AlzmobController
   * @description
   * # AlzmobController
   * Controller of the portfolioApp
   */
  angular.module('portfolioApp')
    .controller('AlzmobController', function ($log, $state) {
      var vm = this;
      $log.debug($state.current);

      //Declare properties here
      vm.images = [
        'images/mobcustom/1.png',
        'images/mobcustom/2.png'
      ]

      // vm.methods = [
      //   {
      //     name: 'Step 1',
      //     desc: 'Defining a Mobile Phone',
      //     thumb: 'images/mobcustom/mobcustom_2.jpg',
      //     size: '80'
      //   },
      //   {
      //     name: 'Step 2',
      //     desc: 'About User Group',
      //     thumb: 'images/mobcustom/mobcustom_3.jpg',
      //     size: '80'
      //   },
      //   {
      //     name: 'Step 3',
      //     desc: 'Personas',
      //     thumb: 'images/mobcustom/mobcustom_4.jpg',
      //     size: '80'
      //   },
      //   {
      //     name: 'Step 4',
      //     desc: 'FBS Ontolgy',
      //     thumb: 'images/mobcustom/mobcustom_5.jpg',
      //     size: '80'
      //   },
      //   {
      //     name: 'Step 5',
      //     desc: 'Areas of Interest',
      //     thumb: 'images/mobcustom/mobcustom_6.jpg',
      //     size: '80'
      //   },
      //   {
      //     name: 'Step 6',
      //     desc: 'Identifying User Requirements',
      //     thumb: 'images/mobcustom/mobcustom_7.jpg',
      //     size: '80'
      //   },
      //   {
      //     name: 'Step 7',
      //     desc: 'Deriving Functions',
      //     thumb: 'images/mobcustom/mobcustom_8.jpg',
      //     size: '80'
      //   },
      //   {
      //     name: 'Step 8',
      //     desc: 'Conceptualisation',
      //     thumb: 'images/mobcustom/mobcustom_9.jpg',
      //     size: '80'
      //   }
      // ]

      vm.deliverables = [
        {
          name: 'About Device',
          desc: 'ATTRIBUTES OF DEVICE',
          thumb: 'images/mobcustom/deliverable_1.png',
          size: '80'
        },
        {
          name: 'Proposed Concept - 1',
          desc: 'SUBMERGE',
          thumb: 'images/mobcustom/deliverable_2.png',
          size: '80'
        },
        {
          name: 'Proposed Concept - 2',
          desc: 'MODULATE',
          thumb: 'images/mobcustom/deliverable_3.png',
          size: '80'
        },
        {
          name: 'Scenarios of Usage',
          desc: 'USAGE WHILE CALLING, PLAYING MUSIC',
          thumb: 'images/mobcustom/deliverable_4.png',
          size: '80'
        }
      ]

      //Declare methods here

    });
})();
