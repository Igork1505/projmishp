import React from 'react';
import 'jquery/src/jquery';
import  './Navigation.css'

class Navigation extends React.Component{
    render() {
        return(

                function ($) {

                "use strict";

                    const cfg = {
                            scrollDuration: 800,
                        },

                        $WIN = $(window);


                    const doc = document.documentElement;
                doc.setAttribute('data-useragent', navigator.userAgent);

                const clPreloader = function () {

                $("html").addClass('cl-preload');

                $WIN.on('load', function () {

                $("#loader").fadeOut("slow", function () {

                $("#preloader").delay(300).fadeOut("slow");
            });
            });
            };

                const clMenuOnScrolldown = function () {

                    const menuTrigger = $('.header-menu-toggle');

                    $WIN.on('scroll', function () {

                if ($WIN.scrollTop() > 150) {
                menuTrigger.addClass('opaque');
            } else {
                menuTrigger.removeClass('opaque');
            }

            });
            };

                const clOffCanvas = function () {

                    const menuTrigger = $('.header-menu-toggle'),
                        nav = $('.header-nav'),
                        closeButton = nav.find('.header-nav__close'),
                        siteBody = $('body'),
                        mainContents = $('section, footer');

                    menuTrigger.on('click', function (e) {
                e.preventDefault();
                siteBody.toggleClass('menu-is-open');
            });

                closeButton.on('click', function (e) {
                e.preventDefault();
                menuTrigger.trigger('click');
            });

                siteBody.on('click', function (e) {
                if (!$(e.target).is('.header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span')) {
                siteBody.removeClass('menu-is-open');
            }
            });

            };

                (function clInit() {

                clPreloader();
                clMenuOnScrolldown();
                clOffCanvas();


            })();

            })





}
}
export default Navigation;