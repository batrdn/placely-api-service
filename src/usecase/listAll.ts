import MongoFurniture, {IFurniture} from '../mongo/mongoFurniture';

export const listAll = async (parent: any, args: any) => {
  return MongoFurniture.find().then((furnitureList: IFurniture[] | null) => {
    if (furnitureList) {
      const result = [];

      for (const furniture of furnitureList) {
        result.push({
          id: furniture._id,
          name: furniture.name,
          type: furniture.type,
          image: furniture.image,
          isPublished: furniture.isPublished,
          description: furniture.description,
          model: furniture.model3D
        })
      }

      return result;
    }
  })
};
