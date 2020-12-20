
// @ts-ignore
import CustomersService from '#root/adapters/CustomersService'

const totalCustomersByCityResolver = async () => {
    return await CustomersService.fetchCountCustomersByCity();
}

export default totalCustomersByCityResolver