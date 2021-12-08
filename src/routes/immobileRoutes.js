const express = require('express');

const immobile = require('../services/immobileService')

const router = express.Router();

router.get('/')

router.put('/:id');

router.post('/', async (req, res) =>{
  const { address } = req.body;
  const newImmobile = await immobile(address);
  console.log(newImmobile)
  res.status(200).json(newImmobile)
});

router.delete('/:id')

module.exports = router