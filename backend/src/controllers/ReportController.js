const { Op } = require('sequelize');
const EvolutionRecord = require('../models/EvolutionRecord');
const User = require('../models/User');

module.exports = {
  async show(req, res) {
    // Encontrar todos usuários que tem email que termina com @rocketseat.com.br
    // Desses usuários eu quero buscar todos que moram na rua "Rua Guilherme Gembala"
    // Desses usuários eu quero buscar as tecnologias que começam com React

    const users = await EvolutionRecord.findAll({
      attributes: ['status'],
      where: {
        email: {
          [Op.iLike]: 'OK'
        }
      },
      include: [
        { 
          association: 'user', 
          where: { 
            first_name: 'Luiz'
          } 
        },
        { 
          association: 'assisteds', 
          required: false,
          where: {
            name: 
               'Teste'
            
          }
        },
      ]
    })

    return res.json(users);
  }
};