function Map (iter) {
  
  // @todo : init data using the iterator when passed as argument
  
  var data = [];
  
  function indexOf (key) {
    for(var index = 0; index < data.length; index++ ) {
      if(data[index].key === key) return index;
    }
    
    return -1;
  }
  
  Object.defineProperties(Map, 'size', {
    get : function () {
      return data.length;
    }
  });
  
  Map.prototype.clear = function () {
    data = [];
  }
  
  Map.prototype.delete = function (key) {
    var index = indexOf(key);
    return (~index ? !!data.splice(index, 1) : false);
  }
  
  Map.prototype.get = function (key) {
    var index = indexOf(key);
    if(~index) return data[index].value;
  }
  
  Map.prototype.has = function (key) {
    return !!~indexOf(key);
  }
  
  Map.prototype.set = function (key, value) {
    var index = indexOf(key); 
    if(~index) {
      data[index].value = value;
    } else {
      data.push({key: key, value: value});
    }
    
    return this;
  }
  
  Map.prototype.forEach = function (callBack) {
    data.forEach(function (item) {
      callBack(item.key, item.value, this);
    }.bind(this));
  }
  
  // @todo : Defining other methodes (entries, keys, values, @@toStringTag, @@iterator )
  
}