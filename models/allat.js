'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Allat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Allat.belongsTo(models.Kategoria, {
        as: "Kategoria",
        foreignKey: 'kategoriaId'
      })
    }
  }
  Allat.init({
    nev: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    becenev: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    eletkor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    szarmazas: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    taplalek: {
        types: DataTypes.STRING(100),
        allowNull: true
    },
    kategoriaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kepUrl: DataTypes.STRING    
  }, {
    sequelize,
    modelName: 'Allat',
    tableName: 'allatok',
    timestamps: false
  });
  return Allat;
};