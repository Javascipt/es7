(function (__proto__) {
  
  __proto__.toJSON = function () {
    var iter = this.entries()
      , obj  = {}
      , data = {};
    
    while(!(data = iter.next()).done) {
      obj[data.value[0]] = (data.value[1] && data.value[1].toJSON) ? data.value[1].toJSON() : data.value[1];
    }
    
    return obj;
  }
  
})(Set.prototype);