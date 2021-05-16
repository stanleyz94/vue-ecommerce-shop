// export function getByKeyword(list, keyword) {
//   const search = keyword.trim().toLowerCase();
//   if (!search.length) return list;
//   return list.filter((item) => item.name.toLowerCase().indexOf(search) > -1);
// }

// export function getByCategory(list, category) {
//   if (!category) return list;
//   return list.filter((item) => item.category == category);
// }

// export function getByType(list, type) {
//   if (!type) return list;
//   return list.filter((item) => item.type == type);
// }

// export function getByState(list, state) {
//   if (!state) return list;
//   return list.filter((item) => item.stateCode == state);
// }

// export function getByCountry(list, country) {
//   if (!country) return list;
//   return list.filter((item) => item.countryCode == country);
// }

export function getByProperty(wardrobes, filteredValues) {
  if (!filteredValues.length) {
    return wardrobes;
  } else {
    return wardrobes.filter((wardrobe) => {
      if (filteredValues.includes(wardrobe.propertyType)) {
        return wardrobe;
      }
    });
  }
}

export function getByProperty2(wardrobes, filteredValues) {
  if (!filteredValues.length) {
    return wardrobes;
  } else {
    return wardrobes.filter((wardrobe) => {
      for (let filteredValue of filteredValues) {
        if (Object.values(wardrobe).includes(filteredValue)) {
          return wardrobe;
        }
      }
    });
  }
}

// const filteredValues = {
//     propertyType: ['Test1', 'Test2'],
//     color: ['brazowy', 'bialy'],
//   };

// wardrobes.filter( wardrobe => {  })

export function getByProperty3(wardrobes, filteredValues, objectKey) {
  if (!filteredValues.length) {
    return wardrobes;
  } else {
    return wardrobes.filter((wardrobe) => {
      if (filteredValues[objectKey] === wardrobe[objectKey]) {
        return wardrobe;
      }
    });
  }
}

export function filterValues2(wardrobes, filteredValues, objectKey) {
  if (!filteredValues[objectKey] || filteredValues[objectKey].length === 0)
    return wardrobes;
  return wardrobes.filter((wardrobe) => {
    if (Array.isArray(filteredValues[objectKey])) {
      return filteredValues[objectKey].includes(wardrobe[objectKey]);
    } else {
      return filteredValues[objectKey] === wardrobe[objectKey];
    }
  });
}

export const filterValues = (wardrobes, filteredValues) => {
  const objectKeys = Object.keys(filteredValues);

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
