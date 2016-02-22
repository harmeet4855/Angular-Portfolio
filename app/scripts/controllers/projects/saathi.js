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
          desc: 'Defining Method Line',
          thumb: 'images/saathi/method2.jpg',
          size: '50'
        },
        {
          name: 'Step 2',
          desc: 'Defining Problem Statement',
          thumb: 'images/saathi/method3.jpg',
          size: '50'
        },
        {
          name: 'Focus Groups',
          desc: 'Competitor Analysis',
          thumb: 'images/saathi/method4.jpg',
          size: '50'
        },
        {
          name: 'Focus Groups',
          desc: 'Competitor Analysis',
          thumb: 'images/saathi/method5.jpg',
          size: '50'
        },
        {
          name: 'Focus Groups',
          desc: 'Competitor Analysis',
          thumb: 'images/saathi/method6.jpg',
          size: '100'
        }
      ]

      // vm.deliverables = [
      //   {
      //     name: 'Final UI - 1',
      //     desc: 'Deployment Phase',
      //     thumb: 'images/sigcloud/Deliverables-01.jpg'
      //   },
      //   {
      //     name: 'Final UI - 2',
      //     desc: 'Monitoring Phase',
      //     thumb: 'images/sigcloud/Deliverables-02.jpg'
      //   },
      //   {
      //     name: 'Final UI - 3',
      //     desc: 'Management Phase',
      //     thumb: 'images/sigcloud/Deliverables-03.jpg'
      //   }
      // ]

      //Declare methods here

    });
})();
