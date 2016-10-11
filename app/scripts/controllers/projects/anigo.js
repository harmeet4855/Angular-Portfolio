(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name portfolioApp.controller:AnigoController
   * @description
   * # AnigoController
   * Controller of the portfolioApp
   */
  angular.module('portfolioApp')
    .controller('AnigoController', function ($log, $state) {
      var vm = this;
      $log.debug($state.current);

      //Declare properties here
      vm.images = [
        'images/anigo/1.png',
        'images/anigo/2.png',
        'images/anigo/3.gif',
        'images/anigo/4.png'
      ]

      // vm.deliverables = [
      //   'images/anigo/3.gif',
      //   'images/anigo/4.png'
      // ]

      vm.deliverables = [
        {
          name: 'User Story',
          desc: 'UNDERSTANDING THE WORKING USING A STORY',
          thumb: 'images/anigo/deliverable_1.gif'
        },
        {
          name: 'Comps',
          desc: "FINAL UI'S",
          thumb: 'images/anigo/deliverable_2.png'
        }
      ]

      //Declare methods here

    });
})();
