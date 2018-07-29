$(document).ready(function(){
    changeTringles();
});

function changeTringles() {
    var width = $(window).width() / 2;
    $('#triangle-bottomleft').css({ 
        'border-right': width + 'px solid transparent',
        'border-bottom': width * 0.8 + 'px solid white'
    })
    $('#triangle-bottomright').css({ 
        'border-left': width + 'px solid transparent',
        'border-bottom': width * 0.8 + 'px solid white'
    })
    $('.triangles').css({
        'margin-top': '-' + width/3 + 'px'
    })
}

$(window).on('resize', function(){ 
    changeTringles();
})
