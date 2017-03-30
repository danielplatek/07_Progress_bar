$(function init(){
    
    var $buttons = $('button');

    $($buttons).on('click', function () {
        var $progressBar       = $(this).data('number');
        var $progressBarColor  = $(this).data('color');
        var $progressBarWidth  = $(this).data('width');
        var $span              = $('#' + $progressBar).find('span');

        $($span).removeClass('green orange blue')
               .addClass($progressBarColor)
               .animate({width: $progressBarWidth}, 1000);
    })
});