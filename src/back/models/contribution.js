'use strict';
module.exports = function(sequelize, DataTypes) {
  var contribution = sequelize.define('contribution', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return contribution;
};
