(function() {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('MyNotificationController', MyNotificationController);

    MyNotificationController.$inject = ['$scope'];

    function MyNotificationController ($scope) {
        var vm = this;
        vm.notifications = [];

        vm.notifications = [
            {
                id: 'sad12sa1',
                title: 'Best off',
                content: '3 days for free templates. Check it out immediately',
                isRead: false
            },
            {
                id: 'sad12sa1',
                title: 'New templates',
                content: 'A awesome template just comes out. It is free',
                isRead: true
            }
        ];
    }
})();
