var app = app || {};

app.Flights = Backbone.Collection.extend({
  model: app.Flight,

  url: "/flights",

  initialize: function () {
    this.on('add', function (flight) {
      console.log("New flight added");
      var flightView = new FlightsView({model: flight});
      flightView.render();
    });
  }
})