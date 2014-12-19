define(function (require) {
  var App = require('app');
  var EmptyHeaderView = require('view/emptyheader');
  var HeaderView = require('view/header');
  var FooterView = require('view/footer');
  var PatientListView = require('view/patientListView');
  var PatientView = require('view/patientView');
  var LoginView = require('view/loginView');
  var ApproveView = require('view/approveView');
  var DenyView = require('view/denyView');
  var PartialView = require('view/partialView');
  var ClarifyView = require('view/clarifyView');


  return Backbone.Marionette.Controller.extend({

    initialize: function () {
      App.views = {};
      App.views.header = new HeaderView();
      App.views.footer = new FooterView();
      App.views.emptyheader = new EmptyHeaderView();
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
      App.headerRegion.show(new HeaderView());
      App.contentRegion.show(new PatientListView());
      App.views.header.changeHeader('Pending Requests');
    },
    showPatient: function () {
      App.headerRegion.show(new HeaderView());
      App.contentRegion.show(new PatientView());
      App.views.header.changeHeader('Patient Details');

    },
    showApprove: function () {
      App.headerRegion.show(new HeaderView());
      App.contentRegion.show(new ApproveView());
      App.views.header.changeHeader('Approve');
    },
    showDeny: function () {
      App.headerRegion.show(new HeaderView());
      App.contentRegion.show(new DenyView());
      App.views.header.changeHeader('Deny');
    },
    showPartial: function () {
      App.headerRegion.show(new HeaderView());
      App.contentRegion.show(new PartialView());
      App.views.header.changeHeader('Partial');
    },
    showClarify: function () {
      App.headerRegion.show(new HeaderView());
      App.contentRegion.show(new ClarifyView());
      App.views.header.changeHeader('Clarify');
    }



    });
});
