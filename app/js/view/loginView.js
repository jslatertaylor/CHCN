/**
 * Created by Jeo on 10/20/14.
 */
define(function (require) {
  var App = require('app');
  var template = require('text!../../html/loginView.html');

  return Backbone.Marionette.ItemView.extend({
    id: 'loginView',
    tagName: 'div',
    className: '',
    template: _.template(template),
    onLoad: function () {
      $('#content').css('padding-top', '20');
    },
    initialize: function () {

    }

  });
});
