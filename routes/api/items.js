const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    GET All Items
// @access Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
});

// *** should be private ***
// @route   POST api/items
// @desc    Create a Iteam
// @access Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// *** should be private ***
// @route   DELETE api/items/:id
// @desc    Create a Item
// @access Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;
