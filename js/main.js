import { dataPets } from "./pet/data-pets.js";



////////////////////////////////////////////////////
////////////////////// PET
////////////////////////////////////////////////////

for (var i = 0; i < dataPets.length; i++){
    var obj = dataPets[i];
    $( "#petsList" ).append(`
        <div class="h-52 w-full bg-gray-300 pet-checked relative group">
            <div onclick="addPetsToList(`+obj.id+`)" class="addPet bg-green-500 h-10 w-10 rounded-xl hidden group-hover:flex items-center justify-center absolute -top-5 -right-5"><svg class="h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></div>
            <img src=""/>
            <span>`+obj.name+`</span>
        </div>
    ` );
}

////////////////////////////////////////////////////
////////////////////// HEADER
////////////////////////////////////////////////////

let $header = $('header');
let $lastScrollTop = 0;
let $isSticky = $('.is-sticky');

$(document).ready(function () {
    let isScrolled = $(window).scrollTop();
    if(isScrolled > $header.height()){
        setTimeout(function() {
            $header.addClass('-translate-y-[11.5rem]');
            $isSticky.removeClass('top-52');
            $isSticky.addClass('lg:sticky top-16');
        }, 100);
    }
});

$(window).scroll(function () {
    let st = $(this).scrollTop();
    if ((st > $lastScrollTop) && ($(this).scrollTop() > $header.height())){
        $header.addClass('-translate-y-[11.5rem]');
        $isSticky.removeClass('top-52');
        $isSticky.addClass('lg:sticky top-16');
    } else {
        $header.removeClass('-translate-y-[11.5rem]');
        $isSticky.removeClass('top-16');
        $isSticky.addClass('lg:sticky top-52');
    }
    $lastScrollTop = st;
});

