var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',

  events: {
    'keyup': 'updateSearch'
  },

  // events: {
  //   'click .flight_number': 'showFlight'
  // },

  // showFlight: function () {
  //   console.log()
  //   app.router.navigate('flights/' + this.model.get('id'), true);
  // },


  updateSearch: function () {
    search = $('#searchfield').val();
    var selectedVal = "";
    var selected = $("input[type='radio'][name='type']:checked")
    if (selected.length > 0 ) {
      selectedVal = selected.val();
    }
    console.log(selectedVal + ' ' + search);

  },


  render: function () {
    var searchPageTemplate = $('#searchPageTemplate').html();
    this.$el.html( searchPageTemplate );

  }
});
