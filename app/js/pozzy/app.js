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

/*function*/
$(function(){
  var $functionAll = $(".js-pozzy-function__all");
  var $functiontarget = $(".js-pozzy-function__target");
  var $functionOther = $(".js-pozzy-function__other");
  var $pinAll = $(".pozzy-l-map-area p");
  var $pinLarge = $(".pozzy-c__pin--large");
  var $pinMedium = $(".pozzy-c__pin--medium");
  var $pinSmall = $(".pozzy-c__pin--small");
  $functionAll.on("click" , function(){
    $(this).toggleClass("is-hide");
    $pinAll.toggleClass("is-hide");
  });
  $functiontarget.on("click" , function(){
    $(this).toggleClass("is-hide");
    $pinLarge.toggleClass("is-hide");
    $pinMedium.toggleClass("is-hide");
  });
  $functionOther.on("click" , function(){
    $(this).toggleClass("is-hide");
    $pinSmall.toggleClass("is-hide");
  });
});

/*carousel*/
$(function(){
    slideWidth = $(".js-pozzy__slide").outerWidth();
    slideLength = $(".js-pozzy__slide").length;
    result = slideWidth * slideLength + 6
    $(".pozzy-c-carousel-body").width(result + "px");
});

//prev
$(function(){
    $(".js-pozzy__prev").click(function(){
        var clone = $(".js-pozzy-current .js-pozzy__pin:first").clone(true);
        $(".js-pozzy-current .js-pozzy__pin:first").remove();
        clone.clone(true).insertAfter(".js-pozzy-current .js-pozzy__pin:last");
        $(".js-pozzy-current .js-pozzy__pin:first").addClass("pozzy-c__pin--large").removeClass("pozzy-c__pin--medium");
        $(".js-pozzy-current .js-pozzy__pin:gt(0)").addClass("pozzy-c__pin--medium").removeClass("pozzy-c__pin--large");
    });
});

$(function(){
    $(".js-pozzy__prev").click(function(){
        var clone = $(".js-pozzy-carousel .js-pozzy__slide:first").clone(true).removeClass("left");
        $(".js-pozzy-carousel .js-pozzy__slide:first").remove();
        clone.clone(true).insertAfter(".js-pozzy-carousel .js-pozzy__slide:last");
    });
});

//next
$(function(){
    $(".js-pozzy__next").click(function(){
        var clone = $(".js-pozzy-current .js-pozzy__pin:last").clone(true);
        $(".js-pozzy-current .js-pozzy__pin:last").remove();
        clone.clone(true).insertBefore(".js-pozzy-current .js-pozzy__pin:first");
        $(".js-pozzy-current .js-pozzy__pin:first").addClass("pozzy-c__pin--large").removeClass("pozzy-c__pin--medium");
        $(".js-pozzy-current .js-pozzy__pin:gt(0)").addClass("pozzy-c__pin--medium").removeClass("pozzy-c__pin--large");
    });
});

$(function(){
    $(".js-pozzy__next").click(function(){
        var clone = $(".js-pozzy-carousel .js-pozzy__slide:last").clone(true);
        $(".js-pozzy-carousel .js-pozzy__slide:last").remove();
        clone.clone(true).insertBefore(".js-pozzy-carousel .js-pozzy__slide:first");
    });
});

//disabled
$(function(){
   mapMarker = $(".js-pozzy-current .js-pozzy__pin").length;
    if( mapMarker <= 1) {
        $(".js-pozzy__prev , .js-pozzy__next").prop("disabled", true);
    }
});
