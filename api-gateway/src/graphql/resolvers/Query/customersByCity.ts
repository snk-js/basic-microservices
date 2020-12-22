
// @ts-ignore
import CustomersService from '#root/adapters/CustomersService'

const customersByCityResolver = async (obj, customersByCityInput) => {
    console.log('customersByCityInput', customersByCityInput)
    return await CustomersService.fetchCustomersByCity(customersByCityInput);
}

export default customersByCityResolver