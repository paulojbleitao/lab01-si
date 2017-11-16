app.controller('perfilCtrl', function(ArtistaService, MusicaService, $stateParams) {
    let artistas = ArtistaService.artistas;
    this.albuns = MusicaService.albuns;
    this.artista = undefined;
    this.open = false;

    this.inicializar = () => {
        let recuperaArtista = () => {
            let nomeIgual = (elem) => {
                return elem.nome === $stateParams.nome;
            }
            
            this.artista = artistas.find(nomeIgual);
        }

        let recuperaAlbuns = () => {
            let albunsDoArtista = [];
            for (let i = 0; i < this.albuns.length; i++) {
                if (this.albuns[i].musicas[0].artista === this.artista.nome) {
                    albunsDoArtista.push(this.albuns[i]);
                }
            }

            this.albuns = albunsDoArtista;
        }

        recuperaArtista();
        recuperaAlbuns();
    }

    this.atualizaNota = ($event) => {
        this.artista.nota = $event.rating;
    }

    this.salvaUltima = (musica) => {
        this.artista.ultimaMusica = musica;
    }

    this.adicionaFavorito = () => {
        ArtistaService.adicionaFavorito(this.artista);
    }

    this.removeFavorito = () => {
        ArtistaService.removeFavorito(this.artista);
    }

    this.favorito = () => {
        return this.artista.favorito;
    }

    this.inicializar();
});