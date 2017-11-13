const app = angular.module('jukeboxApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    let home = {
        name: "home",
        url: "/",
        templateUrl: "templates/artista.html",
        controller: "cadastraArtistaCtrl",
        controllerAs: "cadastraArtista"
    }

    let musica = {
        name: "musica",
        url: "/musica",
        templateUrl: "templates/musica.html",
        controller: "cadastraMusicaCtrl",
        controllerAs: "cadastraMusica"
    }

    let perfil = {
        name: "perfil",
        url: "/perfil/{nome}",
        templateUrl: "templates/perfil.html",
        controller: "perfilCtrl",
        controllerAs: "perfilCtrl"
    }

    $stateProvider.state(home);
    $stateProvider.state(musica);
    $stateProvider.state(perfil);
});