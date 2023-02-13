function printSlogan(){
  var str = "地振高冈一派西山千古秀门朝大海三合河水万年流"
  const len = str.length;
  var idx = 0;
  function makeStr(){
    if(idx >= len) {
      console.log('\33[0m');
      return
    }
    let ti = idx === (len - 2) ? 500 : 100
    ti = 10;
    if(idx === len - 1) ti = 100;
    setTimeout(_=> {
      let pos = idx === 0 ? -1 : (idx * 5)
      let color = 46;
      if(idx == len / 2) console.log();
      if(idx == len / 2) {
        pos = pos - len / 2 * 5 - 2;
      }else if(idx > len /2){
        pos = pos - len / 2 * 5 ;
      }
      console.log('\033[' + color + ';36m\33['+ 1 +'A\33['+ pos + 'C' + (' ' + str[idx] + ' ') + '')
      idx ++;
      makeStr();
    },ti)
  }
  makeStr();
}
printSlogan();
