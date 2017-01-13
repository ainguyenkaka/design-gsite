(function() {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('FAQController', FAQController);

    FAQController.$inject = ['$scope'];

    function FAQController ($scope) {
        var vm = this;
    }
})();
