// importing mongo client
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;
let connection = new MongoClient(uri, {
  useUnifiedTopology: true
});

try {
  connection.connect();
  console.log('connected to mongodb');
} catch (error) {
  console.log(error);
  db = null;
}

module.exports = connection;
