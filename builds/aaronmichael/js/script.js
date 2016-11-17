'use strict';
$(document).ready(function () {

    var $viewportWidth = $(window).width();

    console.log($viewportWidth);

    if($viewportWidth < 768){
        $('ul.nav').children()
            .attr('data-toggle', 'collapse')
            .attr('data-target', '#navbar');
    }
});