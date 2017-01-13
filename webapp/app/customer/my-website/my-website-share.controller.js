(function() {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('MyWebsiteShareController', MyWebsiteShareController);

    MyWebsiteShareController.$inject = ['$scope','$mdBottomSheet'];

    function MyWebsiteShareController ($scope,$mdBottomSheet) {
        var vm = this;
        vm.closeShare = closeShare;

        function closeShare() {
            $mdBottomSheet.hide();
        }
    }
})();
