'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Competition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Competition.belongsToMany(models.Team, { through: 'TeamCompetition', foreignKey: 'competitionId' });
    }
  }
  Competition.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    areaName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Competition',
  });
  return Competition;
};