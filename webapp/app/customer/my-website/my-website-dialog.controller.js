(function () {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('MyWebsiteDialogController', MyWebsiteDialogController);

    MyWebsiteDialogController.$inject = ['$scope','$state','$mdDialog'];

    function MyWebsiteDialogController($scope,$state,$mdDialog) {
        var vm = this;
        vm.closeDialog = closeDialog;
        vm.submit = submit;
       
       function closeDialog() {
           $mdDialog.cancel();
       }

       function submit() {
           $mdDialog.hide();
           $state.go('website-payment');
       }
    }
})();
