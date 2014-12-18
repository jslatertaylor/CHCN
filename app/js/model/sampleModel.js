define(function (require) {
  var App = require('app');

  return Backbone.Model.extend({
    url: '../../json/patient.json',
    defaults: {

    },

    initialize: function () {
      this.fetch({
        url: this.url,
        dataType: 'json',
        reset: true,
        async: false
      });
    }

  });
});
