app.controller("branchController", ['$scope','api', '$location', function($scope, api, $location) {

    $scope.changed = function(){
        console.log($scope.title);
    };
    $scope.submitIdea = function() {
        api.addSeed({
            "seedTitle":this.title,
            "seedDescription":this.description,
            "numberOfBranches":0
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
