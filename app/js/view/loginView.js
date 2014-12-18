/**
 * Created by Jeo on 10/20/14.
 */
define(function (require) {
  var App = require('app');
  var template = require('text!../../html/loginView.html');
  var PatientListView = require('view/patientListView');
  var Patient = require('model/sampleModel');
  var HeaderView = require('view/header');



  return Backbone.Marionette.ItemView.extend({
    id: 'loginView',
    tagName: 'div',
    className: '',
    template: _.template(template),

    events: {
      'click #login': 'patientListView'
    },

    patientListView: function () {
      //App.headerRegion.destroy();
      App.contentRegion.show(new PatientListView());
      //App.views.header.changeHeader('Pending Requests');
    },

    initialize: function () {
      App.views.header = new HeaderView();
      //this.model = new Patient();
    }

  });
});
