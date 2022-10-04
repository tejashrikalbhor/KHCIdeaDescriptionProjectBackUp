'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classification2 extends Model {
   
    static associate(models) {
      classification2.belongsTo(models.classification1);
    }
  }
  classification2.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    classification1Id: {
      type: DataTypes.INTEGER,
      references: { model:'classification1' , key:'id'}
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'classification2',
    timestamps: false,
    tableName: 'classification2'
  });
  return classification2;
};