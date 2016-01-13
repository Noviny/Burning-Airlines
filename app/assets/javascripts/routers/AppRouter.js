var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'myflights': 'myFlights',
    'flights/:id': 'viewFlight'
  },

  index: function () {
    console.log('index page')
    var appView = new app.AppView();
    appView.render();
  },

  myFlights: function () {
    console.log('view my flights page')
    var flightsView = new app.FlightsView();
    flightsView.render();
  },

  viewFlight: function (id) {
    flight = app.flights.get(id);
    var flightView = new app.FlightView({model:flight});
    flightView.render();
  },


})