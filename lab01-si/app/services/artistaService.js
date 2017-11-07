app.service('ArtistaService', function () {
    this.artistas = [];

    this.salvaArtista = (artista) => {
        let nomeIgual = (elem) => {
            return elem.nome === artista.nome;
        }

        if (!this.artistas.find(nomeIgual)) {
            this.artistas.push(artista);
            return true;
        }
        return false;
    }

} );