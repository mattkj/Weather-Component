var React = require('react');
var Http = require('../services/httpService');
var Config = require('../../config.json');
var Moment = require('moment');

var DailyForecast = require('./DailyForecast.jsx');

var FutureForecast = React.createClass({

  getInitialState: function(){
    return {weatherData: null};
  },
  componentDidMount: function(){
    Http.get('forecast/daily?q='+ this.props.city +'&units=metric&APPID='+ Config.key)
    .then(function(data){
      this.setState({weatherData: data});
    }.bind(this));
  },
  render: function(){
    var data = this.state.weatherData;
    var days = [];

    if (data){
      days = data.list.slice(1, 5).map(function(item){
        console.log(item);
        return (
          <DailyForecast key={item.dt} date={item.dt} icon={item.weather[0].icon} 
                         conditions={item.weather[0].main} min={item.temp.min} max={item.temp.max} />
          );
      })
    };

    return (
      <div>
        {days}
      </div>
    );
  }
});

module.exports = FutureForecast;