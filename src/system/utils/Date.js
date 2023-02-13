import { isString } from '@/system/utils/DataType'

/***
 * 日期格式化
 * @param d {Date}
 * @param fmt {String}
 * @returns {void | string}
 */
export function formatDate1(d,fmt = "yyyy-MM-dd"){
  var o = {
    "M+": d.getMonth() + 1, //月份
    "d+": d.getDate(), //日
    "h+": d.getHours() % 12 == 0 ? 12 : d.getHours() % 12, //小时
    "H+": d.getHours(), //小时
    "m+": d.getMinutes(), //分
    "s+": d.getSeconds(), //秒
    "q+": Math.floor((d.getMonth() + 3) / 3), //季度
    "S": d.getMilliseconds() //毫秒
  };
  var week = {
    "0": "日",
    "1": "一",
    "2": "二",
    "3": "三",
    "4": "四",
    "5": "五",
    "6": "六"
    // "0": "/u65e5",
    // "1": "/u4e00",
    // "2": "/u4e8c",
    // "3": "/u4e09",
    // "4": "/u56db",
    // "5": "/u4e94",
    // "6": "/u516d"
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[d.getDay() + ""]);
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}


function __formater(d, fmt = 'yyyy-MM-dd') {
  var o = {
    'M+': d.getMonth() + 1, //月份
    'd+': d.getDate(), //日
    'h+': d.getHours() % 12 == 0 ? 12 : d.getHours() % 12, //小时
    'H+': d.getHours(), //小时
    'm+': d.getMinutes(), //分
    's+': d.getSeconds(), //秒
    'q+': Math.floor((d.getMonth() + 3) / 3), //季度
    'S': d.getMilliseconds() //毫秒
  }
  var week = {
    '0': '日',
    '1': '一',
    '2': '二',
    '3': '三',
    '4': '四',
    '5': '五',
    '6': '六'
    // "0": "/u65e5",
    // "1": "/u4e00",
    // "2": "/u4e8c",
    // "3": "/u4e09",
    // "4": "/u56db",
    // "5": "/u4e94",
    // "6": "/u516d"
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') + week[d.getDay() + ''])
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

/***
 * 日期时间格式化
 * @desc
 *  此方法兼容 IOS & Mac 若传入的是字符串且其中包含"-" 则需要转化为"/"，但是日期为ISOString字符串时无需替换
 *  若非有效日期格式，则返回默认值
 *
 * @param d {Date} 为filter默认传入的值
 * @param fmt { Date | Number | String} 第二个参数 目标格式
 * @param dft = "--" { String} 当出现异常情况使用
 * @return { String } 返回格式化的或默认配置DataType.js
 */

export function formatDate(d, fmt = 'yyyy-MM-dd', dft="--") {

  if(d === undefined || d === null) return dft;

  let t = new Date(isString(d) ? d.indexOf("T") < 0 ? d.replace(/-/g, "/") : d: d);

  return Number.isNaN(t.getTime()) ? dft : __formater(t, fmt);
}


/**
 * 向目标时间倒计时
 * @param to { Date } 目标时间
 * @param onFinish { Function } 执行回调
 * @onFinish.args
 * {
 *   finished: Boolean,
 *   string: String | undefined
 * }
 * @return class
 **/
export function countTo(to, onFinish) {

  let counter = function(){
    const TO_MILL = to.getTime()

    if (Number.isNaN(TO_MILL)) {
      throw new Error('目标非有效日期')
    }

    let timer = setInterval(_ => {
      const NOW = Date.now()
      let mill = TO_MILL - NOW
      console.log(mill)
      let h = Math.floor(mill / 1000 / 60 / 60)
      h = h < 10 ? '0' + h : h
      let m = Math.floor(mill / 1000 / 60 % 60)
      m = m < 10 ? '0' + m : m
      let s = Math.floor(mill / 1000 % 60)
      s = s < 10 ? '0' + s : s

      onFinish && onFinish({
        finished: false,
        string: h + ':' + m + ':' + s
      })

      if (mill <=0) {
        clearInterval(timer)
        onFinish && onFinish({
          finished: true,
        })
        return
      }
    },1000);

    this.close = function(){
      if(timer) clearInterval(timer)
    }
  }
  return new counter();

}

