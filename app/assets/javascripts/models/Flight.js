var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: "/flights",

  defaults: {
    flight_no: "",
    origin: "",
    destination: "",
    date: ""
  }
})