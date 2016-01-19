(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name portfolioApp.controller:StartController
   * @description
   * # StartController
   * Controller of the portfolioApp
   */
  angular.module('portfolioApp')
    .controller('StartController', function ($rootScope, $mdSidenav, $mdMedia, $log, $state) {
      var vm = this;
      $log.debug($state.current);

      //Declare properties here
      vm.currentTitle = 'Highlights';

      //Declare methods here
      vm.hasNavigateUp = hasNavigateUp;
      vm.navigateUp = navigateUp;
      vm.toggle = toggle;
      vm.close = close;
      vm.home = home;
      vm.resume = resume;
      vm.toolbarTitle = toolbarTitle;
      vm.checkSidenavCloseScreen = checkSidenavCloseScreen;

      $rootScope.$on('$stateChangeSuccess', toolbarTitle);
      toolbarTitle();

      function hasNavigateUp() {
        return angular.isDefined($state.current.navigateUp);
      }

      function navigateUp() {
        $state.go($state.current.navigateUp);
      }

      function toggle() {
        $mdSidenav('left').toggle()
          .then(function () {
            $log.debug("toggle LEFT is done");
          });
      }

      function close(){
        $mdSidenav('left').close()
          .then(function () {
            $log.debug("toggle LEFT is done");
          });
      }

      function home(){
        $state.go($state.current.navigateUp);
      }

      function resume(){
        window.open(
          'resume.pdf',
          '_blank' // <- This is what makes it open in a new window.
        );
      }

      function toolbarTitle(event, toState, toParams, fromState, fromParams){
        vm.currentTitle = $state.current.titlename;
      }

      function checkSidenavCloseScreen(){
        if($mdMedia('xs')){
          vm.close();
        }
      }
    });
})();
