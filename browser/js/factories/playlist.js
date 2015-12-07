app.factory('PlaylistFactory', function ($http, $q) {
    var PlaylistFactory = {};
    PlaylistFactory.create = function (name) {
        return $http.post('/api/playlists', {
            name: name
        })
        .then(function(response){
            return response.data;
        })
    };
    return PlaylistFactory;
});