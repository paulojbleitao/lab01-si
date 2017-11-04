const app = angular.module('jukeboxApp', []);
app.controller('cadastraArtistaCtrl', function () {
    this.artistas = [];

    let existe = false;

    this.salvaArtista = (artista) => {
        let nomeIgual = (elem) => {
            return elem.nome === artista.nome;
        }

        if (!this.artistas.find(nomeIgual)) {
            this.artistas.push(artista);
            delete this.artista;
            existe = false;
        } else {
            existe = true;
        }
    }

    this.valida = () => {
        return existe;
    }
} );