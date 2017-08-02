
$(function () {

    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
    });

    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
        $('.nav-dropdown').hide();
    });


    var width = $('.main-body').width();
    $('.details').css({'width': width});
    $('.sidebar').css({'height': $(document).height()});

    if ($(window).width()>=855){
        $('.navigation').css({'position':'fixed','box-shadow': '0px 2px 2px -2px #6e6e6e'});
    }
    else {
        $('.navigation').css({'position':'absolute'});
    }

    $(window).resize(function() {
        var width = $('.main-body').width();
        $('.details').css({'width': width});
        $('.sidebar').css({'height': $(document).height()});
        
        if ($(window).width()>=855){
            $('.navigation').css({'position':'fixed','box-shadow': '0px 2px 2px -2px #3e3e3e'});
        }
        else {
            $('.navigation').css({'position':'absolute'});
        }
    });

    var options={format: 'dd/mm/yyyy',todayHighlight: true,autoclose: true};
    $('#date').datepicker(options);
    $('#invoice-date').datepicker(options);
    $('#return-date').datepicker(options);

});