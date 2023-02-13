var str = `Hash
00000-dfabc 
Capacity
151.89%
Distance
11y 2m 20d 7h 1m 30s
BTC
14,789.7579
Value
$320,947,359
Value Today
$320,923,548
Average Value
4.5200971597 BTC
Median Value
0.01840905 BTC
Input Value
14,790.11 BTC
Output Value
14,796.36 BTC
Transactions
3,272
Witness Tx’s
2,878
Inputs
6,018
Outputs
12,450
Fees
0.35485876 BTC
Fees Kb
0.0002228 BTC
Fees kWU
0.0000889 BTC
Depth
4
Size
1,592,686
Version
0x27ffe000
Merkle Root
d1-4f 
Difficulty
39,350,942,467,772.63
Nonce
253,938,021
Bits
386,344,736
Weight
3,993,142 WU
Minted
6.25 BTC
Reward
6.60485876 BTC
Mined on
2023年2月12日 00:37:59
Height
776,053
Confirmations
4
Fee Range
0-1,465 sat/vByte
Average Fee
0.00010845
Median Fee
0.00005189
Miner
Binance Pool`

function go(){
    let result = [];
    let arr = str.split('\n').map(it => it.trim()).filter(it => it)
    for (let i = 0; i < arr.length ; i+= 2) {
        result.push({
            key: arr[i].trim(),
            val: arr[i + 1]
        })
    }
    console.log(result)
}
go();
