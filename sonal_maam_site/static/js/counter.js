$(document).ready(function () {
    $('.count').prop('disabled', true);
    $(document).on('click', '.plus', function () {
        $('.count').text(parseInt($('.count').text()) + 1);
    });
    $(document).on('click', '.minus', function () {
        $('.count').text(parseInt($('.count').text()) - 1);
        if ($('.count').text() == 0) {
            $('.count').text(1);
        }
    });
});