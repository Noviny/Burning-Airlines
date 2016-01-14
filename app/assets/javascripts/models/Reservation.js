var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: function () {
    var url = '/flights/' +flight.id+ '/reservations.json'
    console.log(url);
    return url;
  },

  defaults: {
    flight_id: "blank",
    airplane_id: "blank",
    seat: "blank"
  }
});