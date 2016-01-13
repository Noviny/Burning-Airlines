var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',

  render: function () {



    var searchPageTemplate = $('#searchPageTemplate').html();
    this.$el.html( searchPageTemplate );

  }
});
