app.config(function ($stateProvider) {
  $stateProvider.state('playlist', {
    url: '/playlist/:id',
    templateUrl: '/templates/playlist.html',
    controller: 'PlaylistCtrl',
    resolve: {
      playlist: function (PlaylistFactory, $stateParams) {
        return PlaylistFactory.fetchById($stateParams.id);
      },
      songs: function (SongFactory) {
        console.log('asdf')
        return SongFactory.fetchAll();
      }
    }
  });
});