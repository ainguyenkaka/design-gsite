(function() {
    'use strict';

    angular
        .module('gsiteApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('my-website', {
            parent: 'customer',
            url: '/mywebsites?page&sort&search',
            data: {
                authorities: [],
                pageTitle: 'gsiteApp.my-website.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/customer/my-website/my-websites.html',
                    controller: 'MyWebsiteController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
