import { Customer } from "#root/db/models";

const setupRoutes = app => {
    app.get("/customers", async (req, res, next) => {
        let customers = {}     

        // await Customer.create({
        //     first_name: "Laura",
        //     last_name: "Richards",
        //     email: "lrichards0@reverbnation.com",
        //     gender: "Female",
        //     company: "Meezzy",
        //     city: "Warner, NH",
        //     title: "Biostatistician III",
        //     lat: "43.3044615",
        //     long: "-71.9650652" 
        // })

        try {
            customers = await Customer.findAll()
        } catch (error) {
            console.log(error)
        }


        return res.json(customers)
    })
};

export default setupRoutes