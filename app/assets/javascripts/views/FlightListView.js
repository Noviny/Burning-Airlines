var app = app || {};

app.FlightListView = Backbone.View.extend({
  el: "#flightlist",


  render: function () {
    var FlightViewTemplater = _.template( $("#listFlightTemplate").html() );
    this.$el.prepend(FlightViewTemplater( this.model.toJSON() ) );

  }
});