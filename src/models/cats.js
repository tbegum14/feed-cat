const Cat = (sequelize, DataTypes) => {
    const schema = {
        name: DataTypes.STRING,
        breed: DataTypes.STRING,
        markings: DataTypes.STRING,
        lastFed: DataTypes.DATE
    }

    return sequelize.define('Cat', schema)
}

module.exports = Cat;