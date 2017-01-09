(function () {
    'use strict';

    angular
        .module('gsiteApp')
        .provider('Toolbar', Toolbar);

    function Toolbar() {
        this.$get = getService;

        getService.$inject = ['$mdSidenav'];

        function getService($mdSidenav) {

            return {
                toggleSidenav : toggleSidenav
            }

            function toggleSidenav() {
                return function () {
                   return $mdSidenav('sidenav')
                        .toggle();
                }
            }
        }

    }
})();
