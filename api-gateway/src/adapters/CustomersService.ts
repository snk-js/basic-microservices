import got from 'got'

const CUSTOMERS_SERVICE_URI = "http://customers-service:7100"

export default class CustomersService {
    static async fetchCustomersByCity({input: {city, page, size}}) {
        let p = page || 1
        let s = size || 20

        const body = await got.get(`${CUSTOMERS_SERVICE_URI}/customers?city=${city}&page=${p}&size=${s}`).json()
        return body
    }
    static async fetchCustomerById(id:string) {
        const body = await got.get(`${CUSTOMERS_SERVICE_URI}/customer?id=${id}`).json()
        return body
    }
    static async fetchCountCustomersByCity() {        
        const body = await got.get(`${CUSTOMERS_SERVICE_URI}/customers/count/city`).json()
        return body
    }
}
