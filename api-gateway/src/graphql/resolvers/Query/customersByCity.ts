
// @ts-ignore
import CustomersService from '#root/adapters/CustomersService'

const customersByCityResolver = async (obj, {city}) => {
    return await CustomersService.fetchCustomersByCity(city);
}

export default customersByCityResolver