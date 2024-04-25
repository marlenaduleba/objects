function callback(message) {
  console.log(message);
}

function observeObject(obj, callback) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      callback(`Getting property ${property}`);
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (!Object.getOwnPropertyDescriptor(target, property).writable) {
        callback(`Cannot set property ${property} because it is non-writable.`);
        return false;
      }
      callback(`Setting property ${property} to ${value}`);
      return Reflect.set(target, property, value, receiver);
    },
  });
}

module.exports = {
  callback,
  observeObject,
};
