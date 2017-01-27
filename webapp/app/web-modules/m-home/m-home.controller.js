(function () {
    'use strict';

    angular
        .module('gsiteApp')
        .controller('MHomeController', MHomeController);

    MHomeController.$inject = ['$state', 'entity', 'song', 'photo', 'MPhotoService', 'MSongService'];

    function MHomeController($state, entity, song, photo, MPhotoService, MSongService) {
        var vm = this;

        vm.homepage = entity;
        if (vm.homepage == null)
            loadDefault();
        else
            loadCustom();

        vm.viewPhoto = viewPhoto;
        vm.playSongAt = playSongAt;

        function loadCustom() {
            vm.songs = song.items;
            vm.photos = photo.items;
            MSongService.loadSongList(vm.songs);
        }

        function loadDefault() {
            vm.photos = [
                {
                    name: 'kaka-photo',
                    des: 'Real win in champion league. This is the most viewed photo of Ricardo Kaka.',
                    url: 'content/images/photos/kaka-photo.jpg'
                },
                {
                    name: 'chelsea-arse',
                    des: 'Best match, we should not miss in sunday',
                    url: 'content/images/photos/chelsea-arse.jpg'
                },
                {
                    name: 'chelsea-liv',
                    des: 'Super match with chelsea and liverpool',
                    url: 'content/images/photos/chelsea-liv.jpg'
                }
            ];

            vm.songs = [
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
            ];

            MSongService.loadSongList(vm.songs);

            vm.videos = [
                {
                    title: 'Kaka has hat-trick',
                    des: 'In the match Real vs MU. Kaka has three goals',
                    time: '10:00',
                    youtubeId: 'DEDXUd1EFTM'
                },
                {
                    title: 'Kaka had fought as a hero',
                    des: 'In the match Real vs Barca. Kaka became a captain who are hero',
                    time: '05:00',
                    youtubeId: 'DEDXUd1EFTM'
                },
                {
                    title: 'Who can be just good as Kaka',
                    des: 'In the match Real vs MU. Kaka has three goals',
                    time: '11:20',
                    youtubeId: 'DEDXUd1EFTM'
                }
            ];

            vm.homepage = {
                name: 'Kaká',
                fullName: 'Ricardo Izecson dos Santos Leite',
                avatar: 'kaka'
            };
        }


        function viewPhoto(photo) {
            MPhotoService.view(photo);
        }

        function playSongAt(index) {
            MSongService.loadSongAt(index);
            MSongService.play();
        }
    }
})();