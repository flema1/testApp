const express = require('express');
const bitfitRouter = express.Router();
const bitfitController = require('../controllers/bitfit-controllers');
var request = require('request');

bitfitRouter.get('/all', bitfitController.index);
bitfitRouter.post('/add', bitfitController.create);

bitfitRouter.get('/testGET',

request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
})




)

// bitfitRouter.get('/:id', bitfitController.show);
// bitfitRouter.put('/:id', bitfitController.update);
// bitfitRouter.delete('/:id', bitfitController.destroy);

module.exports = bitfitRouter;
