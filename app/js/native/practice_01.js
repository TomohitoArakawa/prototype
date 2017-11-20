function colorChange(){
  // elmClass = document.getElementsByClassName('js-text');
  // elmClass[0].style.color = 'red';
  // elmTag = document.getElementsByTagName('div');
  // elmTag[0].style.color = 'yellow';
  // document.querySelector('.js-text').style.color = 'green';
  var elm = document.querySelectorAll('.js-text');
  for (var i = 0; i < elm.length; i++) {
    elm[i].style.color = 'red';
  }
  document.getElementById('js-text').style.color = 'blue';
}

function classChange() {
  var elm = document.querySelectorAll('.js-number');
  for (var i = 0; i < elm.length; i++) {
    elm[i].classList.toggle('is-active');
  }
}

// parentElement.insertBefore(newElement, referenceElement)
function elementAdd() {
  var newElm = document.createElement('span'),
  parentElm = document.querySelector('.js-parent'),
  referenceElm = document.querySelector('.js-square');
  newElm.classList.add('native-square');
  parentElm.insertBefore(newElm , referenceElm);
  // parentElm.insertBefore(newElm , referenceElm.nextSibling);
}

function elmentRemove() {
  var removeElm = document.querySelector('.native-square');
  removeElm.parentNode.removeChild(removeElm);
}

//変数の巻き上げ
console.log(x === undefined); // "true" が記録される
var x = 3;

//undefined 値が返される
var myvar = "my value";

(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();

//グローバール変数・ローカル変数
var x = 10;
function alertNumber() {
  var x = 5;
  alert(x);
}
// alertNumber();

//変数のブロックスコープlet
var y = 1;
{
  let y = 10;
}
console.log(y);

//定数const
const constant = 5;
// var constant = 10; // SyntaxError
console.log(constant);

//if文
var z = 4;
if (z === 3) {
  console.log('true');
} else {
  console.log('false');
}
