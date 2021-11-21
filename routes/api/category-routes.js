const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({}).then(results => {
    res.json(results);
  })

  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findAll({
    where: {
      id: req.params.id
    }
  }).then(results => {
    res.json(results);
  });
});

router.post('/snacks', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  }).then(results => {
    res.json(results);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      id: req.body.title,
      category_name: req.body.category_name
    }
  ).then(results => {
    res.json(results);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
