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
      <div>
        <div>{date}<img src={icon} /> {max}&deg;c / {min}&deg;c</div>
        <div>{this.props.conditions}</div>
      </div>
    );
  }
});

module.exports = DailyForecast;