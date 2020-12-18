import { DataTypes, Model } from "sequelize"

import sequelize from './connection'

export class Customer extends Model {}

Customer.init({
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

}, {
    modelName: "customers",
    sequelize
})