app.controller('PlaylistCtrl', function ($scope, playlist, SongFactory, PlayerFactory, PlaylistFactory, songs) {

  $scope.playlist = playlist;
  $scope.playlist.songs = playlist.songs.map(function(song) {
    return SongFactory.convert(song,playlist.artists);
  })
  $scope.songs = songs;

  $scope.isCurrent = function(song) {
    return song === PlayerFactory.getCurrentSong();
  };

  $scope.start = function(song) {
    PlayerFactory.start(song);
  };

  $scope.addSong = function(id) {
    console.log($scope.songSelect);
    PlaylistFactory.addSong(id,$scope.songSelect)
    .then(function(playlistUpdate) {
      $scope.playlist.songs.push(SongFactory.convert(playlistUpdate));
      $scope.songSelect = null;
      $scope.addSongForm.$setPristine();
      $scope.addSongForm.$setUntouched();
    });
  }

});