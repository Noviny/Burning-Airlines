var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: "/flights",

  defaults: {
    flight_no: "blank",
    origin: "blank",
    destination: "blank",
    date: "blank",
    airplane_id: "blank"
  }
})