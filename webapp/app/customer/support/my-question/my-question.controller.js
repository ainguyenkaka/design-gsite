(function() {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('MyQuestionController', MyQuestionController);

    MyQuestionController.$inject = ['$scope','MyQuestionService'];

    function MyQuestionController ($scope,MyQuestionService) {
        var vm = this;

        vm.currentState = 'my-question';

        vm.questions = [];

        vm.questions = MyQuestionService.all();
    }
})();
