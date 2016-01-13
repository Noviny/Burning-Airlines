var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var flightsViewTemplate = _.template($('#flightViewTemplate').html());
    this.$el.html(flightsViewTemplate(this.model.toJSON()));
  }
});
