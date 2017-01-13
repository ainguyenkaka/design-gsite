(function() {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('MyQuestionDialogController', MyQuestionDialogController);

    MyQuestionDialogController.$inject = ['$scope','$mdDialog', 'AlertService'];

    function MyQuestionDialogController ($scope,$mdDialog,AlertService) {
        var vm = this;
         vm.closeDialog = closeDialog;
        vm.submit = submit;
       
       function closeDialog() {
           $mdDialog.cancel();
       }

       function submit() {
           AlertService.success('Send successfully!');
           $mdDialog.hide();
       }

        
    }
})();
