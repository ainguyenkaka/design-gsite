(function () {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('MToolBarController', MToolBarController);

    MToolBarController.$inject = ['$scope', '$mdSidenav', 'entity'];

    function MToolBarController($scope, $mdSidenav, entity) {
        var vm = this;

        vm.toolbar = entity;
        if (vm.toolbar == null)
            loadDefault();
            
        // sidenav
        vm.toggleLeft = buildToggler('m-sidenav');

        function buildToggler(componentId) {
            return function () {
                $mdSidenav(componentId).toggle();
            }
        }

        function loadDefault() {
            vm.toolbar = {
                isEnable: true,
                title: 'Person',
                textColor: '#FFFFFF',
                backgroundColor: 'blue'
            };
        }
    }
})();
