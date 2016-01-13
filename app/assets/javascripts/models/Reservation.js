var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: "/reservations",

  defaults: {
    flight_id: "blank",
    airplane_id: "blank",
    seat: "blank"
  }
});