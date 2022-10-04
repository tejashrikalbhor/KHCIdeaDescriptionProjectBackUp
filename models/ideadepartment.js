'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ideaDepartment extends Model {
  
    static associate(models) {
      ideaDepartment.hasMany(models.classification1);
     
    }
  }
  ideaDepartment.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:DataTypes.INTEGER
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ideaDepartment',
    timestamps: false,
    tableName:'ideaDepartment'
  });
  return ideaDepartment;
};