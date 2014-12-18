/**
 * Created by Jeo on 10/17/14.
 */
/**
 * Created by Jeo on 10/16/14.
 */
define(function (require) {
    var App = require('app');
    var template = require('text!../../html/patientListView.html');
    var PatientView = require('view/patientView');
    var Patient = require('model/sampleModel');



    return Backbone.Marionette.ItemView.extend({
        id: 'patientListView',
        tagName: 'div',
        className: '',
        template: _.template(template),

        events: {
            'click #next': 'patientView'
          },
          patientView: function () {
            App.contentRegion.show(new PatientView());
            App.contentRegion.changeHeader('Patient Details');
          },
          initialize: function () {
            this.model = new Patient();
          }

        });
  });
