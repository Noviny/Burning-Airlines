var app = app || {};


app.FlightView = Backbone.View.extend({
  tagName: "li",

  render: function () {
    console.log("rendered")
    var name = this.model.get("name");
    this.$el.text( "placeholder" );
    this.$el.prependTo("#flights")
  }
})