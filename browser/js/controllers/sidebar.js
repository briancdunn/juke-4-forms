app.controller('SidebarCtrl', function ($scope, PlaylistFactory) {

  PlaylistFactory.fetchAll()
  .then(function(playlists) {
    $scope.playlists = playlists;
  })
  .catch(function(err) {
    console.log(err);
  });

});