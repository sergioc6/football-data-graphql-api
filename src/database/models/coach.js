'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coach extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Coach.init({
    name: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    nationality: DataTypes.STRING,
    teamId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Coach',
  });

  // Define el accessor para dateOfBirth
  Object.defineProperty(Coach.prototype, 'dateOfBirthString', {
    get() {
      // Convierte la fecha a una cadena en formato 'YYYY-MM-DD'
      return this.getDataValue('dateOfBirth').toISOString().slice(0, 10);
    }
  });

  return Coach;
};