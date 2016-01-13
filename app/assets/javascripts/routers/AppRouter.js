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
    var plane = new app.Airplane({id: flight.get('airplane_id')});
    // console.log('fetching', flight.airplane_id, plane);
    plane.fetch().done(function () {
      // debugger;
      flight.set('rows', plane.get('rows'));
      flight.set('columns', plane.get('columns'));
      var flightView = new app.FlightView({model:flight});
      flightView.render();
    })

  },

  myFlightsView: function () {
    view = new app.MyFlightsView();
    view.render();
  },


});