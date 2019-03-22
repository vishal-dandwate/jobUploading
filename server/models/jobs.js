'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jobs = sequelize.define('Jobs', {
    position: DataTypes.STRING,
    company: DataTypes.STRING,
    experience: DataTypes.FLOAT,
    place: DataTypes.STRING,
    technology: DataTypes.STRING,
    note: DataTypes.STRING
  }, {});
  Jobs.associate = function(models) {
    // associations can be defined here
  };
  return Jobs;
};