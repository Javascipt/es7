Object.values = function (object) {
  return Object.keys(object).map(function (key) {
    return object[key];
  });
}

Object.entries = function (object) {
  return Object.keys(object).map(function (key) {
    return [key, object[key]];
  });
}

/*
  @todo : Object.getOwnPropertyDescriptor
  ref : https://goo.gl/dRtg9k
*/