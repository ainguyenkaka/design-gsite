(function() {
    'use strict';

    angular
        .module('gsiteApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider','$urlRouterProvider'];


    function stateConfig($stateProvider, $urlRouterProvider) {
      //  $urlRouterProvider.otherwise('/');
        $stateProvider.state('app', {
            abstract: true,
            views: {
                'sidenav@': {
                    templateUrl: 'app/layouts/sidenav/sidenav.html',
                    controller: 'SidenavController',
                    controllerAs: 'vm'
                },
                'toolbar@': {
                    templateUrl: 'app/layouts/toolbar/toolbar.html',
                    controller: 'ToolbarController',
                    controllerAs: 'vm'
                },
                'footer@': {
                    templateUrl: 'app/layouts/footer/footer.html',
                    controller: 'FooterController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
