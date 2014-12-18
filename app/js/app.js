define(['jquery', 'underscore', 'backbone', 'marionette', 'bootstrap'], function () {

  var App = new Backbone.Marionette.Application();

  App.name = 'CHCN MD-Consult';
  App.version = '1.0.0';

  App.addRegions({
    contentRegion: '#content',
    headerRegion: 'header',
    footerRegion: 'footer'
  });

  App.vent.on('route:startup', function () {
    Backbone.history.start();
  });

  return App;

});
