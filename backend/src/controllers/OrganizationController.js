const Organization = require("../models/Organization");

module.exports = {
  async index(req, res) {
    const organizations = await Organization.findAll();

    return res.json(organizations);
  },

  async store(req, res) {
    const { name, description, domain } = req.body;
    
    const organization = await Organization.create({
      name,
      description,
      domain,
    });

    return res.json(organization);
  },
};
