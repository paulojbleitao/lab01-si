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

    this.collapse = () => {
        console.log("rs");
    }
});