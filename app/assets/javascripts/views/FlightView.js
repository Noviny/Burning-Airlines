var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click td': 'bookSeat',
    'click .save': 'confirmBooking'
  },
  bookSeat: function (e) {
    if ($(e.target).hasClass('seat-booked')) {
      alert("This seat has been reserved.")
    } else {
      $('.seat-selected').removeClass('seat-selected');   //Avoid multiple selection
      $(e.target).addClass('seat-selected');
    }
    console.log($(e.target).text());
    $('#seatNumber').val($(e.target).text());
  },
  confirmBooking: function () {
    var flightId = this.model.get("id");
    // var userId =                       //*** Remember add current user id
    var seatNum = $('#seatNumber').val();
    var reservation = new app.Reservation();
    reservation.set({ flight_id: flightId, seat: seatNum});   //*** Remember add current user id
    reservation.save();
  },
  render: function () {
    var rows = this.model.get("rows");
    var columns = this.model.get("columns");

    var table = '';
    var colLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'T', 'U', 'V', 'X', 'Y', 'Z'];

      for(var i= 1; i<rows; i++){
          table += '<tr>';
            for (var j= 0; j<columns; j++){
              table += '<td>' + i +colLabels[j] + '</td>';
            }
          table += '</tr>'
      }

    var flightsViewTemplate = _.template($('#flightViewTemplate').html());
    this.$el.html(flightsViewTemplate(this.model.toJSON()));
    this.$el.find('#tbl').html(table);
  }
});
