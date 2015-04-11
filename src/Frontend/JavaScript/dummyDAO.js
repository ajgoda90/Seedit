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
        {"tagid":444,"tagName":"swimming","ranking":8},
        {"tagid":444,"tagName":"toasters","ranking":9},
        {"tagid":444,"tagName":"grills","ranking":10}
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
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":700, "ranking":5, "seedID":90, "seedTitle":"Arm Sleeper Pillow", "seedImageURL":"http://digital.hammacher.com/Items/78540/78540_1000x1000.jpg", "seedDescription":"Arm sleeper? Sleep no longer with a dead arm!", "numberOfBranches":0},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":600, "ranking":6, "seedID":1002, "seedTitle":"Mop Flops", "seedImageURL":"http://www.toptenz.net/wp-content/uploads/2011/12/Mop.jpg", "seedDescription":"Don't bend down to mop your floor ever again. What do you think about the mop flops?", "numberOfBranches":5030},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":500, "ranking":7, "seedID":588, "seedTitle":"Pogo Shoes", "seedImageURL":"http://i00.i.aliimg.com/wsphoto/v0/2052877908/flying-shoes-pogo-jump-stilts-air-runner-skyrunner-bounce-unisex-fitness-equipment.jpg_350x350.jpg", "seedDescription":"Bounce around to get around", "numberOfBranches":392},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":400, "ranking":8, "seedID":2433, "seedTitle":"Soda Spout", "seedImageURL":"http://ecx.images-amazon.com/images/I/61GK0MIqk1L._SX425_.jpg", "seedDescription":"Don't have to pick up the two liter to pour soda!", "numberOfBranches":1234},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":300, "ranking":9, "seedID":1, "seedTitle":"Tailgate Hammocks", "seedImageURL":"http://www.themanual.com/wp-content/uploads/2014/10/Screen-shot-2014-10-07-at-6.56.38-AM.png", "seedDescription":"Tailgate, camp, sleep in style. Check these out.", "numberOfBranches":1584738},
        {"tags":[{"tagid":444,"tagName":"swimming"},{"tagid":5435,"tagName":"cricket"}], "upvoted":false, "upvotes":200, "ranking":10, "seedID":4324, "seedTitle":"Transparent Hole Punch", "seedImageURL":"http://www.yankodesign.com/images/design_news/2010/10/28/transparent_punch3.jpg", "seedDescription":"Are you sick of punching holes in the wrong spot? I am!", "numberOfBranches":15}
    ];

    var toasterSeeds = [
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":311,"tagName":"toasters"}], "upvoted":false, "upvotes":6, "ranking":11, "seedID":2001, "seedTitle":"Toaster backpack", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/backpack-toaster.jpeg", "seedDescription":"This backpack will enable its carrier to make delicious toast regardless if you're home or on the road. Booyah!", "numberOfBranches":2},
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":312,"tagName":"toasters"}], "upvoted":false, "upvotes":7, "ranking":12, "seedID":2002, "seedTitle":"Toaster in Lazy Boy", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/toaster-recliner.png", "seedDescription":"There's only one thing better watching the game in a Lazy Boy recliner, and that's eating toast whilst watching the game in a Lazy Boy", "numberOfBranches":2},
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":313,"tagName":"toasters"}], "upvoted":false, "upvotes":8, "ranking":13, "seedID":2003, "seedTitle":"Toaster in motorcycle", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/motorcycle-toaster.jpg", "seedDescription":"Get your motor running, head out on the highway! There's nothing more wild than a toaster in your motorcycle", "numberOfBranches":15},
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":314,"tagName":"toasters"}], "upvoted":false, "upvotes":9, "ranking":14, "seedID":2004, "seedTitle":"Toaster in Xbox controller", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/xbox-toaster.jpg", "seedDescription":"Talk about game fuel. This controller / toaster combination will supply plenty of carbs for your continued play", "numberOfBranches":16},
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":314,"tagName":"toasters"}], "upvoted":false, "upvotes":10, "ranking":15, "seedID":2005, "seedTitle":"Twelve-slice toaster", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/10-slice-toaster.jpeg", "seedDescription":"Catering a wedding and craving toast? Have a family of 40 and want that cinnamon toast goodness? The wait is over; this toaster can toast an entire loaf of bread in one shot.", "numberOfBranches":17},
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":314,"tagName":"toasters"}], "upvoted":false, "upvotes":11, "ranking":16, "seedID":2006, "seedTitle":"Toast Utility Belt", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/utility-belt-toaster.jpeg", "seedDescription":"This utility belt has the capability of holding many different types of toast-like refreshment. Ooo sweet bobby georgia, toast is a-comin'.", "numberOfBranches":3},
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":314,"tagName":"toasters"}], "upvoted":false, "upvotes":12, "ranking":17, "seedID":2007, "seedTitle":"Toast Cargo Pants", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/cargo-pants-toaster.jpeg", "seedDescription":"These cargo pants have polyurethane liners that will keep your delectable toast toppings on the toast and not on your pants!", "numberOfBranches":4},
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":314,"tagName":"toasters"}], "upvoted":false, "upvotes":13, "ranking":18, "seedID":2008, "seedTitle":"Toaster Computer", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/computer-toaster.jpg", "seedDescription":"Imagine being able to make some toast as you code. Delicious for days. This computer will meet all your toasting needs.", "numberOfBranches":7},
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":314,"tagName":"toasters"}], "upvoted":false, "upvotes":14, "ranking":19, "seedID":2009, "seedTitle":"Toast Online Website", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/toast-online-final.jpg", "seedDescription":"Don't have time to toast? Hungry for the crispness? This new website will meet all your toasting needs. All orders come frozen and full of flavor.", "numberOfBranches":5},
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":314,"tagName":"toasters"}], "upvoted":false, "upvotes":15, "ranking":20, "seedID":2010, "seedTitle":"Monster-face toaster", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/monster-toaster.jpg", "seedDescription":"This wonderful device takes your favorite treat and puts a face on it. Grrrrr!", "numberOfBranches":4}
    ];

    var grillSeeds = [
        {"tags":[{"tagid":444,"tagName":"grills"},{"tagid":314,"tagName":"grills"}], "upvoted":false, "upvotes":16, "ranking":21, "seedID":2011, "seedTitle":"In-car George Foreman Grill", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/car-grill.jpeg", "seedDescription":"Kabobs on the highway? Check. Steaks on the interstate? Check. Unlimited tasty happiness? Check indeed.", "numberOfBranches":4}
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

    var toasterTrendingSeeds = [
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":311,"tagName":"toasters"}], "upvoted":false, "upvotes":6, "ranking":11, "seedID":2001, "seedTitle":"Toaster backpack", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/backpack-toaster.jpeg", "seedDescription":"This backpack will enable its carrier to make delicious toast regardless if you're home or on the road. Booyah!", "numberOfBranches":2},
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":312,"tagName":"toasters"}], "upvoted":false, "upvotes":7, "ranking":12, "seedID":2002, "seedTitle":"Toaster in Lazy Boy", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/toaster-recliner.png", "seedDescription":"There's only one thing better watching the game in a Lazy Boy recliner, and that's eating toast whilst watching the game in a Lazy Boy", "numberOfBranches":2},
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":313,"tagName":"toasters"}], "upvoted":false, "upvotes":8, "ranking":13, "seedID":2003, "seedTitle":"Toaster in motorcycle", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/motorcycle-toaster.jpg", "seedDescription":"Get your motor running, head out on the highway! There's nothing more wild than a toaster in your motorcycle", "numberOfBranches":15},
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":314,"tagName":"toasters"}], "upvoted":false, "upvotes":9, "ranking":14, "seedID":2004, "seedTitle":"Toaster in Xbox controller", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/xbox-toaster.jpg", "seedDescription":"Talk about game fuel. This controller / toaster combination will supply plenty of carbs for your continued play", "numberOfBranches":16},
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":314,"tagName":"toasters"}], "upvoted":false, "upvotes":10, "ranking":15, "seedID":2005, "seedTitle":"Twelve-slice toaster", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/10-slice-toaster.jpeg", "seedDescription":"Catering a wedding and craving toast? Have a family of 40 and want that cinnamon toast goodness? The wait is over; this toaster can toast an entire loaf of bread in one shot.", "numberOfBranches":17},
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":314,"tagName":"toasters"}], "upvoted":false, "upvotes":11, "ranking":16, "seedID":2006, "seedTitle":"Toast Utility Belt", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/utility-belt-toaster.jpeg", "seedDescription":"This utility belt has the capability of holding many different types of toast-like refreshment. Ooo sweet bobby georgia, toast is a-comin'.", "numberOfBranches":3},
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":314,"tagName":"toasters"}], "upvoted":false, "upvotes":12, "ranking":17, "seedID":2007, "seedTitle":"Toast Cargo Pants", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/cargo-pants-toaster.jpeg", "seedDescription":"These cargo pants have polyurethane liners that will keep your delectable toast toppings on the toast and not on your pants!", "numberOfBranches":4},
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":314,"tagName":"toasters"}], "upvoted":false, "upvotes":13, "ranking":18, "seedID":2008, "seedTitle":"Toaster Computer", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/computer-toaster.jpg", "seedDescription":"Imagine being able to make some toast as you code. Delicious for days. This computer will meet all your toasting needs.", "numberOfBranches":7},
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":314,"tagName":"toasters"}], "upvoted":false, "upvotes":14, "ranking":19, "seedID":2009, "seedTitle":"Toast Online Website", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/toast-online-final.jpg", "seedDescription":"Don't have time to toast? Hungry for the crispness? This new website will meet all your toasting needs. All orders come frozen and full of flavor.", "numberOfBranches":5},
        {"tags":[{"tagid":444,"tagName":"toasters"},{"tagid":314,"tagName":"toasters"}], "upvoted":false, "upvotes":15, "ranking":20, "seedID":2010, "seedTitle":"Monster-face toaster", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/monster-toaster.jpg", "seedDescription":"This wonderful device takes your favorite treat and puts a face on it. Grrrrr!", "numberOfBranches":4}
    ];

    var getGrillTrendingSeeds = [
        {"tags":[{"tagid":444,"tagName":"grills"},{"tagid":314,"tagName":"grills"}], "upvoted":false, "upvotes":16, "ranking":21, "seedID":2011, "seedTitle":"In-car George Foreman Grill", "seedImageURL":"http://students.cs.byu.edu/~jbh52/cs428/car-grill.jpeg", "seedDescription":"Kabobs on the highway? Check. Steaks on the interstate? Check. Unlimited tasty happiness? Check indeed.", "numberOfBranches":4}
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
    api.getTopToasterSeeds = function(lowRange, highRange){
        return toasterSeeds;
    }
    api.getTopGrillSeeds = function(lowRange, highRange){
        return grillSeeds;
    }
    api.getTrendingSeeds = function(lowRange, highRange){
        return seedsTrending;
    };
    api.getToasterTrendingSeeds = function(lowRange, highRange){
        return toasterTrendingSeeds;
    };
    api.getGrillTrendingSeeds = function(lowRange, highRange){
        return toasterTrendingSeeds;
    };
    api.addTag = function(tag) {
        tags.push(tag);
    }
    api.addSeed = function(seed) {
        seeds.unshift(seed);
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