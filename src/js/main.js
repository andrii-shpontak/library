import './lib/lib';

$('button').click(function(content) {
    $('div').eq(1).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.more'));
// console.log($('.some').closest('.findMe'));
$('button').fadeIn(1800);

// console.log($('button').html('Hello!'));