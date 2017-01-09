(function() {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope'];

    function LoginController ($scope) {
        var vm = this;
    }
})();
