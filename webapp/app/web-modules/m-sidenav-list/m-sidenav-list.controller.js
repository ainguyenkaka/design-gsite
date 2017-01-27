(function () {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('MSidenavListController', MSidenavListController);

    MSidenavListController.$inject = ['$state', '$mdSidenav', 'entity'];

    function MSidenavListController($state, $mdSidenav, entity) {
        var vm = this;
        vm.homeState = 'my-website-view';

        vm.list = entity;
        if (vm.list == null)
            loadDefault();
        // sidenav
        vm.toggleLeft = buildToggler('m-sidenav');

        function buildToggler(componentId) {
            return function () {
                $mdSidenav(componentId).toggle();
            }
        }


        function loadDefault() {
            vm.homeState = "basic-template";

            vm.list = {
                isEnable: true,
                choices: [
                    {
                        title: 'Basic information',
                        subTitle: 'Overview of what you should know',
                        icon: 'person',
                        state: 'basic-template.info'
                    },
                    {
                        title: 'Photo Album',
                        subTitle: 'Album contain all photo of reciever',
                        icon: 'photo_library',
                        state: 'basic-template.photo'
                    },
                    {
                        title: 'Favorite Songs',
                        subTitle: 'All favorite songs and their playlist',
                        icon: 'library_music',
                        state: 'basic-template.song'
                    }
                ]
            };
        }
    }
})();