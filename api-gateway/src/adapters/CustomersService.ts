import got from 'got'

const CUSTOMERS_SERVICE_URI = "http://customers-service:7100"

export default class CustomersService {
    static async fetchCustomersByCity(city:string) {
        const body = await got.get(`${CUSTOMERS_SERVICE_URI}/customers/${city}`).json()
        return body
    }
    static async fetchCustomerById(id:string) {
        const body = await got.get(`${CUSTOMERS_SERVICE_URI}/customer/${id}`).json()
        return body
    }

    static async fetchCountCustomersByCity() {
        const body = await got.get(`${CUSTOMERS_SERVICE_URI}/customers/count/city`).json()
        return body
    }
}
