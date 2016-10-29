(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name portfolioApp.controller:EasyconController
   * @description
   * # EasyconController
   * Controller of the portfolioApp
   */
  angular.module('portfolioApp')
    .controller('EasyconController', function ($log, $state) {
      var vm = this;
      $log.debug($state.current);

      //Declare properties here
      vm.images = [
        'images/easycon/1.png',
        'images/easycon/2.png',
        'images/easycon/3.png'
      ]

      vm.deliverables = [
        {
          name: 'Easycon',
          desc: 'WORKING MECHANISM AND CONTEXT',
          thumb: 'images/easycon/deliverable_1.png'
        }
      ]

      //Declare methods here

    });
})();
