'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classification3 extends Model {
    static associate(models) {
      classification3.belongsTo(models.businessArea);
      
    }
  }
  classification3.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    businessAreaId: {
      type: DataTypes.INTEGER,
      references: { model: 'businessArea', key: 'id' }
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'classification3',
    timestamps: false,
    tableName: 'classification3'

  });
  return classification3;
};