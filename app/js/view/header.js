define(function (require) {
  var App = require('app');
  var template = require('text!../../html/header.html');
  var Patient = require('model/sampleModel');


  return Backbone.Marionette.ItemView.extend({
    id: 'header',
    tagName: 'div',
    className: 'header-fixed',
    template: _.template(template),

    serializeData: function () {
      return {
        appName: App.name
      };
    },

    events: {
      'click .menu-toggle, .menu-overlay, .menu a': 'handleToggleMenu'
    },

    menuOpen: false,
    handleToggleMenu: function () {
      this.$el.find('.menu').toggleClass('on');
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen) { this.$el.find('.menu a')[0].focus(); }
    },
    changeHeader: function (titleString) {
        var title = $('.title h1');
        title.text(titleString);
      },
    initialize: function () {
      this.model = new Patient();
    }

  });
});
