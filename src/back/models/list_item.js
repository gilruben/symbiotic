'use strict';
module.exports = function(sequelize, DataTypes) {
  var list_items = sequelize.define('list_item', {
    item_name: {
      type: DataTypes.STRING,
      length: [2, 26],
      allowNull: false
    },
    quantity_goal: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0
      }
    },
    note: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return list_items;
};
