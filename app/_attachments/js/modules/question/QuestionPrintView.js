// Generated by CoffeeScript 1.3.3
var QuestionPrintView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

QuestionPrintView = (function(_super) {

  __extends(QuestionPrintView, _super);

  function QuestionPrintView() {
    return QuestionPrintView.__super__.constructor.apply(this, arguments);
  }

  QuestionPrintView.prototype.className = "question buttonset";

  QuestionPrintView.prototype.initialize = function(options) {
    this.model = options.model;
    this.answer = {};
    this.name = this.model.escape("name").replace(/[^A-Za-z0-9_]/g, "-");
    this.type = this.model.get("type");
    this.options = this.model.get("options");
    this.notAsked = options.notAsked;
    this.isObservation = options.isObservation;
    if (this.model.get("skippable") === "true" || this.model.get("skippable") === true) {
      this.isValid = true;
      this.skipped = true;
    } else {
      this.isValid = false;
      this.skipped = false;
    }
    if (this.notAsked === true) {
      this.isValid = true;
      return this.updateResult();
    }
  };

  QuestionPrintView.prototype.update = function(event) {
    this.updateResult();
    this.updateValidity();
    return this.trigger("answer", event, this.model.get("order"));
  };

  QuestionPrintView.prototype.render = function() {
    var checkOrRadio, html, i, option, _i, _len, _ref;
    this.$el.attr("id", "question-" + this.name);
    if (!this.notAsked) {
      html = "<div class='error_message'></div><div class='prompt'>" + (this.model.get('prompt')) + "</div>      <div class='hint'>" + (this.model.get('hint') || "") + "</div>";
      if (this.type === "open") {
        if (this.model.get("multiline")) {
          html += "<div><textarea id='" + this.cid + "_" + this.name + "' data-cid='" + this.cid + "'></textarea></div>";
        } else {
          html += "<div><input id='" + this.cid + "_" + this.name + "' data-cid='" + this.cid + "'></div>";
        }
      } else {
        checkOrRadio = this.type === "multiple" ? "checkbox" : "radio";
        _ref = this.options;
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
          option = _ref[i];
          html += "            <label for='" + this.cid + "_" + this.name + "_" + i + "'>" + option.label + "</label>            <input id='" + this.cid + "_" + this.name + "_" + i + "' class='" + this.cid + "_" + this.name + "'  data-cid='" + this.cid + "' name='" + this.name + "' value='" + option.value + "' type='" + checkOrRadio + "'>          ";
        }
      }
      if (this.isObservation) {
        html += "<img src='images/icon_scroll.png' class='icon autoscroll_icon' data-cid='" + this.cid + "'>";
      }
      this.$el.html(html);
    } else {
      this.$el.hide();
    }
    return this.trigger("rendered");
  };

  return QuestionPrintView;

})(Backbone.View);
