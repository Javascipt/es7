(function (__proto__) {
  
  __proto__.includes = function (searchElement, fromIndex) {
    fromIndex = fromIndex || 0;
    while(fromIndex<0 && this.length) fromIndex += this.length;
    return !!~this.slice(fromIndex, this.length).indexOf(searchElement);
  }
  
})(Array.prototype);