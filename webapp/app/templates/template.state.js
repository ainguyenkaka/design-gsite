(function() {
    'use strict';

    angular
        .module('gsiteApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('template', {
            parent: 'app',
            url: '/template?page&sort&search',
            data: {
                authorities: [],
                pageTitle: 'gsiteApp.template.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/templates/templates.html',
                    controller: 'TemplateController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
