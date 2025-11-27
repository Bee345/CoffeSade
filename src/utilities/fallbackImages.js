// fallbackImages.js.
// This took me a while b4 i was able to figure out this method, because ion want to start downloading images on my local-space for these 
export const getFallbackCategoryImage = (category) => {
  const keyword = category.toLowerCase().replace(/ /g, "-");
  return `https://source.unsplash.com/600x400/?${keyword}`;
};

export const getFallbackItemImage = (itemName) => {
  const keyword = itemName.toLowerCase().replace(/ /g, "-");
  return `https://source.unsplash.com/600x400/?${keyword}`;
};
