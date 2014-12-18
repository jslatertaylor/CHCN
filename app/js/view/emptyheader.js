/**
 * Created by Jeo on 12/18/14.
 */
define(function (require) {
  var App = require('app');
  var template = require('text!../../html/emptyheaderView.html');


  return Backbone.Marionette.ItemView.extend({
    id: 'emptyheader',
    tagName: 'div',
    className: '',
    template: _.template(template),

    events: {

    },
    initialize: function () {

    }
  });
});