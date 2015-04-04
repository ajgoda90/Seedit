/**
 * Created by mike on 2/24/15.
 */
/**
 * Created by mike on 2/21/15.
 */
var dummyDAO = angular.module('dummyDAO',[]);
dummyDAO.factory('api',function(){

    var tags =  [
        {"tagid":5,"tagName":"cooking", "ranking":1},
        {"tagid":2,"tagName":"video games", "ranking":2},
        {"tagid":7,"tagName":"basketball","ranking":3},
        {"tagid":33,"tagName":"baseball","ranking":4},
        {"tagid":87,"tagName":"football","ranking":5},
        {"tagid":124,"tagName":"hockey","ranking":6},
        {"tagid":5435,"tagName":"cricket","ranking":7},
        {"tagid":444,"tagName":"swimming","ranking":8}
    ];

    /*
     seed{
     “seedTitle”:..., //64 chars
     “seedID”:...,
     “seedDescription”:..., //no char limit
     “ranking”:...,
     “parentID”:...,
     “numBranches”:...,
     “pictureURL”:...,
     “tags”: [{tagName,tagID},...]
     “upvotes”:...,
     “upvoted”:..., //current user has upvoted. True/False. False if no user logged in
     “branches”:[
     {seedTitle,SeedID…};
     {seedTitle,SeedID…};
     ]
     }
     */

    var seeds = [
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":true, "upvotes":1002, "ranking":1, "seedID":35, "seedTitle":"Oreo Chip Cookies", "seedImageURL":"http://veryculinary.com/wp-content/uploads/2013/01/Oreo_Stuffed_Chocolate_Chip_Cookies_blog_.jpg", "seedDescription":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.", "numberOfBranches":2001},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":1001, "ranking":2, "seedID":33, "seedTitle":"BYU Fake Beard Card", "seedImageURL":"http://universe.byu.edu/wp-content/uploads/2013/10/beardcard.jpg", "seedDescription":"Never shave again!", "numberOfBranches":1994},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":900, "ranking":3, "seedID":24, "seedTitle":"Best Magic deck", "seedImageURL":"http://geekspodcast.com/geekpress/wp-content/uploads/2010/05/MTG_CARDS1.jpg", "seedDescription":"The best deck in Magic, the Gathering.  Branch only if expert.", "numberOfBranches":229},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":800, "ranking":4, "seedID":100, "seedTitle":"Toaster Dune Buggy", "seedImageURL":"http://i.kinja-img.com/gawker-media/image/upload/s--cqEPCl9P--/i8spuytumbm6ao1gi2sh.jpg", "seedDescription":"Toast your toast while roaming the wild desert dunes!", "numberOfBranches":5000000},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":700, "ranking":5, "seedID":90, "seedTitle":"Arm Sleeper Pillow", "seedImageURL":"http://digital.hammacher.com/Items/78540/78540_1000x1000.jpg", "seedDescription":"Arm sleeper? Sleep no longer with a dead arm!", "numberOfBranches":0},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":600, "ranking":6, "seedID":1002, "seedTitle":"Mop Flops", "seedImageURL":"http://www.toptenz.net/wp-content/uploads/2011/12/Mop.jpg", "seedDescription":"Don't bend down to mop your floor ever again. What do you think about the mop flops?", "numberOfBranches":5030},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":500, "ranking":7, "seedID":588, "seedTitle":"Pogo Shoes", "seedImageURL":"http://i00.i.aliimg.com/wsphoto/v0/2052877908/flying-shoes-pogo-jump-stilts-air-runner-skyrunner-bounce-unisex-fitness-equipment.jpg_350x350.jpg", "seedDescription":"Bounce around to get around", "numberOfBranches":392},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":400, "ranking":8, "seedID":2433, "seedTitle":"Soda Spout", "seedImageURL":"http://ecx.images-amazon.com/images/I/61GK0MIqk1L._SX425_.jpg", "seedDescription":"Don't have to pick up the two liter to pour soda!", "numberOfBranches":1234},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":300, "ranking":9, "seedID":1, "seedTitle":"Tailgate Hammocks", "seedImageURL":"http://www.themanual.com/wp-content/uploads/2014/10/Screen-shot-2014-10-07-at-6.56.38-AM.png", "seedDescription":"Tailgate, camp, sleep in style. Check these out.", "numberOfBranches":1584738},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":200, "ranking":10, "seedID":4324, "seedTitle":"Transparent Hole Punch", "seedImageURL":"http://www.yankodesign.com/images/design_news/2010/10/28/transparent_punch3.jpg", "seedDescription":"Are you sick of punching holes in the wrong spot? I am!", "numberOfBranches":15}
    ];
    var seedsTrending = [
        {"tags":[{"tagid":444,"tagName":"Rocket"},{"tagid":5435,"tagName":"solar"}], "upvoted":true, "upvotes":3, "ranking":1, "seedID":35, "seedTitle":"Rocket Ship", "seedImageURL":"https://static.spark.autodesk.com/2012/08/15__00_19_43/10475_RocketShip_wire.jpg942d3366-cc29-4e56-97e7-3405c0ad14eeLarge.jpg", "seedDescription":"Make a solar powered remote controlled Rocket that fits in your pocket!", "numberOfBranches":3},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":1001, "ranking":2, "seedID":33, "seedTitle":"BYU Fake Beard Card", "seedImageURL":"http://universe.byu.edu/wp-content/uploads/2013/10/beardcard.jpg", "seedDescription":"Never shave again!", "numberOfBranches":1994},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":900, "ranking":3, "seedID":24, "seedTitle":"Best Magic deck", "seedImageURL":"http://geekspodcast.com/geekpress/wp-content/uploads/2010/05/MTG_CARDS1.jpg", "seedDescription":"The best deck in Magic, the Gathering.  Branch only if expert.", "numberOfBranches":229},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":800, "ranking":4, "seedID":100, "seedTitle":"Toaster Dune Buggy", "seedImageURL":"http://i.kinja-img.com/gawker-media/image/upload/s--cqEPCl9P--/i8spuytumbm6ao1gi2sh.jpg", "seedDescription":"Toast your toast while roaming the wild desert dunes!", "numberOfBranches":5000000},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":700, "ranking":5, "seedID":90, "seedTitle":"Arm Sleeper Pillow", "seedImageURL":"http://digital.hammacher.com/Items/78540/78540_1000x1000.jpg", "seedDescription":"Arm sleeper? Sleep no longer with a dead arm!", "numberOfBranches":0},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":600, "ranking":6, "seedID":1002, "seedTitle":"Mop Flops", "seedImageURL":"http://www.toptenz.net/wp-content/uploads/2011/12/Mop.jpg", "seedDescription":"Don't bend down to mop your floor ever again. What do you think about the mop flops?", "numberOfBranches":5030},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":500, "ranking":7, "seedID":588, "seedTitle":"Pogo Shoes", "seedImageURL":"http://i00.i.aliimg.com/wsphoto/v0/2052877908/flying-shoes-pogo-jump-stilts-air-runner-skyrunner-bounce-unisex-fitness-equipment.jpg_350x350.jpg", "seedDescription":"Bounce around to get around", "numberOfBranches":392},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":400, "ranking":8, "seedID":2433, "seedTitle":"Soda Spout", "seedImageURL":"http://ecx.images-amazon.com/images/I/61GK0MIqk1L._SX425_.jpg", "seedDescription":"Don't have to pick up the two liter to pour soda!", "numberOfBranches":1234},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":300, "ranking":9, "seedID":1, "seedTitle":"Tailgate Hammocks", "seedImageURL":"http://www.themanual.com/wp-content/uploads/2014/10/Screen-shot-2014-10-07-at-6.56.38-AM.png", "seedDescription":"Tailgate, camp, sleep in style. Check these out.", "numberOfBranches":1584738},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":200, "ranking":10, "seedID":4324, "seedTitle":"Transparent Hole Punch", "seedImageURL":"http://www.yankodesign.com/images/design_news/2010/10/28/transparent_punch3.jpg", "seedDescription":"Are you sick of punching holes in the wrong spot? I am!", "numberOfBranches":15}
    ];
    var seedsTrending = [
        {"tags":[{"tagid":444,"tagName":"Rocket"},{"tagid":5435,"tagName":"solar"}], "upvoted":true, "upvotes":3, "ranking":1, "seedID":35, "seedTitle":"Rocket Ship", "seedImageURL":"https://static.spark.autodesk.com/2012/08/15__00_19_43/10475_RocketShip_wire.jpg942d3366-cc29-4e56-97e7-3405c0ad14eeLarge.jpg", "seedDescription":"Make a solar powered remote controlled Rocket that fits in your pocket!", "numberOfBranches":3},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":1001, "ranking":2, "seedID":33, "seedTitle":"BYU Fake Beard Card", "seedImageURL":"http://universe.byu.edu/wp-content/uploads/2013/10/beardcard.jpg", "seedDescription":"Never shave again!", "numberOfBranches":1994},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":900, "ranking":3, "seedID":24, "seedTitle":"Best Magic deck", "seedImageURL":"http://geekspodcast.com/geekpress/wp-content/uploads/2010/05/MTG_CARDS1.jpg", "seedDescription":"The best deck in Magic, the Gathering.  Branch only if expert.", "numberOfBranches":229},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":800, "ranking":4, "seedID":100, "seedTitle":"Toaster Dune Buggy", "seedImageURL":"http://i.kinja-img.com/gawker-media/image/upload/s--cqEPCl9P--/i8spuytumbm6ao1gi2sh.jpg", "seedDescription":"Toast your toast while roaming the wild desert dunes!", "numberOfBranches":5000000},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":700, "ranking":5, "seedID":90, "seedTitle":"Arm Sleeper Pillow", "seedImageURL":"http://digital.hammacher.com/Items/78540/78540_1000x1000.jpg", "seedDescription":"Arm sleeper? Sleep no longer with a dead arm!", "numberOfBranches":0},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":600, "ranking":6, "seedID":1002, "seedTitle":"Mop Flops", "seedImageURL":"http://www.toptenz.net/wp-content/uploads/2011/12/Mop.jpg", "seedDescription":"Don't bend down to mop your floor ever again. What do you think about the mop flops?", "numberOfBranches":5030},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":500, "ranking":7, "seedID":588, "seedTitle":"Pogo Shoes", "seedImageURL":"http://i00.i.aliimg.com/wsphoto/v0/2052877908/flying-shoes-pogo-jump-stilts-air-runner-skyrunner-bounce-unisex-fitness-equipment.jpg_350x350.jpg", "seedDescription":"Bounce around to get around", "numberOfBranches":392},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":400, "ranking":8, "seedID":2433, "seedTitle":"Soda Spout", "seedImageURL":"http://ecx.images-amazon.com/images/I/61GK0MIqk1L._SX425_.jpg", "seedDescription":"Don't have to pick up the two liter to pour soda!", "numberOfBranches":1234},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":300, "ranking":9, "seedID":1, "seedTitle":"Tailgate Hammocks", "seedImageURL":"http://www.themanual.com/wp-content/uploads/2014/10/Screen-shot-2014-10-07-at-6.56.38-AM.png", "seedDescription":"Tailgate, camp, sleep in style. Check these out.", "numberOfBranches":1584738},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":200, "ranking":10, "seedID":4324, "seedTitle":"Transparent Hole Punch", "seedImageURL":"http://www.yankodesign.com/images/design_news/2010/10/28/transparent_punch3.jpg", "seedDescription":"Are you sick of punching holes in the wrong spot? I am!", "numberOfBranches":15}
    ];
    var api = {};
    api.getTrendingTags = function(lowRange, highRange){
        return tags;
    }
    api.getTopSeeds = function(lowRange, highRange){
        return seeds;
    }
    api.getTrendingSeeds = function(lowRange, highRange){
        return seedsTrending;
    };
    api.addTag = function(tag) {
        tags.push(tag);
    }
    api.addSeed = function(seed) {
        seeds.push(seed);
    }

    api.getSeedByID = function(seedID) {
        var i=0, len=seeds.length;
        for (; i<len; i++) {
            if (seeds[i].seedID == seedID) {
                return seeds[i];
            }
        }
        return null;
    }

    return api;
});