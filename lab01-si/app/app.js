const app = angular.module('jukeboxApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    let home = {
        name: "home",
        url: "/",
        templateUrl: "../templates/artista.html",
        controller: "cadastraArtistaCtrl",
        controllerAs: "cadastraArtista"
    };

    let musica = {
        name: "musica",
        url: "/musica",
        templateUrl: "../templates/musica.html",
        controller: "cadastraMusicaCtrl",
        controllerAs: "cadastraMusica"
    }

    $stateProvider.state(home);
    $stateProvider.state(musica);
});