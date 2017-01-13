(function () {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('MyWebsiteController', MyWebsiteController);

    MyWebsiteController.$inject = ['$scope','AlertService'];

    function MyWebsiteController($scope,AlertService) {
        var vm = this;
        vm.currentPage = 0;
        vm.websites = [];
        vm.testToast = testToast;

        vm.websites = [
            {
                id: 'sas42sa',
                name: 'The first',
                des: 'The titles of Washed Out breakthrough song and the first',
                image: 'temp-default'
            },
            {
                id: 'sas42sa',
                name: 'My Story',
                des: 'The titles of Washed Out breakthrough song and the first',
                image: 'temp-default'
            },
            {
                id: 'sas42sa',
                name: 'Book Store',
                des: 'The titles of Washed Out breakthrough song and the first',
                image: 'temp-default'
            }
        ];
        // paging
        vm.paging = {
            total: 3,
            current: 1,
            onPageChanged: loadPages,
        };

        function loadPages() {
            vm.currentPage = vm.paging.current;
        }

        // test toast

        function testToast() {
            AlertService.info("Just view!");
        }


    }
})();
