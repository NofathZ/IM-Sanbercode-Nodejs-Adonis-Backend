'use strict';
const {
  Model,
  Sequelize,
  DataTypes
} = require('sequelize');

// const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
const sequelize = new Sequelize("node-api-sanbers", "root", null, {
  host: 'localhost',
  dialect: 'mysql'
});


module.exports = ((sequelize, DataTypes) => {
  class Venue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Venue.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Venue',
  });
  return Venue;
})(sequelize, DataTypes);

