// @flow

const getItemType = (item: Object): string => {
  if (item.style) {
    if (Array.isArray(item.style)) {
      return item.style.map((i: string): string => i.toLowerCase());
    }
    return [ item.style.toLowerCase() ];
  }
  return [];
};

export default getItemType;
