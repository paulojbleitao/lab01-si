app.controller('cadastraMusicaCtrl', function() {
    this.musicas = [];

    this.salvaMusica = (musica) => {
        this.musicas.push(musica);
        delete this.musica;
    }

    // logica de album
    // blabla
});