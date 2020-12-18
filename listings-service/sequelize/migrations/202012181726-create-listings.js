module.exports.up = (queryInterface, DataTypes) => {

    return queryInterface.createTable("listings", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED
        },

        first_name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        last_name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING
        },
        gender: {
            allowNull: false,
            type: DataTypes.STRING
        },
        company: {
            allowNull: false,
            type: DataTypes.STRING
        },
        city: {
            allowNull: false,
            type: DataTypes.STRING
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        lat: {
            allowNull: true,
            type: DataTypes.STRING
        },
        long: {
            allowNull: true,
            type: DataTypes.STRING
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
    
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
    
        deletedAt: {
            allowNull: true,
            type: DataTypes.DATE
        }
    },
    {
        charset: "utf8"
    })

}

// "id": 1,
// "first_name": "Laura",
// "last_name": "Richards",
// "email": "lrichards0@reverbnation.com",
// "gender": "Female",
// "company": "Meezzy",
// "city": "Warner, NH",
// "title": "Biostatistician III",
// "lat": "43.3044615",
// "long": "-71.9650652" 