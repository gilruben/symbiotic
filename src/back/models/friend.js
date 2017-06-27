'use strict';
module.exports = function(sequelize, DataTypes) {
  var friend = sequelize.define('friend')

  friend.associate = function(models) {
    friend.belongsTo(models.user, { as: "friend1" });
    friend.belongsTo(models.user, { as: "friend2" });
  };

  return friend;
};
