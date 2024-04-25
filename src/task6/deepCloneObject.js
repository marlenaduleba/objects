function deepCloneObject(obj, hash = new WeakMap()) {
  if (Object(obj) !== obj) return obj;
  if (obj instanceof Set) return new Set(obj);
  if (hash.has(obj)) return hash.get(obj);
  const result = Array.isArray(obj)
    ? []
    : obj.constructor
    ? new obj.constructor()
    : Object.create(null);
  hash.set(obj, result);
  if (obj instanceof Map)
    Array.from(obj, ([key, val]) =>
      result.set(key, deepCloneObject(val, hash))
    );
  else
    for (let key of Object.keys(obj))
      result[key] = deepCloneObject(obj[key], hash);
  return result;
}

module.exports = { deepCloneObject };
