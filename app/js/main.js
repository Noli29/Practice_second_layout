var allowScroll = true;

function initScrolls(){
    var links = $("[to]");
    links.on("click",function(){
        to($(this).attr("to"));
    });
}

function allowScrolling(){
    allowScroll = true;
}

function to(element){
    if(allowScroll) {
        allowScroll = false;
        $("html, body").animate({
            scrollTop: $("#" + element).offset().top - 50
        }, 500);
        setTimeout(allowScrolling,600);
    }
    return false;
}
