function checkform(){
  var score = 0;
  var corret = ["封装性","继承性","多态性"];
  judgeNull();

  var totalInput = getInput1("fullName", "统一建模语言") + getInput2("property1", corret) +
    getInput2("property2", corret) + getInput2("property3", corret);

  var totalSelete = getSelete("abc", "B") + getSelete("cba", "C");

  var totalMoreSelete = getMoreSelete("classify", "A,B,D") + getMoreSelete("comprise", "A,B,C");

  var totalJudge = getJudge("judge1", "false") + getJudge("judge2", "true");

  var totalText = getText('talk');

  score = totalSelete + totalInput + totalMoreSelete + totalText + totalJudge;

  document.getElementById("print").value = score;

}

function judgeNull(){
  var personName = document.getElementById("name").value;
  var personId = document.getElementById("id").value;
  var personClass = document.getElementById("class").value;
  if(personName === ''|| personId === '' || personClass === ''){
    alert("Please improve personal information.");
  }
}

function getInput1(input, anwser) {
  var score = 0;
  var inputAnwser = document.getElementById(input).value;

  if (inputAnwser === anwser) {
    score += 15;
  }
  return score;
}

function getInput2(input, corret) {
  var score = 0;
  var inputAnwser = document.getElementById(input).value;

  for (var i = 0; i < corret.length; i++) {
    if (inputAnwser === corret[i] ) {
      score += 5;
    }
  }
  return score;
}

function getSelete(selete, anwser) {
  var score = 0;
  var radio = document.getElementsByName(selete);

  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked === true && radio[i].value === anwser) {
      score = 5;
    }
  }
  return score;
}

function getMoreSelete(moreSelete, anwser) {
  var array = [];
  var score = 0;
  var moreSeleteAnwser = document.getElementsByName(moreSelete);

  for (var i = 0; i < moreSeleteAnwser.length; i++) {
    if (moreSeleteAnwser[i].checked === true) {
      array.push(moreSeleteAnwser[i].value);
    }
  }
  alert(array.toString());
  if (array.toString() === anwser) {
    score += 10;
  }

  return score;
}

function getJudge(judge, anwser) {
  var score = 0;
  var judgeAnwser = document.getElementsByName(judge);

  for (var i = 0; i < judgeAnwser.length; i++) {
    if (judgeAnwser[i].checked === true && judgeAnwser[i].value === anwser) {
      score = 10;
    }
  }
  return score;
}

function getText() {
  var score = 0;
  var input = document.getElementById("talk").value;

  if (input === "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种" +
                "表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。") {
    score = 20;
  }
  return score;
}

// var score = 0;
// var completion1 = document.getElementById("fullName");
// if(completion1.value === "统一建模语言") {
//   score += 5;
// }
//
// var completion2 = document.getElementById("property1");
// if(completion2.value === "封装性" || "继承性" || "多态性") {
//   score += 5;
// }
//
// var completion3 = document.getElementById("property2");
// if(completion3.value === "封装性" || "继承性" || "多态性") {
//   score += 5;
// }
//
// var completion4 = document.getElementById("property3");
// if(completion4.value === "封装性" || "继承性" || "多态性") {
//   score += 5;
// }
//
// var completion5 = document.getElementById("relation0");
// if(completion5.value === 'B'){
//   score += 10;
// }
//
// var completion6 = document.getElementById("relation1");
// if(completion6.value === 'C'){
//   score += 10;
// }
//
// var completion7 = document.getElementById("classify1" && 'classify2' && "classify4");
// if(completion6.value === 'ABD'){
//   score += 10;
// }
//
// document.getElementById("score").innerHTML = score;
// return score;
// }
