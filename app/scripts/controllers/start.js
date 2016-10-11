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
      vm.isLoading = true;
      vm.hasMenu = true;
      vm.isFabOpen = false;
      vm.projects = [
        {
          name: 'Adobe-Anigo',
          thumb: 'images/covers/svg/covers-08.svg',
          state: 'start.anigo'
        },
        {
          name: 'Saathi',
          thumb: 'images/covers/svg/covers-02.svg',
          state: 'start.saathi'
        },
        {
          name: 'Ignition',
          thumb: 'images/covers/svg/covers-07.svg',
          state: 'start.ignition'
        },
        {
          name: 'Sigcloud',
          thumb: 'images/covers/svg/covers-03.svg',
          state: 'start.sigcloud'
        },
        {
          name: 'Sociotags',
          thumb: 'images/covers/svg/covers-05.svg',
          state: 'start.sociotags'
        },
        {
          name: 'MedTour',
          thumb: 'images/covers/svg/covers-04.svg',
          state: 'start.medtour'
        },
        {
          name: 'Alz-Mob',
          thumb: 'images/covers/svg/covers-06.svg',
          state: 'start.alzmob'
        }
      ];

      //Declare methods here
      vm.hasNavigateUp = hasNavigateUp;
      vm.navigateUp = navigateUp;
      vm.toggle = toggle;
      vm.close = close;
      vm.home = home;
      vm.resume = resume;
      vm.toolbarTitle = toolbarTitle;
      vm.checkSidenavCloseScreen = checkSidenavCloseScreen;
      vm.goToProjects = goToProjects;
      vm.goToProject = goToProject;
      // vm.hasMenu = hasMenu;

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
        $state.go('start.home');
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
        if($mdMedia('xs') || $mdMedia('sm') || $mdMedia('md')){
          vm.close();
        }
      }

      function goToProjects(){
        $state.go('start.projects');
      }

      function goToProject(state){
        if(state === 'start.medtour'){
          window.open(
            'https://instructionaldesignisfun.wordpress.com/2016/04/07/taking-out-the-load-from-a-medical-tourists-journey/',
            '_blank' // <- This is what makes it open in a new window.
          );
        }
        else{
          $state.go(state);
        }        
      }

      // On opening, add a delayed property which shows tooltips after the speed dial has opened
      // so that they have the proper position; if closing, immediately hide the tooltips
      // vm.$watch('vm.isFabOpen', function(isOpen) {
      //   if (isOpen) {
      //     $timeout(function() {
      //       $scope.tooltipVisible = self.isOpen;
      //     }, 600);
      //   } else {
      //     $scope.tooltipVisible = self.isOpen;
      //   }
      // });
      // function hasMenu(){

      // }

      // function hideMenu(){
        
      // }
    });
})();
