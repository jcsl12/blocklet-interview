
import {findMatched} from '../utils/ArrayMap'

/**
 * 根据对象数组渲染
 * @desc 规则如下
 *  若存在多个匹配，使用第一个
 * @param compVal { any } 要匹配的值
 * @param dict { Array } 对象数组
 * @param compKey { any } dict.element要匹配的键
 * @param resKey { any } dict.element中匹配到的取值键
 * @param dft="" { any } 未匹配到或出现异常时使用的默认值
 **/
export function renderByDict(compVal, dict, compKey, resKey, dft=""){
  if(!Array.isArray(dict)) return dft;
  let matched = findMatched(dict, compKey, compVal, {
    strict: false
  })
  return matched.length ? matched[0].value[resKey] : dft
}

export function findOne(dict, fn){
  for(let i = 0, len = dict.length; i < len; i ++){

  }
}
