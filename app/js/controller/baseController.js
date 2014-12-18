define(function (require) {
  var App = require('app');
  var EmptyHeaderView = ('view/emptyheaderView');
  var HeaderView = require('view/header');
  var FooterView = require('view/footer');
  var PatientListView = require('view/patientListView');
  var PatientView = require('view/patientView');
  var NotesView = require('view/notesView');
  var LoginView = require('view/loginView');


  return Backbone.Marionette.Controller.extend({

    initialize: function () {
      App.views = {};
      App.views.header = new HeaderView();
      App.views.footer = new FooterView();
      App.headerRegion.show(App.views.header);
      App.footerRegion.show(App.views.footer);
    },
    showIndex: function () {
      App.headerRegion.show(new HeaderView());
      App.contentRegion.show(new LoginView());
    },
    showAbout: function () {

    },
    showPatientList: function () {
      App.headerRegion.show(new EmptyHeaderView());
      App.contentRegion.show(new PatientListView());
    },
    showPatient: function () {
        App.contentRegion.show(new PatientView());
      },
    showNotes: function () {
          App.contentRegion.show(new NotesView());
        }


  });
});
