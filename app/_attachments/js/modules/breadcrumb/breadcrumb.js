var Breadcrumb,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Breadcrumb = (function() {

  function Breadcrumb(router) {
    this.update = __bind(this.update, this);    this.locations = [];
    this.limit = 10;
    this.router = router;
    this.router.on("all", this.update);
  }

  Breadcrumb.prototype.update = function(location) {
    var split;
    split = location.split(":");
    this.locations.push(split[Math.min(0, split.length - 1)]);
    if (this.locations.length > 10) return this.locations.shift();
  };

  return Breadcrumb;

})();