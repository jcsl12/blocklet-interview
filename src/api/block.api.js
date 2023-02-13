import axios from "axios";

const BASE_API = "https://blockchain.info";

/**
 *
 * @param block_hash
 */
export function singleBlock(block_hash){
    return axios({
        url: BASE_API + "/rawblock/" + block_hash,
        method: "GET",
    })
}

/**
 *
 * @param tx_hash
 */
export function singleTransaction(tx_hash){

}

/**
 *
 * @param chart_type
 */
export function chartData(chart_type){

}

/**
 *
 * @param block_height
 */
export function blockHeight(block_height){

}

/**
 *
 * @param bitcoin_address
 */
export function singleAddress(bitcoin_address){

}

/**
 *
 * @param block_hash
 */
export function multiAddress(block_hash){

}

/**
 *
 * @param block_hash
 */
export function unspentOutpus(block_hash){

}

/**
 *
 * @param block_hash
 */
export function balance(block_hash){

}

/**
 *
 * @param block_hash
 */
export function latestBlock(block_hash){

}
/**
 *
 * @param block_hash
 */
export function unconfirmedTransactions(block_hash){

}

/**
 *
 * @param block_hash
 */
export function blocks(block_hash){

}
