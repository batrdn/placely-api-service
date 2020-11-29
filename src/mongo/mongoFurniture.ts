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
  price: number;
  code: string;
  count: number,
  image: string;
  isPublished: boolean;
  description: string;
  models: string[];
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
  price: {
    type: Number,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  count: {
    type: Number,
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
  image: {
    type: String,
    required: false
  },
  models: {
    type: Array,
    required: false
  }
});

export default mongoose.model<IFurniture>('MongoFurniture', FurnitureSchema);

