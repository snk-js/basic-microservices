import { Sequelize } from "sequelize";

import accessEnv from "#root/helpers/accessEnv";

const DB_URI = accessEnv(
  "DB_URI",
  "mysql://root:password@customers-service-db/db?charset=UTF8"
);

const sequelize = new Sequelize(DB_URI, {
  dialectOptions: {
    charset: "utf8",
    multipleStatements: true,
  },

  logging: false,
});

export default sequelize;
