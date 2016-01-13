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
    for(var i=0; i<rows; i++){
        table += '<tr>' + 'result ' +  i ;
        for (var j= 0; j<columns; j++){
          table += '<td>' + j + '</td>';
        }
        table += '</tr>'
    }

    var flightsViewTemplate = _.template($('#flightViewTemplate').html());
    this.$el.html(flightsViewTemplate(this.model.toJSON()));
    this.$el.find('#tbl').html(table);
  }
});
