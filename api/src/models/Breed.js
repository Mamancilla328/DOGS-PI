const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
sequelize.define('breed', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull:false,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    }
  })

}
    