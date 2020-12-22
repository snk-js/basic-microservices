import got from 'got'
// @ts-ignore
import accessEnv from '#root/helpers/accessEnv'

const CUSTOMERS_SERVICE_URI = accessEnv("CUSTOMERS_SERVICE_URI")

export default class CustomersService {
    static async fetchCustomersByCity({city, page, size}) {
        let p = page || 1
        let s = size || 50

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
