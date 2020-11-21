import mongoose from "mongoose";
import {env} from '../environment/environment';
import Grid from 'gridfs-stream';

export const fetchImage = async (req: any, res: any) => {
  const connection = mongoose.createConnection(env.mongoUri);

  connection.once('open', () => {
    const gfs = Grid(connection.db, mongoose.mongo);
    gfs.collection('uploads');

    gfs.files.findOne({filename: req.params.imageName}, (err, file) => {
      if (!file || file.length === 0) {
        return res.sendStatus(404);
      }

      if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
      } else {
        res.sendStatus(400);
      }
    });
  });
};
