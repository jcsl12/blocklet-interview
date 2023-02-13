/**
 * JS 零值
 * 0 | "" | null | undefined | NaN
 **/

/**
 * 获取数据类型
 * @param v { any } 任意值
 * @desc 通过Object的原型方法返回对象的[[Class]], 格式为[object xxx] 截取xxx作为返回值
 * @return { String }  Number | String | Boolean | Object | Array | Date | Undefined | Null | Function | Error | Window | HTMLDocument | Symbol}
 **/
export function getType(v) {

  let t = Object.prototype.toString.call(v)

  return t.replace('[object ', '').replace(']', '')
}

/**
 * 判断是否空值
 * @desc
 * @param v { any }
 *  当 null  | undefined | "" | "\b" 时为true，其他为false
 *
 * @return { Boolean }
 **/
export function isBlank(v) {

  if(v == null) return false;

  let type = getType(v);

  if(type === "String") return !v.trim();

}


/**
 * 判断是否零值
 * 此方法用不上，判断零值可以使用 !!value 方式判断
 **/
export function isZeroMode(v){}

/**
 * 判断是否字符串
 * @param v { any }
 * @return Boolean
 **/
export function isString(v){
  return getType(v) === "String";
}

export function isBoolean(v){

}

export function isObject(v){

}

export function isArray(v){

}

export function isDate(v){

}


// * @return { String }  Number | String | Boolean | Object | Array | Date | Undefined | Null | Function | Error | Window | HTMLDocument | Symbol






















//
