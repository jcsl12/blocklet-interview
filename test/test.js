let str = "123456"
// 零宽断言
console.info( str.replace(/d{1,3}(?=(d{3})+$)/g,function(s){
    return s+','
}) )

// 子项
console.info( str.replace(/(d{1,3})(?=(d{3})+$)/g,function($1){
    return $1=$1+','
}))

// 利用字符串和数组方法
console.info( str.split("").reverse().join("").replace(/(d{3})+?/g,function(s){
    return s+",";
}).replace(/,$/,"").split("").reverse().join(""))


// 利用循环拼接字符串每隔3个加一个分隔符
var result="",
    index = 0,
    len = str.length-1;
while(len>=0) {
    index%3===0&&index!==0 ? result+=","+str[len] : result+=str[len];
    len--;
    index++;
};
result=result.split("").reverse().join("");
console.info(result);

function format_with_substring(number) {
    // 数字转为字符串，并按照 .分割
    let arr = (number + '').split('.');
    let int = arr[0] + '';
    let fraction = arr[1] || '';
    // 多余的位数
    let f = int.length % 3;
    // 获取多余的位数，f可能是0， 即r可能是空字符串
    let r = int.substring(0, f);
    // 每三位添加','金额对应的字符
    for (let i = 0; i < Math.floor(int.length / 3); i++) {
        r += ',' + int.substring(f + i * 3, f + (i + 1) * 3);
    }
    // 多余的位数，上面
    if (f === 0) {
        r = r.substring(1);
    }
    // 调整部分和小数部分拼接
    return r + (!!fraction ? '.' + fraction : '');
}
console.log(format_with_substring(12112123313.78));
