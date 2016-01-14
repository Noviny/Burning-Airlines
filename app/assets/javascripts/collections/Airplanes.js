var app = app || {};

app.Airplanes = Backbone.Collection.extend({
  model: app.Airplane,

  url: "/airplanes",

  initialize: function () {
  }
});