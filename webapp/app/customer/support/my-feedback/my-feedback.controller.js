(function() {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('MyFeedbackController', MyFeedbackController);

    MyFeedbackController.$inject = ['$scope'];

    function MyFeedbackController ($scope) {
        var vm = this;

        vm.currentState = 'my-feedback';

        vm.feedbacks = [];
        
        vm.feedbacks = [
            {
                id: '2sa12a3',
                title: 'Performance',
                content: 'It is really fast'
            },
            {
                id: '35sa21s',
                title: 'Experience',
                content: 'Have great time'
            }
        ];
    }
})();
