var a;
a = function () {
  return this;
}();
try {
  a = a || new Function("return this")();
} catch (t) {
  if (typeof window == "object") {
    a = window;
  }
}
module.exports = a;