$(function () {
    $('.zg_fx li').each(function (index) {
        $(this).click(function () {
            $('.zg_fx').css('height','0.86rem');
            $(this).parents('.zg_fx').css('height','1.95rem')
            $('.zg_fx li').children('p').removeClass('on').eq(index).addClass('on');
            $('.zg_fx li').children('div').hide().eq(index).show()
        })
    })
})