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
  });

  contribution.associate = function(models) {
    contribution.belongsTo(models.user);
  };

  return contribution;
};
