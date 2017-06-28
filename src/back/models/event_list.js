'use strict';
module.exports = function(sequelize, DataTypes) {
  var event_list = sequelize.define('event_list', {
    list_name: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 30]
      }
    }
  });

  event_list.associate = function(models) {
    event_list.belongsTo(models.user);
    event_list.hasMany(models.list_item);
  };

  return event_list;
};
