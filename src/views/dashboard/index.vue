<template>
  <div class="page">
    <div class="pg_col">

      <div v-if="  failedQuery">
        <div class="" style="min-height: 600px;padding: 100px;background-color: #fff;text-align:center;">
          <div class="" style=" text-align:center;font-size: 20px;font-weight: bold;line-height: 2;">Nothing geted!</div>
          <div class="" style="color: #999;font-size: 0.8rem;">{{ hash }}</div>
        </div>
      </div>
      <template v-else>
        <div class="bitcoin_box">
          <div class="block_col block_info">
            <div class="" style="padding: 15px;display: flex;flex-direction: row;justify-content: space-between;align-items: center;">
              <div class="block_rect" style="width: 100px;height: 100px;background-color: #f2f2f2;border-radius: 10px;"></div>
              <div class="block_turn" style="margin-right: 20px;">
                <button><img :src="require('@/assets/icon-left.svg')" alt="" class="" @click="todo"></button>
                <button><img :src="require('@/assets/icon-right.svg')" alt="" class="" @click="todo"></button>
              </div>
            </div>
            <div class="block_meta">
              <div>
                <div class="block_name">Bitcoin Cash Block {{ blockModel.height | fil_formatNumber }}</div>
                <div class="block_time">Mined on November 24, 2011 06:40:30 • All Blocks</div>
              </div>
              <button class="block_tag">Unknown</button>
              <div class="block_description" style="color: #999;font-weight: normal;">
                A total of 14,789.76 BTC ($320,947,359) were sent in the block with the average transaction being 4.5201 BTC ($98,089.11). Binance Pool earned a total reward of 6.25 BTC $135,629. The
                reward consisted of a base reward of 6.25 BTC $135,629 with an additional 0.3549 BTC ($7,701.56) reward paid as fees of the 3,272 transactions which were included in the block.
              </div>
            </div>
            <div class="block_dtl">
              <div class="dtl_title">Details</div>
              <ul class="ul_dtl">
                <li v-for="(it, idx) in details" class="dtl_kv">
                  <div class="dtl_key" title="something">{{ it.key }}</div>
                  <div class="dtl_val">
                    {{ it.val }}
                    <div v-if="it.action" class="g_text_copy" @click="($event) => handleCopy(it.val, $event)"></div>
                    <!--                    <img class="" :src="require('@/assets/icon-copy.svg')" alt="">-->
                    <!--/*                    <button v-if="it.action" style="margin-left: 2px;border: 0;outline: 0;padding: 0;font-size: 12px;color: #888;cursor:pointer;">复制</button>*/-->
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <cpnTransaction :transactions="transactions"/>

        </div>
      </template>

      <div class="crypto_assets">
        <div class="crypto_assets_title">Explore top crypto assets.</div>
        <div class="crypto_ul">
          <div v-for="(it, idx) in details" class="crypto_li">
            <div class="logo"><img :src="require('@/assets/logo.svg')" alt=""></div>
            <div class="crypto_info">
              <div class="name">USD Coin</div>
              <div class="sub_name">USDC</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

/**
 *
 **/

