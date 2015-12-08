app.factory('SidebarFactory', function ($http, $q) {
    var SidebarFactory = {};

    SidebarFactory.fetchAll = function() {
        return $http.get('/api/playlists')
        .then(function(res) {
            return res.data;
        });
    };
    
    return SidebarFactory;
});