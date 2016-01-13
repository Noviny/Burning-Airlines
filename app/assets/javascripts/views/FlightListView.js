var app = app || {};


app.FlightListView = Backbone.View.extend({
  el: "#flightlist",

  events: {
    'click .flight_number': 'showFlight'
  },

  showFlight: function () {
    console.log(this.model)
    app.router.navigate('flights/' + this.model.get('id'), true);
  },

  render: function () {
    console.log("rendered")
    // var flight_no = this.model.get("flight_no");
    // var origin = this.model.get("origin");
    // var destination = this.model.get("destination");
    // var date = this.model.get("date");
    // this.$el.text( name );
    // this.$el.prependTo("#flights")

    var FlightViewTemplater = _.template( $("#listFlightTemplate").html() );
    this.$el.prepend(FlightViewTemplater( this.model.toJSON() ) );

  }
});