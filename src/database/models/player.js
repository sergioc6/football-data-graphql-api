'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Player.belongsTo(models.Team, { foreignKey: 'teamId' });
    }
  }
  Player.init({
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    nationality: DataTypes.STRING,
    teamId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Player'
  });

  // Define el accessor para dateOfBirth
  Object.defineProperty(Player.prototype, 'dateOfBirthString', {
    get() {
      // Convierte la fecha a una cadena en formato 'YYYY-MM-DD'
      return this.getDataValue('dateOfBirth').toISOString().slice(0, 10) ?? '';
    }
  });

  return Player;
};