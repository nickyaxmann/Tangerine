// Generated by CoffeeScript 1.4.0
var NavigationView,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

NavigationView = (function(_super) {

  __extends(NavigationView, _super);

  function NavigationView() {
    this.handleMenu = __bind(this.handleMenu, this);

    this.initialize = __bind(this.initialize, this);

    this.calcWhoAmI = __bind(this.calcWhoAmI, this);
    return NavigationView.__super__.constructor.apply(this, arguments);
  }

  NavigationView.prototype.el = '#navigation';

  NavigationView.prototype.events = Modernizr.touch ? {
    'touchstart div#logout_link': 'logout',
    'touchstart button': 'submenuHandler',
    'touchstart #corner_logo': 'logoClick',
    'touchstart #enumerator': 'enumeratorClick'
  } : {
    'click div#logout_link': 'logout',
    'click button': 'submenuHandler',
    'click #corner_logo': 'logoClick',
    'click #enumerator': 'enumeratorClick'
  };

  NavigationView.prototype.calcWhoAmI = function() {
    return this.whoAmI = Tangerine.settings.contextualize({
      server: this.text.user,
      mobile: this.text.enumerator,
      klass: this.text.teacher
    });
  };

  NavigationView.prototype.enumeratorClick = function() {
    if (this.user.isAdmin()) {
      return Tangerine.router.navigate("account", true);
    }
  };

  NavigationView.prototype.logoClick = function() {
    if (this.user.isAdmin()) {
      Tangerine.activity = "";
      return this.router.navigate('', true);
    } else {
      if (Tangerine.activity === "assessment run") {
        if (confirm(this.text.incomplete_main)) {
          Tangerine.activity = "";
          return this.router.navigate('', true);
        }
      } else {
        return this.router.navigate('', true);
      }
    }
  };

  NavigationView.prototype.logout = function() {
    if (this.user.isAdmin() || Tangerine.settings.get("context") === "server") {
      Tangerine.activity = "";
      return Tangerine.user.logout();
    } else {
      if (Tangerine.activity === "assessment run") {
        if (confirm(this.text.incomplete_logout)) {
          Tangerine.activity = "";
          return Tangerine.user.logout();
        }
      } else {
        if (confirm(this.text.confirm_logout)) {
          Tangerine.activity = "";
          return Tangerine.user.logout();
        }
      }
    }
  };

  NavigationView.prototype.onClose = function() {};

  NavigationView.prototype.initialize = function(options) {
    this.i18n();
    this.render();
    this.user = options.user;
    this.router = options.router;
    this.calcWhoAmI();
    this.router.on('all', this.handleMenu);
    return this.user.on('login logout', this.handleMenu);
  };

  NavigationView.prototype.i18n = function() {
    return this.text = {
      "logout": t('NavigationView.button.logout'),
      "user": t('NavigationView.label.user'),
      "teacher": t('NavigationView.label.teacher'),
      "enumerator": t('NavigationView.label.enumerator'),
      "student_id": t('NavigationView.label.student_id'),
      "version": t('NavigationView.label.version'),
      "account": t('NavigationView.help.account'),
      "logo": t('NavigationView.help.logo'),
      "incomplete_logout": t("NavigationView.message.incomplete_logout"),
      "confirm_logout": t("NavigationView.message.logout_confirm"),
      "incomplete_main": t("NavigationView.message.incomplete_main")
    };
  };

  NavigationView.prototype.submenuHandler = function(event) {
    var _base;
    return typeof (_base = vm.currentView).submenuHandler === "function" ? _base.submenuHandler(event) : void 0;
  };

  NavigationView.prototype.closeSubmenu = function() {
    return this.$el.find("main_nav").empty();
  };

  NavigationView.prototype.render = function() {
    this.$el.html("    <img id='corner_logo' src='images/corner_logo.png' title='" + this.text.logo + "'>    <div id='logout_link'>" + this.text.logout + "</div>    <div id='enumerator_box'>      <span id='enumerator_label' title='" + this.text.account + "'>" + this.whoAmI + "</span>      <div id='enumerator'>" + (Tangerine.user.name || "") + "</div>    </div>    <div id='current_student'>      " + this.text.student_id + "      <div id='current_student_id'></div>    </div>    <div id='version'>      " + this.text.version + " <br>      <span id='version-uuid'>" + Tangerine.version + "</span><br>    </div>    ");
    $("body").ajaxStart(function() {
      return $("#corner_logo").attr("src", "images/spin_orange.gif");
    });
    return $("body").ajaxStop(function() {
      return $("#corner_logo").attr("src", "images/corner_logo.png");
    });
  };

  NavigationView.prototype.setStudent = function(id) {
    if (id === "") {
      this.$el.find('#current_student_id').fadeOut(250, function(a) {
        return $(a).html("");
      });
      return this.$el.find("#current_student").fadeOut(250);
    } else {
      return this.$el.find('#current_student_id').html(id).parent().fadeIn(250);
    }
  };

  NavigationView.prototype.handleMenu = function(event) {
    var _this = this;
    this.calcWhoAmI();
    $("#enumerator_label").html(this.whoAmI);
    $('#enumerator').html(this.user.name);
    if (~window.location.toString().indexOf("name=")) {
      this.$el.find("#logout_link").hide();
    } else {
      this.$el.find("#logout_link").show();
    }
    return this.user.verify({
      isRegistered: function() {
        _this.render();
        return $('#navigation').fadeIn(250);
      },
      isUnregistered: function() {
        _this.render();
        return $('#navigation').fadeOut(250);
      }
    });
  };

  return NavigationView;

})(Backbone.View);
