require.config({
  paths: {
    //Libraries
    'bootstrap': '../lib/sass-bootstrap/dist/js/bootstrap',
    'jquery': '../lib/jquery/dist/jquery',
    'underscore': '../lib/underscore/underscore',
    'backbone': '../lib/backbone/backbone',
    'backbone.wreqr': '../lib/backbone.wreqr/lib/backbone.wreqr',
    'backbone.babysitter': '../lib/backbone.babysitter/lib/backbone.babysitter',
    'marionette': '../lib/marionette/lib/core/amd/backbone.marionette',

    //Plugins
    'text': '../lib/requirejs-text/text'
  },
  shim: {
    'bootstrap': {
      deps: ['jquery'],
      exports: 'jquery'
    }
  }
});

require(['app', 'router'], function (App, Router) {
  App.addInitializer(function () {
    this.router = new Router();
    this.vent.trigger('route:startup');
  });
  App.start();
});