import axios from "axios";
import {singleBlock} from "@/api/block.api";
import {thousandFormatter} from "@/utils/number.util";
import {formatDate} from "@/system/filters/date";
import cpnTransaction from "@/views/dashboard/widgets/cpnTransaction";
export default {
  name: 'App',

  components: {
    cpnTransaction
  },

  data() {
    return {

      failedQuery: false, // 查询失败情况

      hash: "", // block hash

      details: [
        {key: 'Hash', val: '00000-dfabc', action: true},
        {key: 'Capacity', val: '151.89%'},
        {key: 'Distance', val: '11y 2m 20d 7h 1m 30s'},
        {key: 'BTC', val: '14,789.7579'},
        {key: 'Value', val: '$320,947,359'},
        {key: 'Value Today', val: '$320,923,548'},
        {key: 'Average Value', val: '4.5200971597 BTC'},
        {key: 'Median Value', val: '0.01840905 BTC'},
        {key: 'Input Value', val: '14,790.11 BTC'},
        {key: 'Output Value', val: '14,796.36 BTC'},
        {key: 'Transactions', val: '3,272'},
        {key: 'Witness Tx’s', val: '2,878'},
        {key: 'Inputs', val: '6,018'},
        {key: 'Outputs', val: '12,450'},
        {key: 'Fees', val: '0.35485876 BTC'},
        {key: 'Fees Kb', val: '0.0002228 BTC'},
        {key: 'Fees kWU', val: '0.0000889 BTC'},
        {key: 'Depth', val: '4'},
        {key: 'Size', val: '1,592,686'},
        {key: 'Version', val: '0x27ffe000'},
        {key: 'Merkle Root', val: 'd1-4f'},
        {key: 'Difficulty', val: '39,350,942,467,772.63'},
        {key: 'Nonce', val: '253,938,021'},
        {key: 'Bits', val: '386,344,736'},
        {key: 'Weight', val: '3,993,142 WU'},
        {key: 'Minted', val: '6.25 BTC'},
        {key: 'Reward', val: '6.60485876 BTC'},
        {key: 'Mined on', val: '2023年2月12日 00:37:59'},
        {key: 'Height', val: '776,053'},
        {key: 'Confirmations', val: '4'},
        {key: 'Fee Range', val: '0-1,465 sat/vByte'},
        {key: 'Average Fee', val: '0.00010845'},
        {key: 'Median Fee', val: '0.00005189'},
        {key: 'Miner', val: 'Binance Pool'}
      ], // block基本信息

      transactions: [], // 交易数据

      blockModel: {
        height: 0
      }
    }
  },

  filters: {
    /**
     * 千分位格式化
     *
     * @param val 数字 非数字则原样返回
     **/
    fil_formatNumber(val) {
      return thousandFormatter(val)
    },

    /**
     * 格式化日期
     * @param val 日期值
     * @param fmt 格式 默认为yyyy-MM-dd
     **/
    fil_formatDate(val, fmt){
      console.log(val)
      return formatDate(new Date(val), fmt)
    },

    /**
     * 格式化hash显示方式
     * @param hash block hash
     **/
    fil_hash(val){
      return val ? (val.slice(0,4) + '-' + val.slice(-4)) : val
    }
  },

  computed: {},

  created() {
    this.hash = this.$route.params.hash;
    console.log('hash', this.hash)
    this.fetchData();
  },

  mounted(){

  },

  methods: {
    /**
     * 复制东西
     **/
    handleCopy(val, evt) {

    },

    /**
     * 查询block数据
     */
    fetchData() {
      let blockHash = '0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103';
      blockHash = '00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa';
      blockHash = this.hash;
      singleBlock(blockHash).then(resp => {
        console.log(resp)
        console.log(JSON.parse(JSON.stringify(resp.data)))
        const data = resp.data;
        this.transactions = data.tx.map(it => Object.assign(it, {_open: false}));
        delete data.tx;
        this.blockModel = data;
      }).catch(err => {
        console.log(err)
        this.failedQuery = true;
      })
    },

    debug() {
      let blockHash = '0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103';
      singleBlock(blockHash).then(resp => {
        console.log(resp)
      })
      return
      axios({
        url: "https://blockchain.info/rawblock/" + "0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103",
        method: "GET",
      }).then(resp => {
        console.log(resp)
      })
    }
  }
}
</script>

<style lang="scss">
.pg_col {

}

.bitcoin_box {
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  > .block_col {
    //width: 100%;
    flex: 1 1 0%;
    width: 50%;
  }
}

