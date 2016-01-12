// Script lets you use {{ }} as alt erb tags
_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
  interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};



var app = app || {};




$(document).ready(function () {
  // app.airlines = new app.Secrets();
  // app.airlines.fetch()

  //Create an interval that fetches every so often

  // setInterval(function () {
  //   app.secrets.fetch();
  // }, 1000);

  app.router = new app.AppRouter();
  Backbone.history.start();
});