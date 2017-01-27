(function () {
    'use strict';
    angular
        .module('gsiteApp')
        .factory('MyWebsiteService', MyWebsiteService);

    MyWebsiteService.$inject = [];

    function MyWebsiteService() {
        var instance = {
            all: all,
            get: get,
            del: del,
            add: add
        };

        var list = [
            {
                id: 'sas42sa',
                name: 'The first',
                des: 'The titles of Washed Out breakthrough song and the first',
                domain: 'firsttemp.com',
                image: 'temp-default',
                template: 'basic-template',
                sharedUsers: ['linda@gmail.com', 'kaka@gmail.com'],
                custom: {
                    toolbar: {
                        isEnable: true,
                        title: 'Ricardo Kaká',
                        textColor: '#FFFFFF',
                        backgroundColor: 'blue'
                    },
                    homepage: {
                        isEnable: true,
                        name: 'Kaká',
                        fullName: 'Ricardo Izecson dos Santos Leite',
                        avatar: 'kaka',
                        mainImage: 'content/images/avatars/kaka.jpg'
                    },
                    sidenav: {
                        isEnable: true,
                        title: 'About Kaká',
                        textColor: '#FFFFFF',
                        barColor: 'blue',
                        backgroundColor: 'white',
                        list: {
                            isEnable: true,
                            choices: [
                                {
                                    title: 'Basic information',
                                    subTitle: 'Overview of what you should know',
                                    icon: 'person',
                                    state: 'my-website-view.info'
                                },
                                {
                                    title: 'Photo Album',
                                    subTitle: 'Album contain all photo of reciever',
                                    icon: 'photo_library',
                                    state: 'my-website-view.photo'
                                },
                                {
                                    title: 'Favorite Songs',
                                    subTitle: 'All favorite songs and their playlist',
                                    icon: 'library_music',
                                    state: 'my-website-view.song'
                                }
                            ]
                        }
                    },
                    footer: {
                        isEnable: true,
                        items: [
                            {
                                title: 'About',
                                url: '/#/my-website/info'
                            },
                            {
                                title: 'Photos',
                                url: '/#/my-website/photos'
                            },
                            {
                                title: 'Songs',
                                url: '/#/my-website/songs'
                            }
                        ]
                    },
                    basicinfo: {
                        isEnable: true,
                        firstName: 'Ricardo',
                        lastName: 'Kaka',
                        email: 'kaka@gmail.com',
                        age: 32,
                        des: 'Kaka is one of best football players in the world.'
                    },
                    song: {
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
                    },
                    photo: {
                        isEnable: true,
                        items: [
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
                        ]
                    }
                }
            },
            {
                id: 'sas42s5a',
                name: 'My Story',
                des: 'The titles of Washed Out breakthrough song and the first',
                image: 'temp-default',
                template: 'basic-template'
            },
            {
                id: 'sas42s2a',
                name: 'Book Store',
                des: 'The titles of Washed Out breakthrough song and the first',
                image: 'temp-default',
                template: 'basic-template'
            }
        ];

        var hashMap = {};
        hashMap[list[0].id] = list[0];
        hashMap[list[1].id] = list[1];
        hashMap[list[2].id] = list[2];


        function all() {
            return list;
        }

        function get(id) {
            return hashMap[id];
        }

        function del(id) {
            var index = getIndex(id);
            list.splice(index, 1);
            delete hashMap[id];
        }

        function getIndex(id) {
            var web = hashMap[id];
            return list.indexOf(web);
        }

        function add(entity) {
            list.push(entity);
            hashMap[entity.id] = entity;
        }


        return instance;
    }

})();