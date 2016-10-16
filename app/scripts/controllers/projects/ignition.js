(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name portfolioApp.controller:IgnitionController
   * @description
   * # IgnitionController
   * Controller of the portfolioApp
   */
  angular.module('portfolioApp')
    .controller('IgnitionController', function ($log, $state) {
      var vm = this;
      $log.debug($state.current);

      //Declare properties here
      vm.images = [
        'images/ignition/1.png',
        'images/ignition/2.png',
        'images/ignition/3.png',
        'images/ignition/4.png'
      ]

      // vm.deliverables = [
      //   'images/ignition/3.png'
      // ]

      vm.deliverables = [
        {
          name: 'Ignition Concept',
          desc: 'CONCEPT & MAIN FEATURES',
          thumb: 'images/ignition/deliverable_1.png'
        },
        {
          name: 'Layouts',
          desc: "WIREFRAMES",
          thumb: 'images/ignition/deliverable_2.png'
        }
      ]

      //Declare methods here

    });
})();
