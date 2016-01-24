var React = require('react');
var Http = require('../services/httpService');
var Config = require('../../config.json');
var Moment = require('moment');

var CurrentForecast = React.createClass({

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

    var city = data ? data.name : '';
    var temp = data ? Math.round(data.main.temp) : '';
    var conditions = data ? data.weather[0].main : '';
    var icon = data ? Config.imgPath + data.weather[0].icon + '.png' : '';
    var date = data ? Moment.unix(data.dt).format("ddd, h:mm a") : '';

    return (
      <div className="list-group-item">
        <div>
          <div className="city">{city}</div>
          <div className="date">{date}</div>
        </div>
        <div className="icon"><img src={icon} /></div>
        <div className="temp">{temp}&deg;c</div>
        <div className="conditions">{conditions}</div>
      </div>
    );
  }
});

module.exports = CurrentForecast;