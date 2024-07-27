/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */


let cache = {};
const solve = (coins, amount, idx) => {

    const key = `${idx}-${amount}`;

    if (amount === 0) {
        return cache[key] = 1; 
    }

    if (amount < 0 || idx < 0) {
        return 0;
    }
    

    if (key in cache) {
        return cache[key];
    }

    
    
    return cache[key] = solve(coins, amount - coins[idx], idx) + solve(coins, amount , idx - 1);

}


const change = (amount, coins) => {
    cache = {};
    const ans = solve(coins, amount, coins.length - 1);
    console.log(cache);
    return ans;
}