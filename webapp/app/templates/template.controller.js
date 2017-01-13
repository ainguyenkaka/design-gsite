(function () {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('TemplateController', TemplateController);

    TemplateController.$inject = ['$scope'];

    function TemplateController($scope) {
        var vm = this;
        vm.currentPage = 0;

        vm.webTemplates = [
            {
                id: 'da121sas',
                name: 'Basic one',
                des: 'he titles of Washed Out breakthrough song and the first',
                price: 0,
                source: 'basic-one',
                image: 'temp-default',
                template_id: 'da121sas'
            },
            {
                id: 'da121sas',
                name: 'Latest one',
                des: 'he titles of Washed Out breakthrough song and the first',
                price: 0,
                source: 'latest-one',
                image: 'temp-default',
                template_id: 'da121sas'
            },
            {
                name: 'Beautiful one',
                price: 5,
                des: 'he titles of Washed Out breakthrough song and the first',
                source: 'beautiful-one',
                image: 'temp-default',
                template_id: 'da121sas'
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

    }
})();
