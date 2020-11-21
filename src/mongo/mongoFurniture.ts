import {Document, Schema} from 'mongoose';
import * as mongoose from 'mongoose';

export enum FurnitureType {
  CHAIR = 'CHAIR',
  BED = 'BED',
  TABLE = 'TABLE',
  OTHER = 'OTHER'
}

export interface IFurniture extends Document{
  name: string;
  type: FurnitureType;
  image: string;
  isPublished: boolean;
  description: string;
  model3D: string;
}

const FurnitureSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: FurnitureType,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  isPublished: {
    type: Boolean,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  model3D: {
    type: String,
    required: false
  }
});

export default mongoose.model<IFurniture>('MongoFurniture', FurnitureSchema);

