import MongoFurniture, {IFurniture} from '../mongo/mongoFurniture';
import {map} from '../util/mapper';

export const createFurniture = async (parent: any, args: any) => {
  const newFurniture: IFurniture = new MongoFurniture({
    name: args.name,
    type: map(args.type),
    price: args.price,
    code: args.code,
    count: args.count,
    isPublished: false,
    description: args.description
  });

  return await newFurniture.save().then((furniture: IFurniture | null) => {
    if (furniture) {
      return {
        id: furniture._id,
        name: furniture.name,
        type: furniture.type,
        code: furniture.code,
        count: furniture.count,
        price: furniture.price,
        isPublished: furniture.isPublished,
        description: furniture.description,
        models: furniture.models
      }
    }
  });
};


