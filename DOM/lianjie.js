function checkform(){
  var score = 0;
  var corret = ["封装性","继承性","多态性"];
  judgeNull();

  var totalInput = getInput1("fullName", "统一建模语言") + getInput2("property1", corret) +
      getInput2("property2", corret) + getInput2("property3", corret);

  var totalSelete = getSelete("relation0", "B") + getSelete("sustain0", "C");

  var totalMoreSelete = getMoreSelete("sustain0", "A,B,D") + getDuoSelete("classify0", "A,B,C");

  var totalJudge = getJudge("judge1", "false") + getJudge("judge2", "true");

  var totalText = getText('talk');

  score = totalSelete + totalMoreSelete + totalInput + totalText + totalJudge;

  document.getElementById("print").innerHTML = score;

}

function judgeNull(){
  var personName = document.getElementById("name");
  var personId = document.getElementById("id");
  var personClass = document.getElementById("class");
  if(personName === ''|| personId === '' || personClass === ''){
    alert("Please improve personal information.");
  }
}

function getInput1(input, anwser) {
  var total = 0;
  var inputAnwser = document.getElementById(input).value;

  if (inputAnwser === anwser) {
    total = 15;
  }

  return total;
}

function getInput2(input, corret) {
  var total = 0;
  var inputAnwser = document.getElementById(input).value;

  for (var i = 0; i < corret.length; i++) {
    if (inputAnwser === corret[i]) {
      total += 5;
    }
  }
  return total;
}

function getSelete(selete, anwser) {
  var total = 0;
  var radio = document.getElementsById(selete);

  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked === true && radio[i].value === anwser) {
      total = 5;
    }
  }
  return total;
}

function getDuoSelete(moreSelete, anwser) {
  var array = [];
  var total = 0;
  var moreSeleteAnwser = document.getElementsById(moreSelete);

  for (var i = 0; i < duoSeleteAnwser.length; i++) {
    if (duoSeleteAnwser[i].checked === true) {
      array.push(moreSeleteAnwser[i].value);
    }
  }

  if (array.toString() === anwser) {
    total = 10;
  }

  return total;
}

function getJudge(judge, anwser) {
  var total = 0;
  var judgeAnwser = document.getElementsByName(judge);

  for (var i = 0; i < judgeAnwser.length; i++) {
    if (judgeAnwser[i].checked === true && judgeAnwser[i].value === anwser) {
      total = 10;
    }
  }
  return total;
}

function getText() {
  var total = 0;
  var input = document.getElementById("").value;

  if (input === "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。") {
    total = 20;
  }
  return total;
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
