const immobile = require("../models/immobileModel");

const newImmobile = async (data) => {
  try {
    const newImmobile = await immobile.create(data);
    return newImmobile;
  } catch (error) {
    console.log(error.message);
  }
};

const getAll = async () => {
  try {
    const allImmobile = await immobile.findAll();
    return allImmobile;
  } catch (error) {
    return console.log(error.message);
  }
};

const findOne = async (id) => {
  try {
    const findImobile = await immobile.findByPk(id);
    return findImobile;
  } catch (error) {
    return console.log(error.message);
  }
};

const updateImmobile = async (data) => {
  try {
    const { immobileId, address, city, cep, value, internalArea, type } = data;
    const [updatedImmobile] = await immobile.update(
      { address, city, cep, value, internalArea, type },
      { where: { id: immobileId } }
    );
    return updatedImmobile;
  } catch (e) {
    console.log(e.message);
  }
};

const deleteImmobile = async (id) => {
  try {
    const deleted = await immobile.destroy({ where: { id } });
    return deleted;
  } catch (error) {
    return console.log(error.message);
  }
};

module.exports = {
  newImmobile,
  getAll,
  findOne,
  updateImmobile,
  deleteImmobile,
};
