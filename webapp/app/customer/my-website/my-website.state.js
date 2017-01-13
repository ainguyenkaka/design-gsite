(function () {
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
        }).state('my-website.new', {
            parent: 'my-website',
            url: '/mywebsites/new/{template_id}',
            data: {
                authorities: []
            },
            params: {
                template_id: null
            },
            onEnter: ['$stateParams', '$state', '$mdDialog', function ($stateParams, $state, $mdDialog) {
                $mdDialog.show({
                    templateUrl: 'app/customer/my-website/my-website-dialog.html',
                    controller: 'MyWebsiteDialogController',
                    controllerAs: 'vm',
                    parent: 'my-website',
                    targetEvent: null,
                    clickOutsideToClose: true,
                    fullscreen: false,
                    resolve: {
                        entity: function () {
                            return {
                                name: null,
                                created: new Date(),
                                user_id: null,
                                template_id: null,
                                domain: null,
                                id: null,
                                isPaid: false
                            };
                        }
                    }
                }).then(function (answer) {
                    //$state.go('my-website', null, {reload: 'my-website'});
                }, function () {
                    $state.go('my-website', null, { reload: 'my-website' });
                });
            }]
        }).state('my-website.delete', {
            parent: 'my-website',
            url: '/mywebsites/delete/{id}',
            data: {
                authorities: []
            },
            params: {
                template_id: null
            },
            onEnter: ['$stateParams', '$state', '$mdDialog', function ($stateParams, $state, $mdDialog) {
                var confirm = $mdDialog.confirm()
                    .title('You delete this website?')
                    .textContent('This website and its template will be lost forever!')
                    .ariaLabel('Lucky day')
                    .targetEvent(null)
                    .ok('Yes')
                    .cancel('Cancel');

                $mdDialog.show(confirm).then(function () {
                    $state.go('my-website', null, { reload: 'my-website' });
                }, function () {
                    $state.go('my-website', null, { reload: 'my-website' });
                });

            }]
        }).state('my-website.share', {
            parent: 'my-website',
            url: '/mywebsites/share/{id}',
            data: {
                authorities: []
            },
            params: {
                id: null
            },
            onEnter: ['$stateParams', '$state', '$mdBottomSheet', function ($stateParams, $state, $mdBottomSheet) {
                $mdBottomSheet.show({
                    templateUrl: 'app/customer/my-website/my-website-share.html',
                    controller: 'MyWebsiteShareController',
                    controllerAs: 'vm',
                    clickOutsideToClose: true
                }).then(function (clickedItem) {
                    //console.log(clickedItem);
                },function() {
                    $state.go('my-website', null, { reload: 'my-website' });
                });
            }]
        }).state('my-website.mail', {
            parent: 'my-website',
            url: '/mywebsites/mail/{id}',
            data: {
                authorities: []
            },
            params: {
                template_id: null
            },
            views: {
                'content@': {
                    templateUrl: 'app/customer/my-website/my-website-mail.html',
                    controller: 'MyWebsiteMailController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
