export const groupAndAgreggateByCity = (arr, memo = {}) => {
  // result: O(N)
  arr.map((obj, ind) => {
    const { city } = obj;
    // insertion time= O(1)
    if (typeof memo[city] === "number") memo[city] += 1;
    if (!memo[city]) memo[city] = 1;
  });

  // result: O(N)
  const customersCountPerCity = Array.from(Object.keys(memo), (v) => ({
    // insertion time O(1)
    city: v,
    customers_total: memo[v],
  }));

  //final: O(2N) = O(N)
  return customersCountPerCity;
};
