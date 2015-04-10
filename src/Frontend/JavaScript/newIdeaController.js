/**
 * Created by tbell on 3/7/15.
 */
app.controller("newIdeaController", ['$scope','api', '$location', function($scope, api, $location) {
    this.submitIdea = function() {
        alert('Submitting idea');
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

app.directive('fallbackSrc', function () {
    var fallbackSrc = {
        link: function postLink(scope, iElement, iAttrs) {
            iElement.bind('error', function() {
                angular.element(this).attr("src", iAttrs.fallbackSrc);
            });
        }
    }
    return fallbackSrc;
});