'use strict';
module.exports = function(sequelize, DataTypes) {
  var event_list = sequelize.define('event_list', {
    list_name: {
      type: DataTypes.STRING,
      validate: {
        length: [1, 30]
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return event_list;
};
