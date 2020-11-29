import MongoFurniture, {IFurniture} from '../mongo/mongoFurniture';

export const listAllByPublishStatus = async (parent: any, args: any) => {
  return MongoFurniture.find({isPublished: args.isPublished}).then((furnitureList: IFurniture[] | null) => {
    if (furnitureList) {
      const result = [];

      for (const furniture of furnitureList) {
        result.push({
          id: furniture._id,
          name: furniture.name,
          type: furniture.type,
          price: furniture.price,
          code: furniture.code,
          count: furniture.count,
          isPublished: furniture.isPublished,
          image: furniture.image,
          description: furniture.description,
          models: furniture.models
        });
      }

      return result;
    }
  })
};
