import MongoFurniture, {IFurniture} from '../mongo/mongoFurniture';

export const getFurnitureById = async (parent: any, args: any) => {
  return MongoFurniture.findOne({_id: args.id}).then((furniture: IFurniture | null) => {
    if (furniture) {
      return {
        id: furniture._id,
        name: furniture.name,
        type: furniture.type,
        image: furniture.image,
        isPublished: furniture.isPublished,
        description: furniture.description,
        models: furniture.models
      }
    }

    return null;
  });
};
