(function() {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('MyFeedbackController', MyFeedbackController);

    MyFeedbackController.$inject = ['$scope','MyFeedbackService'];

    function MyFeedbackController ($scope,MyFeedbackService) {
        var vm = this;

        vm.currentState = 'my-feedback';

        vm.feedbacks = [];
        
        vm.feedbacks = MyFeedbackService.all();
    }
})();
