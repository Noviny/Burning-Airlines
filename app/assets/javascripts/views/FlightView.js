var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click td': 'bookSeat'
  },
  bookSeat: function (e) {
    if ($(e.target).hasClass('seat-booked')) {
      alert("This seat has been reserved.")
    } else {
      $('.seat-selected').removeClass('seat-selected');   //Avoid multiple selection
      $(e.target).addClass('seat-selected');
    }

    $('#seatNumber').val($(e.target).text());
    var flightId = this.model.get("id");
    var reservation = new app.Reservation();
    var seatNum = $(e.target).text();
    reservation.set({ flight_id: flightId, seat: seatNum});   //*** current user id saved at rails
    reservation.save();
    alert("You are successfully save your seat!");
  },
  render: function () {
    $('.video-section').remove();
    var rows = this.model.get("rows");
    var columns = this.model.get("columns");

    var table = '';
    var colLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'T', 'U', 'V', 'X', 'Y', 'Z'];

      for(var i= 1; i<rows; i++){
          table += '<tr>';
            for (var j= 0; j<columns; j++){
              table += '<td id='+i+colLabels[j]+'>' + i + colLabels[j] + '</td>';
            }
          table += '</tr>'
      }

    var flightsViewTemplate = _.template($('#flightViewTemplate').html());
    this.$el.html(flightsViewTemplate(this.model.toJSON()));
    this.$el.find('#tbl').html(table);

    var view = this;
    setInterval(function () {
      view.fetchReservationData();
    }, 1000);
  },
  fetchReservationData: function () {
    app.reservation = new app.Reservations();
    app.reservation.fetch().done( function (rdata){
      for (var i = 0; i < rdata.length; i++) {
        $('td#'+rdata[i].seat).addClass('seat-booked').html();
      }
    });
  }
});

