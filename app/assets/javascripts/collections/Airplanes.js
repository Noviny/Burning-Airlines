var app = app || {};

app.Airplanes = Backbone.Collection.extend({
  model: app.Airplane,

  url: "/airplanes",

  initialize: function () {
    this.on('add', function (airplane) {
      console.log("New Airplane added");
      var airplaneView = new AirplanesView({model: airplane});
      airplaneView.render();
    });
  }
})