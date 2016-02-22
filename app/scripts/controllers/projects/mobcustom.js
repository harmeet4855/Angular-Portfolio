(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name portfolioApp.controller:MobcustomController
   * @description
   * # MobcustomController
   * Controller of the portfolioApp
   */
  angular.module('portfolioApp')
    .controller('MobcustomController', function ($log, $state) {
      var vm = this;
      $log.debug($state.current);

      //Declare properties here
      vm.methods = [
        {
          name: 'Step 1',
          desc: 'Defining Method Line',
          thumb: 'images/mobcustom/mobcustom_2.jpg',
          size: '100'
        },
        {
          name: 'Step 3',
          desc: 'Defining Problem Statement',
          thumb: 'images/mobcustom/mobcustom_3.jpg',
          size: '100'
        },
        {
          name: 'Focus Groups',
          desc: 'Competitor Analysis',
          thumb: 'images/mobcustom/mobcustom_4.jpg',
          size: '100'
        },
        {
          name: 'Step 2',
          desc: 'Defining Problem Statement',
          thumb: 'images/mobcustom/mobcustom_5.jpg',
          size: '100'
        },
        {
          name: 'Step 2',
          desc: 'Defining Problem Statement',
          thumb: 'images/mobcustom/mobcustom_6.jpg',
          size: '100'
        },
        {
          name: 'Step 2',
          desc: 'Defining Problem Statement',
          thumb: 'images/mobcustom/mobcustom_7.jpg',
          size: '100'
        },
        {
          name: 'Step 2',
          desc: 'Defining Problem Statement',
          thumb: 'images/mobcustom/mobcustom_8.jpg',
          size: '100'
        },
        {
          name: 'Step 2',
          desc: 'Defining Problem Statement',
          thumb: 'images/mobcustom/mobcustom_9.jpg',
          size: '100'
        },
        {
          name: 'Step 2',
          desc: 'Defining Problem Statement',
          thumb: 'images/mobcustom/mobcustom_10.jpg',
          size: '100'
        },
        {
          name: 'Step 2',
          desc: 'Defining Problem Statement',
          thumb: 'images/mobcustom/mobcustom_11.jpg',
          size: '100'
        },
        {
          name: 'Step 2',
          desc: 'Defining Problem Statement',
          thumb: 'images/mobcustom/mobcustom_12.jpg',
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
