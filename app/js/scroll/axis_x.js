// window.onload = function() {
//   var elmArray = document.querySelectorAll('.scroll_x-l-content__inner div');
//   var elmArrayLength = elmArray.length;
//   for (var i = 0; i < elmArrayLength; i++) {
//
//   }
// }
// function scrollAxisFirst() {
//   elm = document.querySelector('.js-axis--second');
//   elm.focus();
// }
// function scrollAxisSecond() {
//   elm = document.querySelector('.js-axis--third');
//   elm.focus();
// }
// function scrollAxisThird() {
//   elm = document.querySelector('.js-axis--fourth');
//   elm.focus();
// }
// function scrollAxisFourth() {
//   elm = document.querySelector('.js-axis--fifth');
//   elm.focus();
// }
// function scrollAxisFifth() {
//   elm = document.querySelector('.js-axis--first');
//   elm.focus();
// }

$(".js-axis").on('click' , function(){
	var targetX = $(this).offset().left;
	$("html,body").animate({scrollLeft:targetX});
});
