var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click td': 'bookSeat'
  },
  bookSeat: function (e) {
    console.log(e.target);
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
