function printSlogan(){
  var str = "临兵斗者皆阵列在前诛邪"
  const len = str.length;
  var idx = 0;
  function makeStr(){
    if(idx >= len) {
      console.log('\33[0m');
      return
    }
    let ti = idx === (len - 2) ? 500 : 100
    if(idx === len - 1) ti = 100;
    setTimeout(_=> {
      let pos = idx === 0 ? -1 : (idx * 5)
      let color = idx >= (len - 2) ? 41 : 46;
      console.log('\033[' + color + ';37m\33['+ 1 +'A\33['+ pos + 'C' + (' ' + str[idx] + ' ') + '')
      idx ++;
      makeStr();
    },ti)
  }
  makeStr();
}
printSlogan();
