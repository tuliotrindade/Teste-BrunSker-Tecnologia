const immobile = require('../models/immobileModel');

const newImmobile = async (data) => {
  const { id, address } = await immobile.create({ address: data });
  return {id, address};
};

module.exports = newImmobile;