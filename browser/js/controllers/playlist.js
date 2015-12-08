app.controller('PlaylistCtrl', function ($scope, playlist, SongFactory, PlayerFactory, PlaylistFactory, songs) {

  $scope.playlist = playlist;
  $scope.playlist.songs = playlist.songs.map(function(song) {
    console.log(song.artists);
    return SongFactory.convert(song,song.artists[0]);
  })
  console.log($scope.playlist.songs);
  $scope.songs = songs;
  // console.dir($scope.playlist);

  $scope.isCurrent = function(song) {
    return song === PlayerFactory.getCurrentSong();
  };

  $scope.start = function(song) {
    PlayerFactory.start(song);
  };

  $scope.addSong = function(id) {
    // console.log('PLAYLISTCTRL',$scope.songSelect);
    PlaylistFactory.addSong(id,$scope.songSelect)
    .then(function(playlistUpdate) {
      console.log(playlistUpdate);
      $scope.playlist.songs.push(SongFactory.convert(playlistUpdate));
    });
  }

});