app.config(function ($stateProvider) {
  $stateProvider.state('playlistNew', {
    url: '/playlist/new',
    templateUrl: '/templates/playlist-new.html',
    controller: 'NewPlaylistCtrl'
  });
});