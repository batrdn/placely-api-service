import mongoose from "mongoose";
import {env} from '../environment/environment';
import Grid from 'gridfs-stream';

export const fetchFile = async (req: any, res: any) => {
  const connection = mongoose.createConnection(env.mongoUri);

  connection.once('open', () => {
    const gfs = Grid(connection.db, mongoose.mongo);
    gfs.collection('uploads');

    gfs.files.findOne({metadata: req.params.fileName}, (err, file) => {
      if (!file || file.length === 0) {
        return res.sendStatus(404);
      }

      const readStream = gfs.createReadStream(file.filename);
      readStream.pipe(res);
    });
  });
};
