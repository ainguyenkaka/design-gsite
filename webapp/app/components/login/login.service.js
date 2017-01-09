(function () {
    'use strict';

    angular
        .module('gsiteApp')
        .factory('LoginService', LoginService);

    LoginService.$inject = ['$mdDialog'];

    function LoginService($mdDialog) {
        var service = {
            open: open
        };

        return service;

        function open() {
            return function () {
                return $mdDialog.show({
                    controller: 'LoginController',
                    templateUrl: 'app/components/login/login.html',
                    parent: 'app',
                    targetEvent: null,
                    clickOutsideToClose: true,
                    fullscreen: false
                });
            }
        }

    }
})();