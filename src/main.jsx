var React = require('react');
var ReactDOM = require('react-dom');
var Weather = require('./components/Weather.jsx');

ReactDOM.render(<Weather city="tokyo" />, document.getElementById('app'));