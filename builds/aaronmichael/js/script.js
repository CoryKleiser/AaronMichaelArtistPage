'use strict';


$(document).ready(function () {

    /**
     * Check viewport width and set data-toggle for navbar accordingly!
     */
    function setNavbarToggle() {
        var $viewportWidth = $(window).width();

        if ($viewportWidth < 768) {
            $('ul.nav').children()
                .attr('data-toggle', 'collapse')
                .attr('data-target', '#navbar');
        }
        else {
            $('ul.nav').children()
                .attr('data-toggle', 'none')
                .attr('data-target', 'none');
        }
    }
    setNavbarToggle();

    $(window).resize(function(e){
        setNavbarToggle();
    });
});