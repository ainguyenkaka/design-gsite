(function () {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('ToolbarController', ToolbarController);

    ToolbarController.$inject = ['$state', 'Toolbar', '$log','LoginService'];

    function ToolbarController($state, Toolbar, $log,LoginService) {
        var vm = this;
        vm.toggleSidenav = Toolbar.toggleSidenav();
        vm.showLoginDialog = LoginService.open();

    }

})();