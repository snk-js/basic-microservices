import { Customer } from "#root/db/models";
import customers from '../../customers.json'
const { QueryTypes } = require('sequelize');
import db from '../db/connection'


const setupRoutes = app => {
    app.get("/mock", async ( req, res, next) => {        
        let successful_count = 0
        let errors = 0

        const promises = customers.map(async (customer) => {
            return await Customer.create(customer)
                .then(resolved => successful_count++)
                .catch(err => errors++) 
        })
        try {
            await Promise.all(promises)
            return res.json({success: `${successful_count+1} customers created with success!`})
        } catch (error) {
            return res.json({error})
        }
    })

    app.get("/customers/:city", async ( req, res, next) => {
        const city = req.params.city
        let customersByCity = {}
        try {
            customersByCity = await Customer.findAll({
                where: {
                    city
                }
            })

            return res.json(customersByCity)
        } catch ( error ) {
            return res.json(error)
        }
    })

    app.get("/customer/:id", async ( req, res, next) => {
        const id = req.params.id
        let singleCustomer = {}
        try {
            singleCustomer = await Customer.findByPk(id)
            return res.json(singleCustomer)
        } catch ( error ) {
            return res.json(error)
        }
    })

    app.get("/customers/count/city/:options", async ( req, res, next) => {
        let citiesPopulation = []
        var memo = {}
        const {limit, offset} = JSON.parse(req.params.options)

        let l = limit || 20
        let o = offset || 0

        try {
            // custom query
            citiesPopulation = await db.query(
                "SELECT city FROM customers GROUP BY city, id",
                { type: QueryTypes.SELECT }
            )
            // grouping, agregate and count by city
            citiesPopulation.map((obj,ind) => {
                const { city } = obj
                if(typeof memo[city] === 'number') memo[city] += 1
                if(!memo[city]) memo[city] = 1
            })

            // format into the test required object
            const customersCountPerCity = Array.from(Object.keys(memo), (v) => ({
                city: v,
                customers_total: memo[v]
            }))

            const resultAppliedOptions = customersCountPerCity.slice(o, o+l)

            return res.json(resultAppliedOptions)
        } catch ( error ) {
            return res.json(error)
        }
    })

};

export default setupRoutes