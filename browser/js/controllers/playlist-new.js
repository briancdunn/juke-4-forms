app.controller('NewPlaylistCtrl', function ($scope, $state, PlaylistFactory) {

  $scope.create = function(name) {
    PlaylistFactory.create(name)
    .then(function(playlist){
        $scope.playlistForm.$setPristine();
        $scope.playlistForm.$setUntouched();
        $scope.playlistModel = null;
        $state.go('playlist', { id: playlist._id })
    });
  };

});