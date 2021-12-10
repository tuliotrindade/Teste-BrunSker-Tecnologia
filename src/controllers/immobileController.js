const immobileService = require("../services/immobileService");
const rescue = require("express-rescue");

const create = rescue(async (req, res) => {
  const { id } = req;
  const { city, address, cep, value, internalArea, type } = req.body;
  const data = { creator_id: id, city, address, cep, value, internalArea, type  };
  const newImmobile = await immobileService.newImmobile(data);
  return res.status(201).json({ Immobile: newImmobile });
});

const getAll = rescue(async (_req, res) => {
  const allImmobiles = await immobileService.getAll();
  return res.status(200).json(allImmobiles);
});

const findOne = rescue(async (req, res) => {
  const { id } = req.params;
  const findedImmobile = await immobileService.findOne(id);
  if (!findedImmobile) {
    return res.status(404).json({ message: "immobile not found" });
  }
  return res.status(200).json(findedImmobile);
});

const updateImmobile = rescue(async (req, res) => {
  const { id } = req;
  const { immobileId } = req.params;
  const findedImmobile = await immobileService.findOne(immobileId);
  if (!findedImmobile) {
    return res.status(404).json({ messsage: "immobile not found" });
  }
  if (id !== findedImmobile.creator_id) {
    return res
      .status(401)
      .json({ message: "Only the creator can update the immobile" });
  }
  const { city, address, cep, value, internalArea, type  } = req.body;
  const data = { city, address, cep, immobileId, value, internalArea, type  };
  await immobileService.updateImmobile(data);
  return res
    .status(200)
    .json({ message: `the immobile with id ${immobileId} has been updated` });
});

const deleteImmobile = rescue(async (req, res) => {
  const { id } = req;
  const { immobileId } = req.params;
  const findedImmobile = await immobileService.findOne(immobileId);
  if (!findedImmobile) {
    return res.status(404).json({ messsage: "immobile not found" });
  }
  if (id !== findedImmobile.creator_id) {
    return res
      .status(401)
      .json({ message: "Only the creator can delete the immobile" });
  }
  await immobileService.deleteImmobile(immobileId);
  return res
    .status(200)
    .json({ message: `the immobile with id ${immobileId} has been deleted` });
});

module.exports = {
  getAll,
  create,
  findOne,
  updateImmobile,
  deleteImmobile,
};
