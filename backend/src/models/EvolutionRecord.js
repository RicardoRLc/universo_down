const { Model, DataTypes } = require('sequelize');

class EvolutionRecord extends Model {
  static init(sequelize) {
    super.init({
      date: DataTypes.DATE,
      status: DataTypes.TEXT,
      weight: DataTypes.FLOAT,
      height: DataTypes.FLOAT,
      report: DataTypes.TEXT

    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = EvolutionRecord;