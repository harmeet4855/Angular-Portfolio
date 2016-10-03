(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name portfolioApp.controller:SaathiController
   * @description
   * # SaathiController
   * Controller of the portfolioApp
   */
  angular.module('portfolioApp')
    .controller('SaathiController', function ($log, $state) {
      var vm = this;
      $log.debug($state.current);

      //Declare properties here
      vm.methods = [      
        {
          name: 'Step 1',
          desc: 'Learning about Disablities',
          thumb: 'images/saathi/method1-min.jpg',
          size: '50'
        },
        {
          name: 'Step 2',
          desc: 'Choosing a Focus Group',
          thumb: 'images/saathi/method2-min.jpg',
          size: '50'
        },
        {
          name: 'Step 3',
          desc: 'Contextual Inquiry',
          thumb: 'images/saathi/method3-min.jpg',
          size: '50'
        },
        {
          name: 'Step 4',
          desc: 'Affinity Analysis',
          thumb: 'images/saathi/method4-min.jpg',
          size: '50'
        },
        {
          name: 'Step 5',
          desc: 'Convergence on a Domain',
          thumb: 'images/saathi/method5-min.jpg',
          size: '50'
        },
        {
          name: 'Step 6',
          desc: 'Narrowing down to a Problem',
          thumb: 'images/saathi/method6-min.jpg',
          size: '50'
        },
        {
          name: 'Step 7',
          desc: 'Conceptualisation',
          thumb: 'images/saathi/method7-min.jpg',
          size: '50'
        },
        {
          name: 'Step 8',
          desc: 'Icons and Infographics',
          thumb: 'images/saathi/method8-min.jpg',
          size: '50'
        },
        {
          name: 'Step 9',
          desc: 'Information Architecture',
          thumb: 'images/saathi/method9-min.jpg',
          size: '100'
        },
        {
          name: 'Step 10',
          desc: 'Mockups and Prototyping',
          thumb: 'images/saathi/method10-min.jpg',
          size: '50'
        },
        {
          name: 'Step 11',
          desc: 'Final Product',
          thumb: 'images/saathi/method11-min.jpg',
          size: '50'
        }
      ]

      vm.deliverables = [
        {
          name: 'Poster Submission',
          desc: 'Product Description',
          thumb: 'images/saathi/deliverable2.jpg',
          size: '80'
        }
      ]

      //Declare methods here

    });
})();
