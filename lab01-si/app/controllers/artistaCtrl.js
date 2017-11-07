app.controller('cadastraArtistaCtrl', function (ArtistaService) {
    this.artistas = ArtistaService.artistas;

    let existe = false;

    this.salvaArtista = (artista) => {
        if (ArtistaService.salvaArtista(artista)) {
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