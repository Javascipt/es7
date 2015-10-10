function Set (iter) {
  
  // @todo : init data using the iterator when passed as argument
  
  var data = [];
  
  function indexOf (value) {
    for(var index = 0; index < data.length; index++ ) {
      if(data[index] === value) return index;
    }
    
    return -1;
  }
  
  Object.defineProperties(Map, 'size', {
    get : function () {
      return data.length;
    }
  });
  
  Set.prototype.clear = function () {
    data = [];
  }
  
  Set.prototype.delete = function (value) {
    var index = indexOf(value);
    return (~index ? !!data.splice(index, 1) : false);
  }
  
  Set.prototype.has = function (value) {
    return !!~indexOf(value);
  }
  
  Set.prototype.add = function (value) {
    (!~indexOf(value)) && data.push(value);
    return this;
  }
  
  Set.prototype.forEach = function (callBack) {
    data.forEach(function (item) {
      callBack(item, item, this);
    }.bind(this));
  }
  
  // @todo : Defining other methodes (entries, values, @@iterator )
  
}