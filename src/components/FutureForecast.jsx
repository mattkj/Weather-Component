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
    return (
      <div>
        <hr />
        <DailyForecast />
      </div>
    );
  }
});

module.exports = FutureForecast;