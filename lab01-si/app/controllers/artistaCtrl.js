app.controller('cadastraArtistaCtrl', function (ArtistaService, $state) {
    this.artistas = ArtistaService.artistas;
    let existe = false;
    let pesquisado = false;

    this.salvaArtista = (artista) => {
        if (ArtistaService.salvaArtista(artista)) {
            delete this.artista;
            existe = false;
        } else {
            existe = true;
        }
    }

    this.go = (nomeArtista) => {
        $state.go("perfil", {nome: nomeArtista});
    }

    this.valida = () => {
        return existe;
    }

    this.pesquisa = () => {
        pesquisado = true;
    }

    this.pesquisado = () => {
        return pesquisado;
    }
} );