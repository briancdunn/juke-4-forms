app.factory('PlaylistFactory', function ($http) {
    var PlaylistFactory = {};
    var cachedPlaylists = [];

    PlaylistFactory.create = function (name) {
        return $http.post('/api/playlists', {
            name: name
        })
        .then(function(response){
            var playlist = response.data;
            cachedPlaylists.push(playlist)
            return playlist;
        })
    };

    PlaylistFactory.fetchAll = function() {
        return $http.get('/api/playlists')
        .then(function(res) {
            angular.copy(res.data, cachedPlaylists);
            return cachedPlaylists;
        });
    };

    PlaylistFactory.fetchById = function(id) {
        return $http.get('/api/playlists/'+id)
        .then(function(playlist) {
            return playlist.data;
        })
    }

    PlaylistFactory.addSong = function(id,song) {
        return $http.post('/api/playlists/'+id+'/songs',{ song: song })
        .then(function(song) {
            return song.data;
        })
        .catch(function(err) {
            console.log(err);
        })
    }

    return PlaylistFactory;
});