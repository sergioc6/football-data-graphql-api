'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Team.hasMany(models.Player, {foreignKey: 'teamId'});
      Team.hasMany(models.Coach, {foreignKey: 'teamId'});
      Team.belongsToMany(models.Competition, {through: 'TeamCompetition', foreignKey: 'teamId'});
    }
  }
  Team.init({
    name: DataTypes.STRING,
    tla: DataTypes.STRING,
    shortName: DataTypes.STRING,
    areaName: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};