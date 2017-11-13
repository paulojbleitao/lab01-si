app.controller('cadastraMusicaCtrl', function(MusicaService) {
    // falta mensagem de confirmaçao
    this.albuns = MusicaService.albuns;
    let existe = false;

    this.salvaMusica = (musica) => {
        if (MusicaService.salvaMusica(musica)) {
            delete this.musica;
            existe = false;
        } else {
            existe = true;
        }
    }

    this.valida = () => {
        return existe;
    }
});