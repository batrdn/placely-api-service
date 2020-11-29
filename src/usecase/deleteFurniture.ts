import MongoFurniture from '../mongo/mongoFurniture';

export const deleteFurniture = (parent: any, args: any) => {
  return MongoFurniture.remove({_id: args.id}).then(() => true);
};
