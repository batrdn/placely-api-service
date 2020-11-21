import MongoFurniture, {IFurniture} from '../mongo/mongoFurniture';

export const listFurnitureByType = async (parent: any, args: any) => {
  return MongoFurniture.find({type: args.type}).then((furnitureList: IFurniture[] | null) => {
    if (furnitureList) {
      const result = [];

      for (const furniture of furnitureList) {
        result.push({
          id: furniture._id,
          name: furniture.name,
          type: furniture.type,
          isPublished: furniture.isPublished,
          image: furniture.image,
          description: furniture.description,
          model: furniture.model3D
        });
      }

      return result;
    }
  })
};
