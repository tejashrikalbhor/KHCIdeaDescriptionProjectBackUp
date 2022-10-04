'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classification1 extends Model {
    
    static associate(models) {
      classification1.belongsTo(models.ideaDepartment);
      classification1.hasMany(models.classification2 , {foreignKey:'classification1Id'});
    }
  }
  classification1.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ideaDepartmentId:{ 
      type: DataTypes.INTEGER,
      references: { model:'ideaDepartment' , key:'id'}

    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'classification1',
    timestamps: false,
    tableName: 'classification1'
  });
  return classification1;
};