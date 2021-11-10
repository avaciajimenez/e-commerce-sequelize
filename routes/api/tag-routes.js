const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  router.get('/', async (req, res) => {
    try {
      const Data = await Location.findAll();
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  
});

router.post('/', (req, res) => {
  // create a new tag
    try {
      const Data = await Location.create(req.body);
      res.status(200).json(locationData);
    } catch (err) {
      res.status(400).json(err);
    }
  
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;


// week 13 mini project 28