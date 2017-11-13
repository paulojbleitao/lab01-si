app.service('ArtistaService', function () {
    this.artistas = [{'nome': 'Arctic Monkeys'}, {'nome': 'Queens of The Stone Age'}];

    this.salvaArtista = (artista) => {
        if (!this.artistaExiste(artista)) {
            this.artistas.push(artista);
            return true;
        }
        return false;
    }

    this.artistaExiste = (artista) => {
        let nomeIgual = (elem) => {
            return elem.nome === artista.nome;
        }

        return this.artistas.find(nomeIgual);
    }

} );