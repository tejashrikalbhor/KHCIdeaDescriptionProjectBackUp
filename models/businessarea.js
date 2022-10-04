'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class businessArea extends Model {
    static associate(models) {
      businessArea.hasMany(models.classification3,{ foreignKey:'businessAreaId'});
    }
  }
  businessArea.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:DataTypes.INTEGER
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'businessArea',
    timestamps: false,
    tableName:'businessArea'
  });
  return businessArea;
};