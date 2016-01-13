var app = app || {};

app.MyFlightsView = Backbone.View.extend ({
  el: "#main",

  render: function (){
    var myFlightsView = $('#myFlightsViewTemplate').html();
    this.$el.html( myFlightsView );
  }
});

