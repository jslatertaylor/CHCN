define(function (require) {
  var App = require('app');
  var sampleModel = require('model/sampleModel');

  return Backbone.Collection.extend({

    model: sampleModel,

    initialize: function () {

    }

  });
});
