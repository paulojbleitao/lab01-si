app.controller('playlistCtrl', function(MusicaService, PlaylistService, $state, $stateParams) {
    this.playlists = PlaylistService.playlists;
    let existePlaylist = false;
    let existeMusica = false;

    this.salvaPlaylist = (playlist) => {
        if (PlaylistService.salvaPlaylist(playlist)) {
            delete this.playlist;
            existePlaylist = false;
        } else {
            existePlaylist = true;
        }
    }

    this.adicionaMusica = (playlist, musica) => {
        if (!this.existeMusicaNaPlaylist(playlist, musica)) {
            playlist.musicas.push(musica);
            existeMusica = false;
        } else {
            existeMusica = true;
        }
    }

    this.removeMusica = (musica) => {
        const index = this.playlistAtual.musicas.indexOf(musica);
        this.playlistAtual.musicas.splice(index, 1);
    }

    this.removePlaylist = (playlist) => {
        PlaylistService.removePlaylist(playlist);
    }

    this.existeMusicaNaPlaylist = (playlist, musica) => {
        let nomeIgual = (elem) => {
            return elem.nome === musica.nome;
        }

        return playlist.musicas.find(nomeIgual);
    }

    this.existemMusicas = () => {
        return this.playlistAtual.musicas.length !== 0;
    }

    this.existemPlaylists = () => {
        return this.playlists.length !== 0;
    }

    this.validaCadastro = () => {
        return existePlaylist;
    }

    this.validaMusica = () => {
        return existeMusica;
    }

    this.musicas = () => {
        let albuns = MusicaService.albuns;
        let musicas = [];

        for (let i = 0; i < albuns.length; i++) {
            for (let j = 0; j < albuns[i].musicas.length; j++) {
                musicas.push(albuns[i].musicas[j]);
            }
        }

        return musicas;
    }

    let recuperaPlaylist = () => {
        let nomeIgual = (elem) => {
            return elem.nome === $stateParams.nome;
        }
        
        this.playlistAtual = this.playlists.find(nomeIgual);
    }

    recuperaPlaylist();

    this.go = (nomePlaylist) => {
        $state.go("playlist", {nome: nomePlaylist});
    }
});