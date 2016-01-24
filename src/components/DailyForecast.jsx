var React = require('react');
var Moment = require('moment');
var Config = require('../../config.json');

var DailyForecast = React.createClass({
  render: function(){
    var date = Moment.unix(this.props.date).format("dddd");
    var icon = Config.imgPath + this.props.icon + '.png';
    var min = Math.round(this.props.min);
    var max = Math.round(this.props.max);

    return (
      <div className="list-group-item">
        <div className="row">
        <div className="col-xs-4">
          <div><strong>{date}</strong></div>
          <div>{this.props.conditions}</div>
        </div>
        <div className="col-xs-4 text-center">
          <img src={icon} width="40px" />
        </div>
        <div className="col-xs-4 text-right">
          <div><strong>{max}&deg;c</strong></div>
          <div>{min}&deg;c</div>
        </div>
        </div>
      </div>
    );
  }
});

module.exports = DailyForecast;