app.controller('musicaCtrl', function(MusicaService) {
    this.albuns = MusicaService.albuns;
    let existe = false;
    let confirmacao = false;

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

    this.confirma = () => {
        confirmacao = true;
    }

    this.desconfirma = () => {
        confirmacao = false;
    }

    this.confirmacao = () => {
        return confirmacao;
    }

});