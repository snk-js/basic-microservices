
// @ts-ignore
import CustomersService from '#root/adapters/CustomersService'

const customersByIdResolver = async (obj, {id}) => {
    return await CustomersService.fetchCustomerById(id);
}

export default customersByIdResolver