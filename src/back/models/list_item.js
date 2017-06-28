'use strict';
module.exports = function(sequelize, DataTypes) {
  var list_item = sequelize.define('list_item', {
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
  });

  list_item.associate = function(models) {
    list_item.belongsTo(models.event_list);
    list_item.hasMany(models.contribution);
  };

  return list_items;
};
