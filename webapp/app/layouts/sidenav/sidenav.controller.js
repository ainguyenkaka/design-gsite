(function () {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('SidenavController', SidenavController);

    SidenavController.$inject = ['$state','Toolbar'];

    function SidenavController($state,Toolbar) {
        var vm = this;
        
        vm.toggleSidenav = Toolbar.toggleSidenav();
    }
})();