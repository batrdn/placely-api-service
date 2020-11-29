import {createFurniture} from '../usecase/createFurniture';
import {deleteFurniture} from '../usecase/deleteFurniture';
import {getFurnitureById} from '../usecase/getFurnitureById';
import {listAll} from '../usecase/listAll';
import {listFurnitureByType} from '../usecase/listFurnitureByType';
import {updateFurniture} from '../usecase/updateFurniture';
import {listAllByPublishStatus} from '../usecase/listAllByPublishStatus';
import {publishFurniture} from '../usecase/publishFurniture';

const furnitureResolver = {
  Mutation: {
    createFurniture: createFurniture,
    deleteFurniture: deleteFurniture,
    updateFurniture: updateFurniture,
    publish: publishFurniture
  },
  Query: {
    getFurnitureById: getFurnitureById,
    listAll: listAll,
    listFurnitureByType: listFurnitureByType,
    listAllByPublishStatus: listAllByPublishStatus
  }
};

export default furnitureResolver;
