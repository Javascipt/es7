(function (__proto__) {
  
  __proto__.lpad = function (padLength, input) {
    input = input || ' ';
    return (this.toString() + input.repeat((padLength / input.length + 1) | 0)).slice(0, padLength);
  }
  
})(String.prototype);