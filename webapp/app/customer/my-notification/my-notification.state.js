(function() {
    'use strict';

    angular
        .module('gsiteApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('my-notification', {
            parent: 'customer',
            url: '/my-notification',
            data: {
                authorities: [],
                pageTitle: 'gsiteApp.template.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/customer/my-notification/my-notifications.html',
                    controller: 'MyNotificationController',
                    controllerAs: 'vm'
                }
            }
        }).state('my-notification.view', {
            parent: 'my-notification',
            url: '/my-notification/view/{id}',
            data: {
                authorities: [],
                pageTitle: 'gsiteApp.template.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/customer/my-notification/my-notification-view.html',
                    controller: 'MyNotificationViewController',
                    controllerAs: 'vm'
                }
            }
        }).state('my-notification.delete', {
            parent: 'my-notification',
            url: '/my-notification/delete/{id}',
            data: {
                authorities: []
            },
            params: {
                template_id: null
            },
            onEnter: ['$stateParams', '$state', function ($stateParams, $state) {
                 $state.go('my-notification', null, { reload: 'my-notification' });
            }]
        });
    }
})();
