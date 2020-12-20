
export const groupAndAgreggateByCity = (arr, memo={}) => {

    // O(N)
    arr.map((obj,ind) => {
        const { city } = obj
        if(typeof memo[city] === 'number') memo[city] += 1
        if(!memo[city]) memo[city] = 1
    })

    // format into the test required object
    // O(N)
    const customersCountPerCity = Array.from(Object.keys(memo), (v) => ({
        city: v,
        customers_total: memo[v]
    }))

    // O(2N) = O(N)
    return customersCountPerCity
}
