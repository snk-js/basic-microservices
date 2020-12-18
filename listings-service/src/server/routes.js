import { Listing } from "#root/db/models";

const setupRoutes = app => {
    app.get("/listings", async (req, res, next) => {
        let listings = {}       

        try {
            listings = await Listing.findAll()
        } catch (error) {
            console.log(error)
        }


        return res.json(listings)
    })
};

export default setupRoutes