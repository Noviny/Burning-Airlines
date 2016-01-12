var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    '/myflights': 'myFlights',
    '/flights/:id': 'viewFlight'
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

  viewFlight: function () {
    console.log('view flight details')
    var flightView = new app.FlightView();
    flightView.render();
  },


})