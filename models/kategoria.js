'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kategoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kategoria.hasMany(models.Allat, {
        as: "Kategoria",
        foreignKey: 'kategoriaId'
      })
    }
  }
  Kategoria.init({
    nev: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Kategoria',
    tableName: 'kategoriak',
    timestamps: false
  });
  return Kategoria;
};