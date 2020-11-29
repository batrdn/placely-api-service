import mongoose from 'mongoose';
import {GraphQLSchema} from 'graphql';
import { mergeSchemas } from 'graphql-tools';
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import multer from 'multer';
import Grid from 'gridfs-stream';
import crypto from 'crypto';
import path from 'path';
import {env} from './environment/environment';
import resolvers from './resolver/resolvers';
import schemas from './schema/schemas';
import {uploadFurnitureImage} from './usecase/uploadFurnitureImage';
import {fetchImage} from './usecase/fetchImage';
import {upload3DModel} from './usecase/upload3DModel';

const GridFsStorage = require('multer-gridfs-storage');
const cors = require('cors');
const connection = mongoose.createConnection(env.mongoUri);

mongoose.connect(env.mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Successfully connected to Furniture Database'))
  .catch((err) => console.error(err));

let gfs;

connection.once('open', () => {
  gfs = Grid(connection.db, mongoose.mongo);
  gfs.collection('uploads');
});

const storage = new GridFsStorage({
  url: env.mongoUri,
  file: (req: any, file: any) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});

const schema: GraphQLSchema = mergeSchemas({schemas, resolvers});

const app = express();
app.use(cors());

const startServer = async () => {
  const server = new ApolloServer({schema, context: ({req, res}): any => ({req, res})});
  server.applyMiddleware({app});

  const upload = multer({ storage });

  app.post('/placely/upload-furniture-image', upload.single('image'), uploadFurnitureImage);
  app.post('/placely/upload-3d-model', upload.single('model'), upload3DModel);
  app.get('/placely/images/:imageName', fetchImage);

  app.listen({port: 4000}, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
};

startServer();

module.exports = app;

