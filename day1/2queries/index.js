var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/example';
mongodb.MongoClient.connect(uri, function(error, db) {
  if (error) {
    console.log(error);
    process.exit(1);
  }

  var doc = {
    title: 'Me Before You',
    year: '2016',
    rating: 'PG',
    ratings: {
      rottenTomatoes: 80,
      imdb: 75
    },
    actors: ['Khaleesi', 'Some Guy']
  };

  // db.collection('movies').insert(doc, function(error, result) {
  //   if (error) {
  //     console.log(error);
  //     process.exit(1);
  //   }

    // queries
    // .find({'actors' : 'Khaleesi' })
    db.collection('movies')
    .find({'ratings.imdb' : {"$gte": 75}})
    .toArray(function(error, docs) {
      if (error) {
        console.log(error);
        process.exit(1);
      }

      console.log('Found docs:');
      docs.forEach(function(doc) {
        console.log(JSON.stringify(doc));
      });
      process.exit(0);
    });
  // });
});