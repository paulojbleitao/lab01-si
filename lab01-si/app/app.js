const app = angular.module('jukeboxApp', ['ui.router', 'star-rating']);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    let home = {
        name: "home",
        url: "/",
        templateUrl: "templates/artista.html",
        controller: "artistaCtrl",
        controllerAs: "artistaCtrl"
    }

    let musica = {
        name: "musica",
        url: "/musica",
        templateUrl: "templates/musica.html",
        controller: "musicaCtrl",
        controllerAs: "musicaCtrl"
    }

    let perfil = {
        name: "perfil",
        url: "/perfil/{nome}",
        templateUrl: "templates/perfil.html",
        controller: "perfilCtrl",
        controllerAs: "perfilCtrl"
    }

    let playlists = {
        name: "playlists",
        url: "/playlists",
        templateUrl: "templates/playlists.html",
        controller: "playlistCtrl",
        controllerAs: "playlistCtrl"
    }

    let playlist = {
        name: "playlist",
        url: "/playlist/{nome}",
        templateUrl: "templates/playlist.html",
        controller: "playlistCtrl",
        controllerAs: "playlistCtrl"
    }

    $stateProvider.state(home);
    $stateProvider.state(musica);
    $stateProvider.state(perfil);
    $stateProvider.state(playlists);
    $stateProvider.state(playlist);
});