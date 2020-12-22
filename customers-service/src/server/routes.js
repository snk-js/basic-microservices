import { Customer } from "#root/db/models";
const { QueryTypes } = require("sequelize");
import db from "../db/connection";
import { groupAndAgreggateByCity } from "../utils/transformers";

import customers from "../../customers.json";
import response_data from "../../formated_api_responses.json";

const setupRoutes = (app) => {
  app.get("/mock", async (req, res, next) => {
    const customers_filled_with_lat_and_lng = response_data.map(
      (response_entrie, ind) => ({
        ...customers[ind],
        lat: response_entrie.location.lat,
        long: response_entrie.location.lng,
      })
    );

    const promises = customers_filled_with_lat_and_lng.map(async (customer) => {
      return await Customer.create(customer);
    });
    try {
      await Promise.all(promises);
      return res.json({ success: "success" });
    } catch (error) {
      return res.json({ error });
    }
  });

  app.get("/clear-database", async (req, res, next) => {
    try {
      Customer.destroy({
        where: {},
        truncate: true,
      });
      return res.json({ success: "success" });
    } catch (err) {
      return res.json({ err });
    }
  });

  app.get("/customers", async (req, res, next) => {
    const city = req.query.city;
    let customersByCity = [];
    const { page, size } = req.query;

    try {
      customersByCity = await Customer.findAll({
        where: {
          city,
        },
      });

      const paginatedCustomersByCity = customersByCity.slice(
        (page - 1) * size,
        page * size
      );
      return res.json(paginatedCustomersByCity);
    } catch (error) {
      return res.json(error);
    }
  });

  app.get("/customer", async (req, res, next) => {
    const id = req.query.id;
    let singleCustomer = {};
    try {
      singleCustomer = await Customer.findByPk(id);
      return res.json(singleCustomer);
    } catch (error) {
      return res.json(error);
    }
  });

  app.get("/customers/count/city", async (req, res, next) => {
    let citiesPopulation = [];
    try {
      // custom query
      citiesPopulation = await db.query(
        "SELECT city FROM customers GROUP BY city, id",
        { type: QueryTypes.SELECT }
      );

      const resultAppliedOptions = groupAndAgreggateByCity(citiesPopulation);
      return res.json(resultAppliedOptions);
    } catch (error) {
      return res.json(error);
    }
  });
};

export default setupRoutes;
