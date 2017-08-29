var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'http://www.songofstones.com/images/large/greenapatite30-11.jpg',
        title: 'Green Apatite',
        description: 'Clears away confusion, apathy or negativity, then, stimulates the intellect to expand knowledge and truth.',
        price: 20
    }),
    new Product({
        imagePath: 'https://i.pinimg.com/736x/76/f1/77/76f177b65d7fca870fa9ab26e61930cf--stones-and-crystals-gem-stones.jpg',
        title: 'Barite',
        description: 'An inner vision stone that can aid entry to higher spiritual realms. Used to discover dream patterns that reveal your spiritual state.',
        price: 20
    }),
    new Product({
        imagePath: 'http://www.crystalinks.com/angelaura350.jpg',
        title: 'Angel Aura',
        description: 'Used to obtain deep peace during meditation and purification, promotes joy, light, optimism, activate the throat chakra, find your personal purpose, channel higher knowledge, reach deeper meditative states.',
        price: 20
    }),
    new Product({
        imagePath: 'http://www.crystalinks.com/kyanite350.jpg',
        title: 'Kyanite',
        description: 'Early travellers sometimes used it as a compass when exploring unknown territories. It can quickly create stillness and tranquility, making it an excellent stone for meditation.',
        price: 20
    }),
    new Product({
        imagePath: 'http://www.crystalinks.com/selenite350.jpg',
        title: 'Selenite',
        description: 'Uses include strengthening bones and teeth, soothes nerves., has positive effect on brain, aiding powers of concentration and clarity, enhances willpower, psychic development.',
        price: 20
    }),
    new Product({
        imagePath: 'http://www.crystalinks.com/zeolite300.jpg',
        title: 'Zeolite',
        description: 'Used for filtering, odor removal, chemical sieve and gas absorption, Reiki stone used primarily for its powerful detoxification properties.',
        price: 20
    }),
    new Product({
        imagePath: 'https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/19624337_1395129780540773_1405242397931077632_n.jpg?ig_cache_key=MTU0ODkxMzcyODY5Mzc3NjQ3MA%3D%3D.2',
        title: 'Lemurian Chaneler Quartz Crystal Point',
        description: 'Used for filtering, odor removal, chemical sieve and gas absorption, Reiki stone used primarily for its powerful detoxification properties.',
        price: 20
    }),
    new Product({
        imagePath: 'https://scontent-sea1-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p750x750/19122096_1401457306613851_2907455163016937472_n.jpg?ig_cache_key=MTU0MDI0NDc0ODA0NzM0MTk3MQ%3D%3D.2',
        title: 'Amazonite',
        description: 'Used for filtering, odor removal, chemical sieve and gas absorption, Reiki stone used primarily for its powerful detoxification properties.',
        price: 20
    }),
        new Product({
        imagePath: 'https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/20184280_1702884953348526_5560020806043435008_n.jpg?ig_cache_key=MTU2NDU3NjA5MDg0NzIyNzEzNg%3D%3D.2',
        title: 'Black Kyanite',
        description: 'Used for filtering, odor removal, chemical sieve and gas absorption, Reiki stone used primarily for its powerful detoxification properties.',
        price: 20
    }),
        new Product({
        imagePath: 'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/18879392_1910400642578496_6142546790903185408_n.jpg?ig_cache_key=MTUyODYzMzY3OTA0MjM5MjA4MQ%3D%3D.2',
        title: 'Amethyst',
        description: 'Used for filtering, odor removal, chemical sieve and gas absorption, Reiki stone used primarily for its powerful detoxification properties.',
        price: 20
    }),
    new Product({
        imagePath: 'https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/18879176_469717563374733_7443712695209033728_n.jpg?ig_cache_key=MTUyODAyMTk2NDMwNzI0OTMxOA%3D%3D.2',
        title: 'Lemurian Quartz',
        description: 'Used for filtering, odor removal, chemical sieve and gas absorption, Reiki stone used primarily for its powerful detoxification properties.',
        price: 20
    }),
    new Product({
        imagePath: 'https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/18879173_277643182639180_4545998088522694656_n.jpg?ig_cache_key=MTUyOTM0NzUzNTg0MjgzNDI5Ng%3D%3D.2',
        title: 'Quartz Cluster Necklace',
        description: 'Used for filtering, odor removal, chemical sieve and gas absorption, Reiki stone used primarily for its powerful detoxification properties.',
        price: 20
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}