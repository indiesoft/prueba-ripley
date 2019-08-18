import { createServer } from 'http';
import express, { json } from 'express';
import { json as _json, urlencoded } from 'body-parser';

import coors from './middleware/coors';
import access from './middleware/access';
import errorHandler from './middleware/error';
import controllers from './controller';

var admin = require("firebase-admin");
var serviceAccount = require("../firebase-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://prueba-ripley.firebaseio.com"
});

const app = express();
app.use(_json({ limit: '10mb', extended: true }))
app.use(urlencoded({ limit: '10mb', extended: true }))
app.use(json());

coors(app);
access(app, admin);
controllers(app);
errorHandler(app);

const port = process.env.PORT || 8100;
const server = createServer(app);
server.listen(port, (err) => {
  if (err) {
    console.log('Unable to listen for connections');
  }
  console.log('# Server started at', new Date().toISOString());
  console.log('# Running on port ', port);
})
