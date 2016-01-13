var app = app || {};


app.FlightView = Backbone.View.extend({
  tagName: "li",

  render: function () {
    console.log("rendered")
    var content = this.model.get("content");
    this.$el.text( content );
    this.$el.prependTo("#flights")
  }
})