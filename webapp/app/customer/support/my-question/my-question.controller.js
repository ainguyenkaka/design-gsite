(function() {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('MyQuestionController', MyQuestionController);

    MyQuestionController.$inject = ['$scope'];

    function MyQuestionController ($scope) {
        var vm = this;

        vm.currentState = 'my-question';

        vm.questions = [];

        vm.questions = [
            {
                id: '2as121a',
                title: 'What is the best feature ?',
                answer: 'Share web management'
            },
            {
                id: '2as121a',
                title: 'How I can create beautiful website ?',
                answer: 'Just get the beautiful template'
            }
        ];
    }
})();
