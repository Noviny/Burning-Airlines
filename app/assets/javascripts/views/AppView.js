var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',

  render: function () {

    // var airplaneViewTemplate = $('#airplaneViewTemplate').html();
    // this.$el.html( airplaneViewTemplate );

    // var newAirplaneViewTemplate = new app.AirplanesView();
    // newAirplaneViewTemplate.render();


    var searchPageTemplate =$('#searchPageTemplate').html();
    this.$el.html( searchPageTemplate );

  }
});
