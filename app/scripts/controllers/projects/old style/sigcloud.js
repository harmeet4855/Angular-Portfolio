(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name portfolioApp.controller:SigcloudController
   * @description
   * # SigcloudController
   * Controller of the portfolioApp
   */
  angular.module('portfolioApp')
    .controller('SigcloudController', function ($log, $state) {
      var vm = this;
      $log.debug($state.current);

      //Declare properties here
      vm.highlights = [
        {
          name: 'Defining Use-Case',
          thumb: 'images/sigcloud/use-case.jpg',
          colspan: '2',
          rowspan: '2'
        },
        {
          name: 'Sigcloud',
          thumb: 'images/sigcloud/Defining Goals-01.jpg',
          colspan: '2',
          rowspan: '1'
        },
        {
          name: 'Sigcloud',
          thumb: 'images/sigcloud/Defining Goals-02.jpg',
          colspan: '1',
          rowspan: '1'
        },
        {
          name: 'Sigcloud',
          thumb: 'images/sigcloud/Defining Goals-03.jpg',
          colspan: '1',
          rowspan: '1'
        }
      ]

      vm.methods = [
        {
          name: 'Step 1',
          desc: 'Defining Goals',
          thumb: 'images/sigcloud/sigcloud-01.jpg',
          size: '50'
        },
        {
          name: 'Step 2',
          desc: 'Focus Groups',
          thumb: 'images/sigcloud/sigcloud-02.jpg',
          size: '50'
        },
        {
          name: 'Step 3',
          desc: 'Competitor Analysis',
          thumb: 'images/sigcloud/sigcloud-03.jpg',
          size: '50'
        },
        {
          name: 'Step 4',
          desc: 'Preparing Questionnaire',
          thumb: 'images/sigcloud/sigcloud-04.jpg',
          size: '50'
        },
        {
          name: 'Step 5',
          desc: 'Insights from Questionnaire',
          thumb: 'images/sigcloud/sigcloud-05.jpg',
          size: '50'
        },
        {
          name: 'Step 6',
          desc: 'Information Architecture',
          thumb: 'images/sigcloud/sigcloud-06.jpg',
          size: '100'
        },
        {
          name: 'Step 7',
          desc: 'Making Wireframes',
          thumb: 'images/sigcloud/sigcloud-07.jpg',
          size: '50'
        },
        {
          name: 'Step 8',
          desc: 'Font, Color and Icons',
          thumb: 'images/sigcloud/sigcloud-08.jpg',
          size: '50'
        }
      ]

      vm.deliverables = [
        {
          name: 'Final UI - 1',
          desc: 'Deployment Phase',
          thumb: 'images/sigcloud/Deliverables-01.jpg'
        },
        {
          name: 'Final UI - 2',
          desc: 'Monitoring Phase',
          thumb: 'images/sigcloud/Deliverables-02.jpg'
        },
        {
          name: 'Final UI - 3',
          desc: 'Management Phase',
          thumb: 'images/sigcloud/Deliverables-03.jpg'
        }
      ]

      //Declare methods here

    });
})();
