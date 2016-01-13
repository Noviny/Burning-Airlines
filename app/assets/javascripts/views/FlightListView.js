var app = app || {};


app.FlightListView = Backbone.View.extend({
  tagName: "li",

  render: function () {
    console.log("rendered")
    var name = this.model.get("flight_no");
    this.$el.text( name );
    this.$el.prependTo("#flights")
  }
})