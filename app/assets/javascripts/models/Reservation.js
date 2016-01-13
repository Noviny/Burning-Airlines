var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: function() {
    return this.document.url() + '/reservations';
  },



  defaults: {
    flight_id: "blank",
    airplane_id: "blank",
    seat: "blank"
  }
});