/**
 * Created by Jeo on 10/20/14.
 */
define(function (require) {
  var App = require('app');
  var template = require('text!../../html/patientView.html');
  var Patient = require('model/sampleModel');
  var NotesView = require('view/notesView');
  var HeaderView = require('view/header');


  return Backbone.Marionette.ItemView.extend({
    id: 'patientView',
    tagName: 'div',
    className: '',
    template: _.template(template),

    events: {
      'click': 'submit'
    },
    initialize: function () {
      this.model = new Patient();
      //App.views.header = new HeaderView();
    },
    notesView: function () {
      App.contentRegion.show(new NotesView());
      App.headerRegion.show = (new HeaderView());
      App.views.header.changeHeader('Doe, Jane');
    }

  });
});
