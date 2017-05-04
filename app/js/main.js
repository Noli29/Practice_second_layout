// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").animate({left: '250px'});
//     });
// });

// $(document).ready(function() {
//     $(".item").click(function(){
//         $(".btn-blue").animate({
//             margin-bottom: '250px',
//             opacity: '1'
//         });
//     });
// });

// $(document).ready(function($) {
//     $(".item").hover(function(){
//     //     $(this).find('.btn-blue').stop().css('marginTop', '-250px', 'opacity', '0');
//     // }).mouseenter(function(){
//         $(this).find('.btn-blue').animate({ marginTop: '-200px', opacity: 1 }, 500);
//     });
// });
//

$(document).ready(function(){
    $(".item").hover(function() {
        $(this).find('.btn-blue').stop().animate({ marginTop: '-190px', opacity: 1}, 500);
        $(this).find('.btn-black').stop().animate({ marginTop: '-190px', opacity: 1}, 500);
        $(this).find('.btn-white').stop().animate({ marginTop: '-190px', opacity: 1}, 500);
    },function() {
        $(this).find('.btn-blue').stop().animate({ marginTop: '-245px', opacity: 0 }, 100);
        $(this).find('.btn-black').stop().animate({ marginTop: '-245px', opacity: 0 }, 100);
        $(this).find('.btn-white').stop().animate({ marginTop: '-245px', opacity: 0 }, 100);
    });
});