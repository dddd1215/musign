//메인 메뉴의 움직이는 바

$('.gnb li a').mouseenter(function(){
    let bar=$(this).position().left;
    console.log(bar)
    let widNum=$(this).width();
    $('.bar').animate({
        'left':bar+"px",
        'width':widNum+"px",
        'opcity':1
    })
})

$('.gnb').mouseleave(function(){
    $('.bar').animate({
        'left':0,
        'width':0,
        'opcity':0
    })
})


$('.animate').scrolla({
    mobile: true,
    once: false, 
    animateCssVersion: 4
});

//menuOpen

//$('.menuOpen .open').on('click',function(){})
$('.menuOpen .open').click(function(e){
    e.preventDefault();
    $('.menuOpen .menuWrap  ').addClass('on')
})
$('.menuWrap .close').click(function(e){
    e.preventDefault();
    $('.menuOpen .menuWrap  ').removeClass('on')
})

$('.menuWrap ul li').click(function(e){
    e.preventDefault();
    $('.menuOpen .menuWrap  ').removeClass('on')
})

//background color 변경
$(window).scroll(function(){
    //여기서 $(this)는 window를 의미
    let scrollTop=$(this).scrollTop();
    console.log(scrollTop)
    let offset=$('.service').offset().top - 400;
    if(scrollTop>offset){
        $('body').addClass('on')
    }else{
        $('body').removeClass('on')
    }
});