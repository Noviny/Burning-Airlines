var app = app || {};

app.Reservations = Backbone.Collection.extend({
  model: app.Reservation,

  url: function () {
    console.log("THis translates to", document.URL);
    var url = '/flights/' +flight.id+ '/reservations.json';
    console.log('URL= ' ,url);
    return url;
  },

  initialize: function () {

  }
});
