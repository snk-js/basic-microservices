import app from './app'
import accessEnv from "#root/helpers/accessEnv";

const PORT = accessEnv('PORT', 7100);

app.listen(PORT, "0.0.0.0", () => {
    console.info(`Customer services listening on ${PORT}`)
})