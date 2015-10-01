(function (__proto__) {
  
  __proto__.lpad = function (padLength, input) {
    input = input || ' ';
    return (this.toString() + input.repeat((padLength / input.length + 1) | 0)).slice(0, padLength);
  }
  
  __proto__.padRight = function (padLength, input) {
    input = input || ' ';
    return input.repeat(((padLength - this.length) / input.length + 1) | 0).slice(0, padLength - this.length) + this.toString() 
  }
  
  __proto__.trimLeft = function () {
    return this.replace(/^[\s\t\n]*|$/g, '');
  }
  
  __proto__.trimRight = function () {
    return this.replace(/^|[\s\t\n]*$/g, '');
  }
  
  __proto__.at = function (index) {
    return this.toString()[index]; 
  }
  
})(String.prototype);