(function() {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('MyFeedbackDialogController', MyFeedbackDialogController);

    MyFeedbackDialogController.$inject = ['$scope','$mdDialog','AlertService'];

    function MyFeedbackDialogController ($scope,$mdDialog,AlertService) {
        var vm = this;
         vm.closeDialog = closeDialog;
        vm.submit = submit;
        vm.feedbackOptions = [];

        vm.feedbackOptions = [
            {
                title: 'Performance',
                options: ['It is quite fast','Sometime slow','It is okay']
            },
             {
                title: 'Experience',
                options: ['It is quite convenient','Sometime it is laggy','It is okay']
            }
        ];
       
       function closeDialog() {
           $mdDialog.cancel();
       }

       function submit() {
           AlertService.success('Send successfully!');
           $mdDialog.hide();
       }

        
    }
})();
