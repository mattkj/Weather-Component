var React = require('react');
var CurrentForecast = require('./CurrentForecast.jsx');
var FutureForecast = require('./FutureForecast.jsx');

var Weather = React.createClass({
  render: function(){
    return (
      <div>
        <div>{<CurrentForecast city={this.props.city}/>}</div>
        <div>{<FutureForecast city={this.props.city}/>}</div>
      </div>
    );
  }
});

module.exports = Weather;