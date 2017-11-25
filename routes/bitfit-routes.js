const express = require('express');
const bitfitRouter = express.Router();
const bitfitController = require('../controllers/bitfit-controllers');

bitfitRouter.get('/all', bitfitController.index);
bitfitRouter.post('/add', bitfitController.create);

// bitfitRouter.get('/:id', bitfitController.show);
// bitfitRouter.put('/:id', bitfitController.update);
// bitfitRouter.delete('/:id', bitfitController.destroy);

module.exports = bitfitRouter;
