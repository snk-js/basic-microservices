
// @ts-ignore
import CustomersService from '#root/adapters/CustomersService'

const customersResolver = async () => {
    return await CustomersService.fetchAllCustomers();
}

export default customersResolver