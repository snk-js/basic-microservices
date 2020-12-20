
// @ts-ignore
import CustomersService from '#root/adapters/CustomersService'

const totalCustomersByCityResolver = async (obj, {limit, offset}) => {
    return await CustomersService.fetchCountCustomersByCity({limit,offset});
}

export default totalCustomersByCityResolver