var React = require('react');
var ReactDOM = require('react-dom');
var Weather = require('./components/Weather.jsx');

ReactDOM.render(<Weather city="vancouver" background="#79B8AF" />, document.getElementById('city1'));
ReactDOM.render(<Weather city="auckland" />, document.getElementById('city2'));