var app = app || {};

app.FlightListView = Backbone.View.extend({
  el: "#flightlist",


  render: function () {
    console.log("rendered")

    var FlightViewTemplater = _.template( $("#listFlightTemplate").html() );
    this.$el.prepend(FlightViewTemplater( this.model.toJSON() ) );

  }
});