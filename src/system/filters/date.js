import { formatDate as _formatDate } from '@/system/utils/Date'

export function filterDemo(v, opt) {
  console.log('@v', v)
  console.log('@opt', opt)
  v.name = 'blue'
  v.cars[1] = 'bike'
  return 'zxxx'
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
 * @return { String } 返回格式化的或默认配置
 */

export function formatDate(d, fmt = 'yyyy-MM-dd', dft = '--') {
  return _formatDate(d, fmt, dft)
}


//《明歌》@文嘉 明日复明日 明日何其多 我生待明日 万事成蹉跎 > 日它
