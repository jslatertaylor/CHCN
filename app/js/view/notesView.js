/**
 * Created by Jeo on 10/21/14.
 */
define(function (require) {
  var App = require('app');
  var template = require('text!../../html/notesView.html');
  var Patient = require('model/sampleModel');
  var HeaderView = require('view/header');


  return Backbone.Marionette.ItemView.extend({
    id: 'notesView',
    tagName: 'div',
    className: '',
    template: _.template(template),

    events: {

    },
    initialize: function () {
      this.model = new Patient();
      App.views.header = new HeaderView();
      App.headerRegion.show = (new HeaderView());
    }
  });
});