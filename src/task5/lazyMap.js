function lazyMap(array, mappingFunction) {
  let index = 0;
  return {
    next: function () {
      if (index < array.length) {
        const value = mappingFunction(array[index]);
        index++;
        return { value, done: false };
      } else {
        return { done: true };
      }
    },
  };
}

module.exports = lazyMap;
