import { GachaItem } from '../../interface/gacha-item';

const allTypes = ['character', 'weapon', 'stigmata', 'equipment', 'fragment'];
/**
 * 将所有物品按照指定的类别进行星级排序
 * @param {GachaItem[]} items
 * @param {string[]} sortBy
 * @returns {Array}
 */
export const sortItems = function (items: GachaItem[], sortBy = allTypes) {
  allTypes.forEach(val => !sortBy.includes(val) && sortBy.push(val));
  let maxLevel = 15;
  let output = [];
  while (maxLevel > 0) {
    for (const type of sortBy) {
      output = output.concat(items.filter(item => item.type === type && item.level === maxLevel));
    }
    maxLevel --;
  }
  return output;
};
