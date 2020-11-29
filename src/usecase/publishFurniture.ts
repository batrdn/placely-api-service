import MongoFurniture, {IFurniture} from '../mongo/mongoFurniture';

export const publishFurniture = async (parent: any, args: any) => {
  console.log(args);
  return MongoFurniture.findOne({_id: args.id}).then((furniture: IFurniture | null) => {
    console.log(furniture);
    if (furniture) {
      furniture.image = args.image;
      furniture.models = args.models;
      furniture.isPublished = true;
      furniture.save();
      return true;
    }
    return false;
  });
};
