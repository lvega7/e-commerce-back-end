const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags

  // be sure to include its associated Product data
  Tag.findAll({
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just `db.Post`
    include: [
      {
        model: Product,
        through:ProductTag
      }
    ]
  }).then(tag => {
    res.json(tag);
  });

});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
