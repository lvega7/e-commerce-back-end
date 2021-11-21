const router = require('express').Router();
const { Tag, Product, ProductTag, } = require('../../models');


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

  Tag.findAll({
    where: {
      id: req.params.id
    }
  }).then(results => {
    res.json(results);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then(tagName => res.json(tagName))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

module.exports = router;
