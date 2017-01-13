(function () {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('MyNotificationViewController', MyNotificationViewController);

    MyNotificationViewController.$inject = ['$scope'];

    function MyNotificationViewController($scope) {
        var vm = this;

        vm.notification = {
            id: 'sad12sa1',
            title: 'Best off',
            content: '3 days for free templates. Check it out immediately',
            isRead: false
        }
    }
})();
