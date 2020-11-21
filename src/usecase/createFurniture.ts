import MongoFurniture, {IFurniture} from '../mongo/mongoFurniture';
import {map} from '../util/mapper';

export const createFurniture = async (parent: any, args: any) => {
  const newFurniture: IFurniture = new MongoFurniture({
    name: args.name,
    type: map(args.type),
    image: args.image,
    isPublished: false,
    description: args.description
  });

  return await newFurniture.save().then((furniture: IFurniture | null) => {
    if (furniture) {
      return {
        id: furniture._id,
        name: furniture.name,
        type: furniture.type,
        image: furniture.image,
        isPublished: furniture.isPublished,
        description: furniture.description,
        model: furniture.model3D
      }
    }
  });
};


