import got from 'got'

const CUSTOMERS_SERVICE_URI = "http://customers-service:7100"

export default class CustomersService {
    static async fetchAllCustomers() {
        const body = await got.get(`${CUSTOMERS_SERVICE_URI}/customers`).json()
        return body
    }
}