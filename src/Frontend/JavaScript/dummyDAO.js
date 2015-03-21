/**
 * Created by mike on 2/24/15.
 */
/**
 * Created by mike on 2/21/15.
 */
var dummyDAO = angular.module('dummyDAO',[]);
dummyDAO.factory('api',function(){

    var tags =  [
        {"tagName":"cooking", "frequency":201, "hyperlink":"www.google.com"},
        {"tagName":"video games", "frequency":100, "hyperlink":"www.google.com"},
        {"tagName":"basketball","frequency":25, "hyperlink":"www.google.com"},
        {"tagName":"baseball","frequency":23, "hyperlink":"www.google.com"},
        {"tagName":"football","frequency":22, "hyperlink":"www.google.com"},
        {"tagName":"hockey","frequency":21, "hyperlink":"www.google.com"},
        {"tagName":"cricket","frequency":20, "hyperlink":"www.google.com"},
        {"tagName":"swimming","frequency":19, "hyperlink":"www.google.com"}
    ];

    var seeds = [
        {"seedTitle":"Oreo Chip Cookies", "seedImageURL":"https://students.cs.byu.edu/~tbell22/cs428/images/oreo-chip-cookie.jpg", "seedDescription":"A delicious chocolate chip cookie recipe!", "numberOfBranches":2001},
        {"seedTitle":"BYU Fake Beard Card", "seedImageURL":"https://students.cs.byu.edu/~tbell22/cs428/images/beardcard.jpg", "seedDescription":"Never shave again!", "numberOfBranches":1994},
        {"seedTitle":"Best Magic deck", "seedImageURL":"https://students.cs.byu.edu/~tbell22/cs428/images/magic-deck.jpg", "seedDescription":"The best deck in Magic, the Gathering.  Branch only if expert.", "numberOfBranches":229},
        {"seedTitle":"Toaster Dune Buggy", "seedImageURL":"http://students.cs.byu.edu/~tbell22/cs428/images/toaster-buggy-small.jpg", "seedDescription":"Toast your toast while roaming the wild desert dunes!", "numberOfBranches":5000000},
        {"seedTitle":"Arm Sleeper Pillow", "seedImageURL":"http://students.cs.byu.edu/~tbell22/cs428/images/arm-sleeper-pillow.jpg", "seedDescription":"Arm sleeper? Sleep no longer with a dead arm!", "numberOfBranches":0},
        {"seedTitle":"Mop Flops", "seedImageURL":"http://students.cs.byu.edu/~tbell22/cs428/images/mop-shoes.jpg", "seedDescription":"Don't bend down to mop your floor ever again. What do you think about the mop flops?", "numberOfBranches":5030},
        {"seedTitle":"Pogo Shoes", "seedImageURL":"http://students.cs.byu.edu/~tbell22/cs428/images/pogo-shoe.jpg", "seedDescription":"Bounce around to get around", "numberOfBranches":392},
        {"seedTitle":"Soda Spout", "seedImageURL":"http://students.cs.byu.edu/~tbell22/cs428/images/soda-spout.jpeg", "seedDescription":"Don't have to pick up the two liter to pour soda!", "numberOfBranches":1234},
        {"seedTitle":"Tailgate Hammocks", "seedImageURL":"http://students.cs.byu.edu/~tbell22/cs428/images/tailgate-hammocks.jpg", "seedDescription":"Tailgate, camp, sleep in style. Check these out.", "numberOfBranches":1584738},
        {"seedTitle":"Transparent Hole Punch", "seedImageURL":"http://students.cs.byu.edu/~tbell22/cs428/images/transparent-hole-punch.jpg", "seedDescription":"Are you sick of punching holes in the wrong spot? I am!", "numberOfBranches":15}
    ];

    var api = {};
    api.getTrendingTags = function(lowRange, highRange){
        return tags;
    }
    api.getTopSeeds = function(lowRange, highRange){
        return seeds;
    }
    api.addTag = function(tag) {
        tags.push(tag);
    }
    api.addSeed = function(seed) {
        seeds.push(seed);
    }
    return api;
});