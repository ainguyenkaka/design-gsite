(function() {
    'use strict';

    angular
        .module('gsiteApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('faq', {
            parent: 'app',
            url: '/faq',
            data: {
                authorities: [],
                pageTitle: 'gsiteApp.template.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/customer/support/faq/faqs.html',
                    controller: 'FAQController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