.block_info {
  width: 100%;
  border-right: 1px solid #eeeeee;
  background-color: #fff;

  .block_turn {
    > button {
      border: 0;
      outline: 0;
      height: 34px;
      width: 34px;
      text-align: center;
      line-height: 34px;
      border-radius: 34px;
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        background-color: #dddccc;
      }

      > img {
        display: block;
      }
    }
  }

  .block_meta {
    padding: 15px;

    .block_name {
      font-weight: 600;
      font-size: 1.79rem;
      color: #000;
    }

    .block_time {
      color: rgb(153, 153, 153);
      font-size: 0.875rem;
    }

    .block_tag {
      border: 0;
      outline: 0;
      background-color: rgba(140, 196, 81, 0.15);
      padding: 0px 0.9875rem;
      border-radius: 1rem;
      height: 30px;
      display: grid;
      place-items: center;
      margin: 0px 0.5rem 0px 0px;
      margin-top: 10px;
      margin-bottom: 10px;
      color: rgb(140, 196, 81);
      font-weight: bold;
    }
  }
}

.block_dtl {
  margin: 0 15px 0;

  .dtl_title {
    color: #000;
    font-weight: 600;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin: 13px 0;
  }

  .ul_dtl {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .dtl_kv {
      display: flex;
      width: 50%;
      padding: 4px;
      flex-direction: row;

      .dtl_key {
        flex: 2;
        display: inline-block;
        color: rgb(0, 0, 0);
        cursor: pointer;
        text-overflow: ellipsis;
        overflow-wrap: break-word;
        font-size: 14px;
        place-self: flex-start;
        margin-right: 3px;
      }

      .dtl_val {
        flex: 3;
        color: rgb(153, 153, 153);
        font-size: 0.875rem;
      }
    }
  }
}

