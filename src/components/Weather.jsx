var React = require('react');
var Http = require('../services/httpService');
var Config = require('../../config.json');
var Weather = React.createClass({

  getInitialState: function(){
    return {weatherData: null};
  },
  componentDidMount: function(){
    Http.get('weather?q='+ this.props.city +'&units=metric&APPID='+ Config.key)
    .then(function(data){
      this.setState({weatherData: data});
    }.bind(this));
  },
  render: function(){
    var data = this.state.weatherData;
    var imgPath = 'http://openweathermap.org/img/w/';

    var city = data ? data.name : '';
    var temp = data ? data.main.temp : '';
    var conditions = data ? data.weather[0].main : '';
    var icon = data ? imgPath + data.weather[0].icon + '.png' : '';

    return (
      <div>
        <div>City: {city}</div>
        <div>Temp: {temp}&deg;c</div>
        <div>Conditions: {conditions}</div>
        <div><img src={icon} /></div>
      </div>
    );
  }
});

module.exports = Weather;