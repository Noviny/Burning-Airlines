var app = app || {};

app.AirplanesView = Backbone.View.extend ({
  el: '#airplaneForm',
  event: {
    'click button': 'createAirplane',
  },

  createAirplane: function () {
    console.log("Airplane should be made here");
    var currentAirplaneName = this.$el.find('name').val();
    var currentAirplaneRow = this.$el.find('row').val();
    var currentAirplaneColumn = this.$el.find('column').val();

    // if (currentAirplaneName.length === 0) { return; }

    var airplane = new app.Airplane();    //Create a new "instance"
    airplane.set({content: currentAirplaneName});
    airplane.save();  // Send this airplane up to the server

    app.airplanes.add( airplane );
    this.$el.find('input').val('').focus();
  },

  render: function () {
    console.log("Airplane form ready");
    var newAirplaneViewTemplate = $('#newAirplaneViewTemplate').html();
    this.$el.html( newAirplaneViewTemplate );
  }
});


