import MongoFurniture, {IFurniture} from '../mongo/mongoFurniture';
import {map} from '../util/mapper';

export const updateFurniture = async (parent: any, args: any) => {
  return MongoFurniture.findOne({_id: args.id}).then((furniture: IFurniture | null) => {
    if (furniture) {
      furniture.name = args.name;
      furniture.type = map(args.type);
      furniture.image = args.image;
      furniture.description = args.description;

      furniture.save().then((furniture: IFurniture) => {
        return {
          id: furniture._id,
          name: furniture.name,
          type: furniture.type,
          image: furniture.image,
          isPublished: furniture.isPublished,
          description: furniture.description,
          model: furniture.model3D
        }
      });
    }
  });
};
