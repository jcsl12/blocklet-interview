export function thousandFormatter(number){
    if(Number.isNaN(number)) return number;
    let arr = (number + '').split('.');
    let int = arr[0] + '';
    let fraction = arr[1] || '';
    let f = int.length % 3;
    let r = int.substring(0, f);
    for (let i = 0; i < Math.floor(int.length / 3); i++) {
        r += ',' + int.substring(f + i * 3, f + (i + 1) * 3);
    }
    if (f === 0) {
        r = r.substring(1);
    }
    return r + (!!fraction ? '.' + fraction : '');
}
