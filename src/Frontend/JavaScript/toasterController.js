app.controller("toasterController", ['$scope','api', '$location', function($scope, api, $location) {
    $scope.title = "Toaster in your car";
    $scope.description = "A toaster in your car so that you can have breakfast on the go!";
    $scope.imageURL ="http://i.kinja-img.com/gawker-media/image/upload/s--cqEPCl9P--/i8spuytumbm6ao1gi2sh.jpg";
    $scope.tags ="#toast #toaster #car";
    $scope.overlordData = api.getTopToasterSeeds();

    $scope.submitIdea = function() {
        var id = api.getSeedID();
        api.addSeed({
            "seedTitle":this.title,
            "seedDescription":this.description,
            "numberOfBranches":0,
            "seedImageURL":this.imageURL,
            "tags":[{"tagid":444,"tagName":"toasters"}],
            "upvoted":false,
            "ranking":1,
            "seedID":id
        });

        var hashtags = this.tags.split('#');

        for (var i = 0; i < hashtags.length; i++) {
            var tag = hashtags[i].trim();
            api.addTag({
                "tagName": tag,
                "frequency": 1,
                "hyperlink": "www.google.com"
            });
        }

        $location.path( '/main-home' );
    }
}]);
