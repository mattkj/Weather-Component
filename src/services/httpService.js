var Fetch = require('whatwg-fetch');
var Config = require('../../config.json');
var baseUrl = Config.baseUrl;

var httpService = {
  get: function(url){
    return fetch(baseUrl + url)
    .then(function(response){
      return response.json()
    });
  }
};

module.exports = httpService;