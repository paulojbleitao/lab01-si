app.service('MusicaService', function() {
    this.albuns = [{'nome': 'Favourite Worst Nightmare', 'musicas': [{'nome': 'Do Me a Favour', 'artista': 'Arctic Monkeys', 'album': 'Favourite Worst Nightmare', 'ano': '2007', 'duracao': '3:29'}]},
                   {'nome': 'Humbug', 'musicas': [{'nome': 'Fire and The Thud', 'artista': 'Arctic Monkeys', 'album': 'Humbug', 'ano': '2009', 'duracao': '3:58'}]},
                   {'nome': "Whatever People Say I Am That's What I'm Not", 'musicas': [{'nome': 'A Certain Romance', 'artista': 'Arctic Monkeys', 'album': "Whatever People Say I Am That's What I'm Not", 'ano': '2006', 'duracao': '5:31'}]}];

    this.salvaMusica = (musica) => {
        if (!this.albumExiste(musica.album)) {
            this.salvaAlbum(musica.album);
        }
        
        return this.adicionaMusicaAoAlbum(musica, musica.album);
    }

    this.albumExiste = (album) => {
        let albumIgual = (elem) => {
            return elem.nome === album;
        }

        return this.albuns.find(albumIgual);
    }

    this.salvaAlbum = (nomeAlbum) => {
        let album = {'nome': nomeAlbum, 'musicas': []};
        this.albuns.push(album);
    }

    this.adicionaMusicaAoAlbum = (musica, nomeAlbum) => {
        let albumIgual = (elem) => {
            return elem.nome === nomeAlbum;
        }

        let musicaIgual = (elem) => {
            return elem.nome === musica.nome;
        }

        let album = this.albuns.find(albumIgual);
        if (!album.musicas.find(musicaIgual)) {
            musica.artista = musica.artista.nome;
            album.musicas.push(musica);
            return true;
        } else {
            return false;
        }
    }
});