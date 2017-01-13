(function() {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('PasswordController', PasswordController);

    PasswordController.$inject = ['$scope'];

    function PasswordController ($scope) {
        var vm = this;
        vm.currentState = 'password';
    }
})();
