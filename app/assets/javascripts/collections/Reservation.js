var app = app || {};

app.Reservations = Backbone.Collection.extend({
  model: app.Reservation,

  url: function () {
    var url = '/flights/' +flight.id+ '/reservations.json';
    return url;
  },

  initialize: function () {
  }
});
