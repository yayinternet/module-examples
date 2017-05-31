const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const exphbs  = require('express-handlebars');

const api = require('./routes/api.js');
const views = require('./routes/views.js');

const app = express();
const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

const DATABASE_NAME = 'eng-dict2';
const MONGO_URL = `mongodb://localhost:27017/${DATABASE_NAME}`;

async function startServer() {
  const db = await MongoClient.connect(MONGO_URL);
  const collection = db.collection('words');

  // Adds the "words" collection to every MongoDB request.
  function setCollection(req, res, next) {
    req.collection = collection;
    next();
  }
  app.use(setCollection);
  app.use(api);
  app.use(views);

  await app.listen(3000);
  console.log('Listening on port 3000');
}
startServer();
