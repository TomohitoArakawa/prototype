// $(function(){
//     pcVeiw = "width=1300"
//     spVeiw = "width=device-width,initial-scale=1"
//     if ((navigator.userAgent.indexOf("iPhone") > 0 &&
//         navigator.userAgent.indexOf("iPad") == -1) ||
//         navigator.userAgent.indexOf("iPod") > 0 ||
//         navigator.userAgent.indexOf("Android") > 0) {
//         $("body").addClass("sp");
//         $("meta[name="viewport"]").attr("content", spVeiw);
//     } else {
//         $("body").addClass("pc");
//         $("meta[name="viewport"]").attr("content", pcVeiw);
//     }
// });

/*js-pozzy-current*/
// $(function(){
//     $(".js-pozzy-current .js-pozzy__pin:first").addClass("l");
//     $(".js-pozzy-current .js-pozzy__pin:gt(0)").addClass("m");
// });

/*carousel*/
$(function(){
    slideWidth = $(".js-pozzy__slide").outerWidth();
    slideLength = $(".js-pozzy__slide").length;
    result = slideWidth * slideLength + 6
    $(".pozzy-c-carousel-body").width(result + "px");
});

/*showHide*/
function showHide() {
  $(".js-pozzy-function__all").on("click" , function(){
    $(this).toggleClass("is-hide");
    $(".pozzy-l-map-area p").toggleClass("is-hide");
  });
  $(".js-pozzy-function__target").on("click" , function(){
    $(this).toggleClass("is-hide");
    $(".js-pozzy__pin").toggleClass("is-hide");
  });
  $(".js-pozzy-function__other").on("click" , function(){
    $(this).toggleClass("is-hide");
    $(".pozzy-c__pin--small").toggleClass("is-hide");
  });
}

$(function(){
  showHide();
  //prev
  $(".js-pozzy__prev").on("click" , function(){
    var $clonePinFirst = $(".js-pozzy-current .js-pozzy__pin:first").clone(true);
    var $cloneSlideFirst = $(".js-pozzy-carousel .js-pozzy__slide:first").clone(true);
    //pinの処理
    $(".js-pozzy-current .js-pozzy__pin:first").remove();
    $clonePinFirst.insertAfter(".js-pozzy-current .js-pozzy__pin:last");
    $(".js-pozzy-current .js-pozzy__pin:first").addClass("pozzy-c__pin--large").removeClass("pozzy-c__pin--medium");
    $(".js-pozzy-current .js-pozzy__pin:gt(0)").addClass("pozzy-c__pin--medium").removeClass("pozzy-c__pin--large");
    //slideの処理
    $(".js-pozzy-carousel .js-pozzy__slide:first").remove();
    $cloneSlideFirst.insertAfter(".js-pozzy-carousel .js-pozzy__slide:last");
    showHide();
  });
  //next
  $(".js-pozzy__next").on("click" , function(){
    var $clonePinLast = $(".js-pozzy-current .js-pozzy__pin:last").clone(true);
    var $cloneSlideLast = $(".js-pozzy-carousel .js-pozzy__slide:last").clone(true);
    //pinの処理
    $(".js-pozzy-current .js-pozzy__pin:last").remove();
    $clonePinLast.insertBefore(".js-pozzy-current .js-pozzy__pin:first");
    $(".js-pozzy-current .js-pozzy__pin:first").addClass("pozzy-c__pin--large").removeClass("pozzy-c__pin--medium");
    $(".js-pozzy-current .js-pozzy__pin:gt(0)").addClass("pozzy-c__pin--medium").removeClass("pozzy-c__pin--large");
    //slideの処理
    $(".js-pozzy-carousel .js-pozzy__slide:last").remove();
    $cloneSlideLast.insertBefore(".js-pozzy-carousel .js-pozzy__slide:first");
    showHide();
  });
});

//disabled
$(function(){
  mapMarker = $(".js-pozzy-current .js-pozzy__pin").length;
  if( mapMarker <= 1) {
    $(".js-pozzy__prev , .js-pozzy__next").prop("disabled", true);
  }
});
