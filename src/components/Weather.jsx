var React = require('react');
var CurrentForecast = require('./CurrentForecast.jsx');
var FutureForecast = require('./FutureForecast.jsx');

var Weather = React.createClass({
  render: function(){

    var background = {background: this.props.background};

    return (
      <div>
        <div className="current-forecast list-group" style={background}>
          {<CurrentForecast city={this.props.city}/>}
        </div>
        <div className="future-forecast list-group">
          {<FutureForecast city={this.props.city}/>}
        </div>
      </div>
    );
  }
});

module.exports = Weather;