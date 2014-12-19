define(function (require) {
  var App = require('app');
  var template = require('text!../../html/emptyHeaderView.html');

  return Backbone.Marionette.ItemView.extend({
    id: 'header',
    tagName: 'div',
    className: '',
    template: _.template(template),
    onShow: function () {
      $('#content').css('padding-top', '0');
    }

  });
});