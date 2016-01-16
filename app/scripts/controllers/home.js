(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name portfolioApp.controller:HomeController
   * @description
   * # HomeController
   * Controller of the portfolioApp
   */
  angular.module('portfolioApp')
    .controller('HomeController', function ($log, $state) {
      var vm = this;
      $log.debug($state.current);

      //Declare properties here
      vm.carouselImages = [
        'http://lorempixel.com/450/300/people/0/',
        'http://lorempixel.com/450/300/people/1/',
        'http://lorempixel.com/450/300/people/2/',
        'http://lorempixel.com/450/300/people/3/'
      ];

      //Declare methods here

      function hasNavigateUp() {
      }
    });
})();
