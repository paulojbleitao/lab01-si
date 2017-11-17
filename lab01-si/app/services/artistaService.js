app.service('ArtistaService', function () {
    this.artistas = [{'nome': 'Arctic Monkeys', 'linkFoto': 'http://e-cdn-images.deezer.com/images/artist/9886f58e9ec2227a595afe3af923ec2f/200x200-000000-80-0-0.jpg'}, {'nome': 'Queens of The Stone Age', 'linkFoto': 'http://www.northerntransmissions.com/wp-content/uploads/2016/10/zzzz4653555.jpg'}];
    this.favoritos = [];

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

    this.adicionaFavorito = (artista) => {
        artista.favorito = true;
        this.favoritos.push(artista);
    }

    this.removeFavorito = (artista) => {
        artista.favorito = false;
        const index = this.favoritos.indexOf(artista);
        this.favoritos.splice(index, 1);
    }

} );