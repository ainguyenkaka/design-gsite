(function () {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('MSongController', MSongController);

    MSongController.$inject = ['$scope', 'entity', 'MSongService'];

    function MSongController($scope, entity, MSongService) {
        var vm = this;

        vm.song = entity;
        if (vm.song == null)
            loadDefault();

        vm.playAt = playAt;

        function loadDefault() {
            vm.song = {
                isEnable: true,
                items: [
                    {
                        title: 'Happy',
                        artist: 'Pharrell Williams',
                        url: 'content/media/songs/Happy.mp3'
                    },
                    {
                        title: 'Paris',
                        artist: 'The Chainsmokers',
                        url: 'content/media/songs/Paris.mp3'
                    },
                    {
                        title: 'Shape of You',
                        artist: 'Ed Sheeran',
                        url: 'content/media/songs/Shape-of-You.mp3'
                    }
                ]
            };
            MSongService.loadSongList(vm.song.items);
        }

        function playAt(index) {
            MSongService.loadSongAt(index);
            MSongService.play();
        }
    }
})();