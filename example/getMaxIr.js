'use strict';

var LifxClient = require('../lib/lifx').Client;
var client = new LifxClient();

client.on('light-new', function(light) {
//  if (light.id === 'd073d520a8d7') {
    light.getMaxIR(function(err, info) {
      if (err) {
        throw err;
      }
      console.log(info);
    });
//  }
});

client.init();

