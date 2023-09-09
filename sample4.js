let alertString;

alertString = addString("webcamp");

alert(alertString);

function addString(strA){
  let addStr = "Hello" + strA;
  return addStr;
}


// 入力ダイアログで値を入力する
let promptStr = prompt('何か好きな文字を入力してください。');

alert(promptStr);
