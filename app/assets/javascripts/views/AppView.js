var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',

  events: {
    'keyup': 'updateSearch',
    'click': 'updateSearch'

  },

  // events: {
  //   'click .flight_number': 'showFlight'
  // },

  // showFlight: function () {
  //   console.log()
  //   app.router.navigate('flights/' + this.model.get('id'), true);
  // },


  updateSearch: function () {
    search = $('#searchfield').val().toUpperCase();
    var searchExp = new RegExp("^" + search)
    var selectedVal = "";
    var selected = $("input[type='radio'][name='type']:checked");
    if (selected.length > 0 ) {
      selectedVal = selected.val();
    };
    var $flights = $(".flight-data")
    $.each($flights, function (index, el) {
      var val = $(this).find("."+selectedVal).text();
      console.log(val)
      if ( searchExp.test(val) ) {
        $(this).removeClass("hidden")
      } else {
        $(this).addClass("hidden")
      }
    });
    console.log(selectedVal + ' ' + search);

  },


  render: function () {
    var searchPageTemplate = $('#searchPageTemplate').html();
    this.$el.html( searchPageTemplate );

  }
});
