var React = require('react');
var ReactDOM = require('react-dom');
var CurrentForecast = require('./components/CurrentForecast.jsx');

ReactDOM.render(<CurrentForecast city="vancouver,ca" />, document.getElementById('app'));