app.controller('PlaylistCtrl', function ($scope, PlaylistFactory) {
  // $scope.logForm = function() {
  //   console.log($scope.name);
  // };

  $scope.create = function(name) {
    PlaylistFactory.create(name)
    .then(function(){
        $scope.playlistForm.$setPristine();
        $scope.playlistForm.$setUntouched();
        $scope.playlistModel = null;
    });
  };

});