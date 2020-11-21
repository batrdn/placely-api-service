import {FurnitureType} from '../mongo/mongoFurniture';

export const map = (type: string): FurnitureType => {
  switch (type) {
    case 'CHAIR':
      return FurnitureType.CHAIR;
    case 'BED':
      return FurnitureType.BED;
    case 'TABLE':
      return FurnitureType.TABLE;
    default:
      return FurnitureType.OTHER;
  }
};
