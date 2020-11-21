import {createFurniture} from '../usecase/createFurniture';
import {deleteFurniture} from '../usecase/deleteFurniture';
import {getFurnitureById} from '../usecase/getFurnitureById';
import {listAll} from '../usecase/listAll';
import {listFurnitureByType} from '../usecase/listFurnitureByType';
import {updateFurniture} from '../usecase/updateFurniture';

const furnitureResolver = {
  Mutation: {
    createFurniture: createFurniture,
    deleteFurniture: deleteFurniture,
    updateFurniture: updateFurniture
  },
  Query: {
    getFurnitureById: getFurnitureById,
    listAll: listAll,
    listFurnitureByType: listFurnitureByType
  }
};

export default furnitureResolver;
