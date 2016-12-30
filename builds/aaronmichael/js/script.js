'use strict';


$(document).ready(function () {

    /**
     * Check viewport width and set data-toggle for navbar accordingly!
     */
    function setNavbarToggle() {
        var $viewportWidth = $(window).width();

        console.log($viewportWidth);

        if ($viewportWidth < 768) {
            $('ul.nav').children()
                .attr('data-toggle', 'collapse')
                .attr('data-target', '#navbar');
        }
    }
    setNavbarToggle();
});