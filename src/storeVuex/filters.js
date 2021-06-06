export const filterByValues = (wardrobes, filteredValues) => {
  const objectKeys = Object.keys(filteredValues).filter(
    (key) => key !== 'price' && key !== 'sortedValue'
  );

  const result = wardrobes.filter((wardrobe) => {
    return objectKeys.every((objectKey) => {
      if (
        !filteredValues[objectKey] ||
        filteredValues[objectKey].length === 0
      ) {
        return wardrobes;
      } else if (Array.isArray(filteredValues[objectKey])) {
        return filteredValues[objectKey].includes(wardrobe[objectKey]);
      } else {
        return filteredValues[objectKey] === wardrobe[objectKey];
      }
    });
  });
  return result;
};

export const filterByPrice = (wardrobes, filteredValues) => {
  const filtersAsNumbers = {
    '0 - 499 zł': [0, 499],
    '500 - 999 zł': [500, 999],
    '1 000 - 1 499 zł': [1000, 1499],
    '1 500 - 1 999 zł': [1500, 1999],
    '2 000+ zł': [2000, 10000],
  };

  return wardrobes.filter((wardrobe) => {
    if (filteredValues.price.length < 1) {
      return wardrobe;
    } else {
      let result;
      Object.keys(filtersAsNumbers)
        .filter((priceRange) => filteredValues.price.includes(priceRange))
        .filter((priceRangeFiltered) => {
          let min = filtersAsNumbers[priceRangeFiltered][0];
          let max = filtersAsNumbers[priceRangeFiltered][1];
          if (wardrobe.price >= min && wardrobe.price <= max) {
            result = wardrobe;
          }
        });
      return result;
    }
  });
};

export const sortItems = (wardrobes, filteredValues) => {
  const sortedResult = wardrobes.sort((a, b) => {
    switch (filteredValues.sortedValue) {
      case 'Od najniższej ceny':
        return a.price - b.price;
      case 'Od najwyższej ceny':
        return b.price - a.price;
      case 'Najnowszy':
        return b.newest - a.newest;
      case 'Ocena':
        return b.rating - a.rating;
      case 'Nazwa':
        return a.name < b.name ? -1 : 1;
      case 'Szerokość':
        return b.width - a.width;
      case 'Wysokość':
        return b.height - a.height;
      case 'Głębokość':
        return b.depth - a.depth;
      default:
        return wardrobes;
    }
  });
  return sortedResult;
};

export const resetValues = (current) => {
  for (let key in current) {
    let propType = typeof current[key];
    switch (propType) {
      case 'number':
        current[key] = '';
        break;
      case 'string':
        current[key] = '';
        break;
      case 'boolean':
        current[key] = false;
        break;
      case 'object':
        current[key] = [];
        break;
    }
  }
  return current;
};
