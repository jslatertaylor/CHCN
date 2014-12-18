/**
 * Created by Jeo on 10/17/14.
 */
/**
 * Created by Jeo on 10/16/14.
 */
define(function (require) {
    var App = require('app');
    var template = require('text!../../html/patientListView.html');



    return Backbone.Marionette.ItemView.extend({
        id: 'patientListView',
        tagName: 'div',
        className: '',
        template: _.template(template),

        events: {

          },
          initialize: function () {

          }

        });
  });
