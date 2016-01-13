var app = app || {};

app.Flights = Backbone.Collection.extend({
  model: app.Flight,

  url: "/flights",

  initialize: function () {
    this.on('add', function (flight) {
      var flightView = new app.FlightListView({model: flight});
      flightView.render();
    });
  }
});