var app = app || {};

app.Flights = Backbone.Collection.extend({
  model: app.Flight,

  url: "/flights",

  initialize: function () {
    //Run on creating flight goes here
  }
})