.block_tx {
  width: 100%;
  background-color: #fff;

  .tx_filter {
    border-bottom: 1px solid #eeeeee;

    .filter_title {
      font-weight: 600;
      font-size: 14px;
      display: flex;
      flex-direction: row;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;
      margin: 13px;
    }

    .tx_actions {
      position: relative;
      flex-flow: row wrap;
      display: flex;
      font-size: 12px;
      gap: 10px 9px;
      margin: 0px 15px 15px;
    }

    .tx_filter_btn {
      display: flex;
      display: inline-block;
      cursor: pointer;
      flex-direction: row;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      background-color: rgb(238, 238, 238);
      color: rgb(0, 0, 0);
      opacity: 1;
      border: none;
      padding: 0px 14px;
      border-radius: 40px;
      font-weight: 400;
      font-size: 16px;
      margin: 0px 0px 4px;
      height: 34px;
      text-transform: capitalize;

      &:hover {
        background-color: rgb(204, 204, 204);
        transition: all 0.3s ease 0s;
      }

      &.active {
        background-color: #000;
        color: #fff;
      }
    }
  }

  .tx_list {
    .tx_li {
      width: 100%;
      border-bottom: 1px solid rgb(238, 238, 238);
      cursor: default;
      transition: all .3s;

      &:hover {
        background-color: #fafafa;
      }

      .tx_main {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem 0px;

        .tx_prefix {
          height: 40px;
          width: 40px;
          border-radius: 30px;
          align-self: flex-start;
          display: grid;
          place-content: center;
          user-select: none;
          pointer-events: none;
          font-size: 1rem;
          border: 1px solid rgb(238, 238, 238);
          background-color: transparent;
          margin: 0px 1rem;
        }

        .tx_info {
          flex: 1;
          display: flex;
          flex-direction: row;
          font-size: 0.85rem;;

          .tx_i_key {

          }

          .tx_i_val {
            font-size: 0.85rem;
            color: rgb(153, 153, 153);
            margin-right: 5px;
          }

          .tx_i_em {
            color: rgb(237, 155, 96);
          }

          .tx_i_em2 {
            color: rgb(244, 91, 105);
          }

          .tx_info_item {
            //flex: 1;
            flex-grow: 1;
          }

          .tx_info_1 {

          }

          .tx_info_2 {

          }

          .tx_info_3 {
            text-align: right;
          }
        }

        .tx_expand {
          place-items: center;
          height: 40px;
          width: 30px;
          cursor: pointer;
          margin: 0px 0.5rem;
          transition: transform 0.25s ease-in 0s;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          > img {
            transition: all .3s;
          }

          &.open {
            > img {
              transform: rotate(-180deg);
            }
          }
        }
      }

      .tx_more {
        display: flex;
        flex-direction: row;
        border-top: 1px solid #eee;
        //height: 200px;
        width: 100%;
        padding-top: 15px;

        .more_from {
          width: 50%;
          border-right: 1px solid #eeeeee;
        }

        .more_to {
          width: 50%;
        }

        .more_row {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 0 12px 15px;

          .more_row_logo {
            flex: 0 0 24px;
            width: 20px;
            height: 20px;
            display: block;

            > img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }

          .more_row_no {
            flex: 0 0 15px;
            width: 15px;
            text-align: center;
          }

          .more_row_main {
            flex: 1;
            //padding: 0 10px;
            font-size: .8rem;
            width: 1px;

            .more_top {
              display: flex;
              flex-direction: row;
              align-items: center;

              .hash {
                display: inline-block;
                color: rgb(237, 155, 96);
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }

            .more_btm {
              color: #000;

              .price {
                color: rgb(153, 153, 153);
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1490px) {
  .bitcoin_box {
    .block_col {
      flex: none;
      width: 100%;
    }
  }
}

@media screen and (max-width: 836px) {
  .bitcoin_box {
    .block_col {
      flex: none;
      width: 100%;
    }
  }
}

@media screen and (max-width: 500px) {

}

@media screen and (max-width: 450px) {
  .tx_info {
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;

    .tx_info_item {
      width: 100%;

      & + .tx_info_item {
        margin-top: 10px;
      }
    }

    .tx_info_3 {
      text-align: left !important;
    }
  }
}
</style>

<style lang="scss">
.tx_pagee {
  padding: 20px 0;
  text-align: center;

  button {
    display: inline-block;
    vertical-align: middle;
    border: 0;
    outline: 0;
    background-color: transparent;
    cursor: pointer;
    height: 34px;
    width: 34px;

    border-radius: 4rem;
    font-weight: 600;
    background-color: transparent;
    color: rgb(0, 0, 0);

    line-height: 34px;
    font-size: 14px;
    text-align: center;


    &:hover {
      background-color: #eeeeee;
    }

    &.current {
      background-color: #000;
      color: #fff;

      &:hover {
        background-color: #3b3b3b;
      }
    }
  }

  .pg_turn {
    font-family: "Inter var", sans-serif;
    letter-spacing: 0;
    font-size: 18px;
  }
}
</style>

<style lang="scss">
.crypto_assets {
  border-top: 1px solid #eee;
  background-color: #fff;

  .crypto_assets_title {
    font-size: 1.875rem;
    margin: 15px;
    font-weight: 600;
    color: #000;
  }

  .crypto_ul {

  }

  .crypto_li {
    padding: 8px 20px 8px 12px;
    border-radius: 100px;
    display: inline-flex;
    align-items: center;
    border: 1px solid rgb(238, 238, 238);
    margin: 0px 10px 10px 7px;

    .logo {
      display: block;
      width: 40px;
      height: 40px;
      background-color: #189ff0;
      border-radius: 40px;

      > img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .crypto_info {
      margin-left: 10px;

      .name {
        font-size: 14px;
        font-weight: 600;
        width: min-content;
        user-select: none;
        cursor: pointer;
        white-space: nowrap;
        display: flex;
        text-align: center;
        color: #000;
      }

      .sub_name {
        font-size: 0.875rem;
        color: rgb(153, 153, 153);
        font-weight: 600;
      }
    }
  }
}
</style>
