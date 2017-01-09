(function () {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('TemplateController', TemplateController);

    TemplateController.$inject = ['$scope'];

    function TemplateController($scope) {
        var vm = this;
        vm.currentPage = 0;


        // paging
        vm.paging = {
            total: 3,
            current: 1,
            onPageChanged: loadPages,
        };

        function loadPages() {
            vm.currentPage = vm.paging.current;
        }

    }
})();
