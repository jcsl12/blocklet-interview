<!--
 * 组件名称
 *
 * @Author: 大官人
 * @Date: 2023/2/13
 * @LastEditors: 大官人
 * @LastEditTime: 1991-02-09 00:00:00
 * @Description:
-->

<template>
  <div class="block_col block_tx">

    <div class="tx_filter">
      <div class="filter_title">Transactions</div>
      <div class="tx_actions">
        <button class="tx_filter_btn" @click="toggleOpen">展</button>
        <button class="tx_filter_btn ">Last</button>
        <button class="tx_filter_btn active">First</button>
        <button class="tx_filter_btn">Value</button>
        <button class="tx_filter_btn">Value</button>
        <button class="tx_filter_btn">Free</button>
        <button class="tx_filter_btn">Free</button>
      </div>
    </div>
    <ul class="tx_list">
      <li v-for="(it, idx) in txList" class="tx_li" @click="handleTxClick(it, idx)">
        <div class="tx_main">
          <div class="tx_prefix">
            TX
          </div>
          <div class="tx_info">
            <div class="tx_info_item tx_info_1">
              <div>
                <span class="tx_i_key">0</span>
                <span class="tx_i_val">ID:</span>
                <span class="tx_i_em">{{ it.hash | fil_hash }}</span>
              </div>
              <div class="tx_i_val">{{ it.time |  fil_formatDate('MM/dd/yyyy,  HH:mm:ss') }}11/24/2011, 10:10:10</div>
            </div>
            <div class="tx_info_item tx_info_2">
              <div>
                <span>From</span>
                <span>Block Reward</span>
              </div>
              <div>
                <span>To</span>
                <span>1KUC-viGy</span>
              </div>
            </div>
            <div class="tx_info_item tx_info_3">
              <div>
                <span>50.00200000 BTC</span>
                <span>•</span>
                <span>$122.00</span>
              </div>
              <div>
                <div>
                  <span class="tx_i_em2">Fee</span>
                  <span>0 Sats </span>
                  <span>•</span>
                  <span>$0.00</span>
                </div>
              </div>
            </div>
          </div>
          <div :class="{open: it._open}" class="tx_expand">
            <img :src="require('@/assets/icon-arrow-down.svg')" alt="" class="">
          </div>
        </div>
        <div v-if="it._open" class="tx_more">
          <div class="more_from">
            <div v-for="i in [1,2,3]" class="more_row">
              <div class="more_row_logo"><img :src="require('@/assets/logo.svg')" alt=""></div>
              <div class="more_row_no">1</div>
              <div class="more_row_main">
                <div class="more_top">
                  <div class="hash">bc1qq5l34rvg7lzynr2cv8m3jf0cne8au0g6kn7s4x</div>
                  <div class="g_text_copy"></div>
                  <div class="g_text_copy"></div>
                </div>
                <div class="more_btm">
                  0.00851770
                  <span class="">BTC</span>
                  <span class="price">
                            <span class="">•</span>
                            $194.21
                          </span>
                </div>
              </div>
            </div>
          </div>
          <div class="more_to">
            <div v-for="i in [1,2,3]" class="more_row">
              <div class="more_row_logo"><img :src="require('@/assets/logo.svg')" alt=""></div>
              <div class="more_row_no">1</div>
              <div class="more_row_main">
                <div class="more_top">
                  <div class="hash">bc1qq5l34rvg7lzynr2cv8m3jf0cne8au0g6kn7s4x</div>
                  <div class="g_text_copy"></div>
                  <div class="g_text_copy"></div>
                </div>
                <div class="more_btm">
                  0.00851770
                  <span class="">BTC</span>
                  <span class="price">
                            <span class="">•</span>
                            $194.21
                          </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="tx_pagee" >
      <button class="pg_turn" @click="handlePrev" v-if="pagee.total && pagee.current != 1">&lt;</button>
<!--      <button class="" @click="handlePage()">1</button>-->
      <button class="current">{{pagee.current}}</button>
      <button class="pg_turn" @click="handleNext" v-if="pagee.total && pagee.current < pagee.pages">&gt;</button>
    </div>
  </div>
</template>

<script>
import {thousandFormatter} from "@/utils/number.util";
import {formatDate} from "@/system/filters/date";

/**
 * 组件描述
 * @desc
 *
 **/

export default {
  name: "cpnTxList",

  components: {},

  data() {
    return {
      txList: [ ], // block交易数据
      pagee: { // 分页
        current: 1,
        size: 10,
        total: 0
      }
    }
  },

  props: {
    transactions: {
      type: [Array, null],
      default: () => []
    }
  },

  computed: {},

  mixins: [],

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
    fil_formatDate(val, fmt) {
      return formatDate(new Date(val), fmt)
    },

    /**
     * 格式化hash显示方式
     * @param hash block hash
     **/
    fil_hash(val) {
      return val ? (val.slice(0, 4) + '-' + val.slice(-4)) : val
    }
  },

  watch:{
    transactions: {
      deep: true,
      handler(n, o){
        this.initDomain();
      }
    }
  },

  created() {
  },

  mounted() {
    this.initDomain();
  },

  methods: {
    initDomain(){
      this.pagee = {
        current: 1,
        size: 10,
        total: this.transactions.length,
        pages: Math.ceil(this.transactions.length / 10)
      };
      this.onPagee();
      return

      this.txList = this.transactions.slice(1, 10);
    },

    handleTxClick(row, index) {
      this.$set(this.txList, index, Object.assign(row, {_open: !row._open}))
    },

    /**
     * 展开交易详情
     */
    toggleOpen() {
      const {txList} = this;
      if (txList.length > txList.filter(it => it._open)) {
        this.txList = txList.map(it => Object.assign({}, it, {_open: true}))
      } else {
        this.txList = txList.map(it => Object.assign({}, it, {_open: false}))
      }
    },

    /* --*-- */
    handlePrev(){
      if(this.pagee.current == 1) return
      this.pagee.current = this.pagee.current - 1;
      this.onPagee();
    },
    handleNext(){
      if(this.pagee.current >= this.pagee.total) return;
      this.pagee.current = this.pagee.current + 1;
      this.onPagee();
    },
    handlePage(val){
      this.pagee.current = val;
      this.onPagee();
    },
    onPagee(){
      const {pagee, transactions} = this;
      console.log(JSON.parse(JSON.stringify(this.pagee)))
      this.txList = transactions.slice((pagee.current - 1) * pagee.size, Math.min(pagee.current * pagee.size, transactions.length));
    }
  }
}

</script>

