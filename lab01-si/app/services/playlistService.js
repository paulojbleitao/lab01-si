app.service('PlaylistService', function() {
    this.playlists = [];

    this.salvaPlaylist = (playlist) => {
        if (!this.playlistExiste(playlist)) {
            playlist.musicas = [];
            this.playlists.push(playlist);
            return true;
        }
        return false;
    }

    this.removePlaylist = (playlist) => {
        const index = this.playlists.indexOf(playlist);
        this.playlists.splice(index, 1);
    }

    this.playlistExiste = (playlist) => {
        let nomeIgual = (elem) => {
            return elem.nome === playlist.nome;
        }

        return this.playlists.find(nomeIgual);
    }

});