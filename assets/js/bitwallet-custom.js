/*------------------------------------------------------------------
[Master Custom JS] - [Table of contents]
1. Preloader
2. SET CUSTOM background-image 
3. Ticker Dark
4. Members Slider
5. Scroll nav effect 
6. Youtube palyer
*/

jQuery(document).ready(function($){
    'use strict';

    /*---------------------------------------------*/
    /*--- 1. Preloader ---*/
    /*---------------------------------------------*/
    jQuery(window).on("load", function(){
        jQuery( '.cryptic_preloader_holder' ).fadeOut( 1000, function() {
            jQuery( this ).fadeOut();
        });
    });

    /*---------------------------------------------*/
    /*--- 2. SET CUSTOM background-image ---*/
    /*---------------------------------------------*/
    jQuery('.data_background').each(function() {
        var bgurl = jQuery(this).attr('data-background');
        jQuery(this).css('background-image', 'url(' + bgurl + ')');
    });

    /*---------------------------------------------*/
    /*--- 3. Ticker Dark ---*/
    /*---------------------------------------------*/
    if ($('#webticker-dark-icons').length) {   
        $("#webticker-dark-icons").webTicker({
            height:'auto', 
            duplicate:true, 
            startEmpty:false, 
            rssfrequency:5
        });
    }

    /*---------------------------------------------*/
    /*--- 4. Members Slider ---*/
    /*---------------------------------------------*/
    jQuery(".mt_slider_members_team1").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : false,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        autoWidth: true,
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   4],
            [700,   2],
            [1000,  2],
            [1200,  4],
            [1400,  4],
            [1600,  4]
        ]
    });
    
    jQuery(".mt_slider_members_team1 .owl-wrapper .owl-item:nth-child(2)").addClass("hover_class");
    jQuery(".mt_slider_members_team1 .owl-wrapper .owl-item").hover(
      function () {
        jQuery(".mt_slider_members_team1 .owl-wrapper .owl-item").removeClass("hover_class");
        jQuery(this).addClass("hover_class");
      }
    );
    jQuery(".mt_slider_members_team2").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : false,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        autoWidth: true,
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   4],
            [700,   2],
            [1000,  2],
            [1200,  4],
            [1400,  4],
            [1600,  4]
        ]
    });
    
    jQuery(".mt_slider_members_team2 .owl-wrapper .owl-item:nth-child(2)").addClass("hover_class");
    jQuery(".mt_slider_members_team2 .owl-wrapper .owl-item").hover(
      function () {
        jQuery(".mt_slider_members_team2 .owl-wrapper .owl-item").removeClass("hover_class");
        jQuery(this).addClass("hover_class");
      }
    );

    /*---------------------------------------------*/
    /*--- 5. Scroll nav effect ---*/
    /*---------------------------------------------*/
    // Add smooth scrolling to all links in navbar + footer link
    jQuery("#modeltheme-main-head.navbar a, footer a[href='#myPage']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== ""){
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          jQuery('html, body').animate({
            scrollTop: jQuery(hash).offset().top
          }, 900, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
    });

    /*---------------------------------------------*/
    /*--- 6. Youtube palyer ---*/
    /*---------------------------------------------*/
    if ($('.player').length){
        $(".player").mb_YTPlayer({});
        $('.player').on("YTPStart",function(){
           $('.video-bg').animate({opacity: 1}, 5000,function(){});
        });
    }

    /*---------------------------------------------*/
    /*--- 7. Pie Chart ---*/
    /*---------------------------------------------*/
    var chart = AmCharts.makeChart( "chartdiv", {
      "type": "pie",
      "theme": "light",
      "dataProvider": [ {
        "country": "Markering",
        "value": 260,
        "color": "#2735b5"
      }, {
        "country": "Financial",
        "value": 203,
        "color": "#3949d4"
      }, {
        "country": "Gift",
        "value": 67,
        "color": "#636fdd"
      }, {
        "country": "IT",
        "value": 42,
        "color": "#8d96e6"
      }, {
        "country": "Overhead",
        "value": 22,
        "color": "#afb5ed"
      }],
      "valueField": "value",
      "titleField": "country",
      "colorField": "color",
      "outlineAlpha": 0.4,
      "depth3D": 15,
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b><br> ([[percents]]%)</span>",
      "angle": 30,
      "export": {
        "enabled": true
      }
    } );

    /*---------------------------------------------*/
    /*- 7. Pie Chart - Define data for each year --*/
    /*---------------------------------------------*/

    var chartData = {
      "2014": [
        { "sector": "Agriculture", "size": 260, "color": "#2735b5" },
        { "sector": "Mining and Quarrying", "size": 203, "color": "#3949d4" },
        { "sector": "Manufacturing", "size": 67, "color": "#636fdd" },
        { "sector": "Electricity and Water", "size": 42, "color": "#8d96e6" },
        { "sector": "Construction", "size": 22, "color": "#afb5ed" }],
      "2015": [
        { "sector": "Agriculture", "size": 240, "color": "#2735b5" },
        { "sector": "Mining and Quarrying", "size": 220, "color": "#3949d4" },
        { "sector": "Manufacturing", "size": 80, "color": "#636fdd" },
        { "sector": "Electricity and Water", "size": 50, "color": "#8d96e6" },
        { "sector": "Construction", "size": 30, "color": "#afb5ed" } ],
      "2016": [
        { "sector": "Agriculture", "size": 220, "color": "#2735b5" },
        { "sector": "Mining and Quarrying", "size": 180, "color": "#3949d4" },
        { "sector": "Manufacturing", "size": 100, "color": "#636fdd" },
        { "sector": "Electricity and Water", "size": 55, "color": "#8d96e6" },
        { "sector": "Construction", "size": 40, "color": "#afb5ed" } ],
      "2017": [
        { "sector": "Agriculture", "size": 210, "color": "#2735b5" },
        { "sector": "Mining and Quarrying", "size": 190, "color": "#3949d4" },
        { "sector": "Manufacturing", "size": 150, "color": "#636fdd" },
        { "sector": "Electricity and Water", "size": 30, "color": "#8d96e6" },
        { "sector": "Construction", "size": 60, "color": "#afb5ed" } ],
      "2018": [
        { "sector": "Agriculture", "size": 230, "color": "#2735b5" },
        { "sector": "Mining and Quarrying", "size": 170, "color": "#3949d4" },
        { "sector": "Manufacturing", "size": 145, "color": "#636fdd" },
        { "sector": "Electricity and Water", "size": 27, "color": "#8d96e6" },
        { "sector": "Construction", "size": 56, "color": "#afb5ed" } ]
    };
    /**
     * Create the chart
     */
    var currentYear = 2014;
    var chart = AmCharts.makeChart( "chartdiv-a", {
      "type": "pie",
      "theme": "light",
      "dataProvider": [],
      "valueField": "size",
      "titleField": "sector",
      "colorField": "color",

      "startDuration": 0,
      "innerRadius": 80,
      "pullOutRadius": 20,
      "marginTop": 30,
      "allLabels": [{
        "y": "51%",
        "align": "center",
        "size": 25,
        "bold": true,
        "text": "2014",
        "color": "#fff"
      }, {
        "y": "49%",
        "align": "center",
        "size": 15,
        "text": "Year",
        "color": "#fff"
      }],
      "listeners": [ {
        "event": "init",
        method: function( e ) {
          var chart = e.chart;

          function getCurrentData() {
            var data = chartData[currentYear];
            currentYear++;
            if (currentYear > 2018)
              currentYear = 2014;
            return data;
          }

          function loop() {
            chart.allLabels[0].text = currentYear;
            var data = getCurrentData();
            chart.animateData( data, {
              duration: 1000,
              complete: function() {
                setTimeout( loop, 3000 );
              }
            } );
          }

          loop();
        }
      } ],
       "export": {
       "enabled": true
      }
    } );

        if (jQuery('body .lms-course-price .learn-press-message').length){
            jQuery("body .lms-course-price .learn-press-message").prependTo(".course-landing-summary");
        }

        new WOW().init();

        jQuery('[data-toggle="tooltip"]').tooltip();
        jQuery('.floating-social-btn').tooltip();

        // virtual tour
        if (jQuery('.popup-vimeo-youtube').length) {
            jQuery(".popup-vimeo-youtube").magnificPopup({
                type:"iframe",
                disableOn: 700,
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }

        // LISTING GALLERY POPUP
        if (jQuery('.mt_car--gallery').length) {
            jQuery('.mt_car--gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                },
                // other options
            });
        }

        if(window.matchMedia('(min-width: 992px)').matches) {

            jQuery(".stickit_sidebar, .main_stickit").stick_in_parent({
                offset_top: 120
            });
            jQuery('.stickit_sidebar')
            .on('sticky_kit:bottom', function(e) {
                jQuery(this).parent().css('position', 'static');
            })

        }


        // FIXED SEARCH FORM
        jQuery('.mt-search-icon').on( "click", function() {
            jQuery('.fixed-search-overlay').toggleClass('visible');
        });

        jQuery('.fixed-search-overlay .icon-close').on( "click", function() {
            jQuery('.fixed-search-overlay').removeClass('visible');
        });
        jQuery(document).on("keyup", function(e) {
             if (e.keyCode == 27) { // escape key maps to keycode `27`
                jQuery('.fixed-search-overlay').removeClass('visible');
                jQuery('.fixed-sidebar-menu').removeClass('open');
                jQuery('.fixed-sidebar-menu-overlay').removeClass('visible');
            }
        });



        jQuery('#mt-nav-burger').on( "click", function() {
            // jQuery(this).toggleClass('open');
            jQuery('.fixed-sidebar-menu').toggleClass('open');
            jQuery(this).parent().find('#navbar').toggleClass('hidden');
            jQuery('.fixed-sidebar-menu-overlay').addClass('visible');
        });

        /* Click on Overlay - Hide Overline / Slide Back the Sidebar header */
        jQuery('.fixed-sidebar-menu-overlay').on( "click", function() {
            jQuery('.fixed-sidebar-menu').removeClass('open');
            jQuery(this).removeClass('visible');
        });    
        /* Click on Overlay - Hide Overline / Slide Back the Sidebar header */
        jQuery('.fixed-sidebar-menu .icon-close').on( "click", function() {
            jQuery('.fixed-sidebar-menu').removeClass('open');
            jQuery('.fixed-sidebar-menu-overlay').removeClass('visible');
        });




        // 9th MENU Toggle - Hamburger
        var toggles = document.querySelectorAll(".c-hamburger");

        for (var i = toggles.length - 1; i >= 0; i--) {
          var toggle = toggles[i];
          toggleHandler(toggle);
        };

        function toggleHandler(toggle) {
          toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("is-btn-active") === true) ? this.classList.remove("is-btn-active") : this.classList.add("is-btn-active");
          });
        }



        jQuery( ".see_map_button" ).on( "click", function() {
            jQuery( "#map_wrapper_overlay" ).fadeOut('slow');
        });


        jQuery( ".fixed-sidebar-menu .menu-button" ).on( "click", function() {
            jQuery(this).parent().parent().parent().parent().toggleClass('open');
            jQuery(this).toggleClass('open');
        });


        if (jQuery(window).width() < 768) {

            var expand = '<span class="expand"><a class="action-expand"></a></span>';
            jQuery('.navbar-collapse .menu-item-has-children').append(expand);
            jQuery(".menu-item-has-children .expand a").on("click", function() {
                jQuery(this).parent().parent().find(' > ul').toggle();
                jQuery(this).toggleClass("show-menu");
            });
        }
        
   
        
        //Begin: Sticky Head
        jQuery(function(){
           if (jQuery('body').hasClass('is_nav_sticky')) {
                jQuery(window).on("resize", function() {
                    if (jQuery(window).width() <= 768) {
                     console.log('smaller-than-767');
                    } else {
                        jQuery("#modeltheme-main-head").sticky({
                            topSpacing:0
                        });
                    }
                });
                if (jQuery(window).width() >= 768) {
                    jQuery("#modeltheme-main-head").sticky({
                        topSpacing:0
                    });
                }
           }
        });


        // Shop button
        jQuery('.shop_cart').on("hover", function() {
            /* Stuff to do when the mouse enters the element */
            jQuery('.header_mini_cart').addClass('visible_cart');
        }, function() {
            /* Stuff to do when the mouse leaves the element */
            jQuery('.header_mini_cart').removeClass('visible_cart');
        });

        jQuery('.header_mini_cart').on("hover", function() {
            /* Stuff to do when the mouse enters the element */
            jQuery(this).addClass('visible_cart');
        }, function() {
            /* Stuff to do when the mouse leaves the element */
            jQuery(this).removeClass('visible_cart');
        });


        jQuery('#contact01_form input[name="user_first_name"]').on('change keyup paste', function() {
            if(jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").addClass("user_first_name-validated");
            }else if(!jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").removeClass("user_first_name-validated");
            }
        });
        jQuery('#contact01_form input[name="user_last_name"]').on('change keyup paste', function() {
            if(jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").addClass("user_last_name-validated");
            }else if(!jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").removeClass("user_last_name-validated");
            }
        });
        jQuery('#contact01_form input[name="user_email"]').on('change keyup paste', function() {
            if(jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").addClass("email-validated");
            }else if(!jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").removeClass("email-validated");
            }
        });
        jQuery('#contact01_form input[name="user_subject"]').on('change keyup paste', function() {
            if(jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").addClass("subject-validated");
            }else if(!jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").removeClass("subject-validated");
            }
        });
        jQuery('#contact01_form input[name="user_message"]').on('change keyup paste', function() {
            if(jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").addClass("message-validated");
            }else if(!jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").removeClass("message-validated");
            }
        });


        /**
         * Skin Link Focus Fix
        **/
        ( function() {
            var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
                is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
                is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

            if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
                window.addEventListener( 'hashchange', function() {
                    var element = document.getElementById( location.hash.substring( 1 ) );

                    if ( element ) {
                        if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) {
                            element.tabIndex = -1;
                        }

                        element.focus();
                    }
                }, false );
            }
        })();

        

        // SIDEBAR EFFECTS
        var SidebarMenuEffects = (function() {

            function hasParentClass( e, classname ) {
                if(e === document) return false;
                if( classie.has( e, classname ) ) {
                    return true;
                }
                return e.parentNode && hasParentClass( e.parentNode, classname );
            }

            function mobilecheck() {
                var check = false;
                (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
                return check;
            }

            function init() {

                var container = document.getElementById( 'st-container' ),
                    buttons = Array.prototype.slice.call( document.querySelectorAll( '#st-trigger-effects > button' ) ),
                    // event type (if mobile use touch events)
                    eventtype = mobilecheck() ? 'touchstart' : 'click',
                    resetMenu = function() {
                        classie.remove( container, 'st-menu-open' );
                    },
                    bodyClickFn = function(evt) {
                        if( !hasParentClass( evt.target, 'st-menu' ) ) {
                            resetMenu();
                            document.removeEventListener( eventtype, bodyClickFn );
                        }
                    };

                buttons.forEach( function( el, i ) {
                    var effect = el.getAttribute( 'data-effect' );

                    el.addEventListener( eventtype, function( ev ) {
                        ev.stopPropagation();
                        ev.preventDefault();
                        container.className = 'st-container'; // clear
                        classie.add( container, effect );
                        setTimeout( function() {
                            classie.add( container, 'st-menu-open' );
                        }, 25 );
                        document.addEventListener( eventtype, bodyClickFn );
                    });
                } );

            }

            init();

        })();


        //Begin: Parallax
        jQuery('.parralax-background').parallax("50%", 0.5);
        //End: Parallax


        /*Begin: Testimonials slider*/
        jQuery(".quotes-slider").owlCarousel({
            navigation      : false, // Show next and prev buttons
            pagination      : false,
            autoPlay        : true,
            rewindNav       : true,
            slideSpeed      : 700,
            paginationSpeed : 700,
            singleItem      : true
        });

        jQuery(".quotes-container").owlCarousel({
            navigation      : false, // Show next and prev buttons
            pagination      : false,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            singleItem      : true
        });
        /*Begin: Pastors slider*/
        jQuery(".pastor_slider").owlCarousel({
            navigation      : false, // Show next and prev buttons
            pagination      : false,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            itemsCustom : [
                [0,     1],
                [450,   1],
                [600,   2],
                [700,   2],
                [1000,  4],
                [1200,  4],
                [1400,  4],
                [1600,  4]
            ]
        });
        /*End: Pastors slider*/
        /*Begin: Clients slider*/
        jQuery(".categories_shortcode").owlCarousel({
            navigation      : false, // Show next and prev buttons
            pagination      : false,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            navigationText  : ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
            itemsCustom : [
                [0,     1],
                [450,   2],
                [600,   2],
                [700,   5],
                [1000,  5],
                [1200,  5],
                [1400,  5],
                [1600,  5]
            ]
        });
        /*Begin: Products by category*/
        jQuery(".clients-container").owlCarousel({
            navigation      : false, // Show next and prev buttons
            pagination      : false,
            autoPlay        : true,
            slideSpeed      : 700,
            paginationSpeed : 700,
            itemsCustom : [
                [0,     1],
                [450,   2],
                [600,   2],
                [700,   3],
                [1000,  5],
                [1200,  5],
                [1400,  5],
                [1600,  5]
            ]
        });
        /*Begin: Portfolio single slider*/
        jQuery(".portfolio_thumbnails_slider").owlCarousel({
            navigation      : true, // Show next and prev buttons
            pagination      : true,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            navigationText  : ["",""],
            singleItem      : true
        });
        /*End: Portfolio single slider*/
        /*Begin: Testimonials slider*/
        jQuery(".post_thumbnails_slider").owlCarousel({
            navigation      : false, // Show next and prev buttons
            pagination      : false,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            singleItem      : true
        });
        var owl = jQuery(".post_thumbnails_slider");
        jQuery( ".next" ).on( "click", function() {
            owl.trigger('owl.next');
        })
        jQuery( ".prev" ).on( "click", function() {
            owl.trigger('owl.prev');
        })
        /*End: Testimonials slider*/
        
        /*Begin: Testimonials slider*/
        jQuery(".testimonials_slider").owlCarousel({
            navigation      : true, // Show next and prev buttons
            pagination      : true,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            singleItem      : true
        });
        /*End: Testimonials slider*/
        /* Animate */
        jQuery('.animateIn').animateIn();
        // browser window scroll (in pixels) after which the "back to top" link is shown
        var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = jQuery('.back-to-top');




        //hide or show the "back to top" link
        jQuery(window).on("scroll", function(){
            ( jQuery(this).scrollTop() > offset ) ? $back_to_top.addClass('modeltheme-is-visible') : $back_to_top.removeClass('modeltheme-is-visible modeltheme-fade-out');
            if( jQuery(this).scrollTop() > offset_opacity ) { 
                $back_to_top.addClass('modeltheme-fade-out');
            }
        });


        // SITE NAVIGATION
        ( function() {
            var container, button, menu;

            container = document.getElementById( 'site-navigation' );
            if ( ! container ) {
                return;
            }

            button = container.getElementsByTagName( 'button' )[0];
            if ( 'undefined' === typeof button ) {
                return;
            }

            menu = container.getElementsByTagName( 'ul' )[0];

            // Hide menu toggle button if menu is empty and return early.
            if ( 'undefined' === typeof menu ) {
                button.style.display = 'none';
                return;
            }

            menu.setAttribute( 'aria-expanded', 'false' );

            if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
                menu.className += ' nav-menu';
            }

            button.onclick = function() {
                if ( -1 !== container.className.indexOf( 'toggled' ) ) {
                    container.className = container.className.replace( ' toggled', '' );
                    button.setAttribute( 'aria-expanded', 'false' );
                    menu.setAttribute( 'aria-expanded', 'false' );
                } else {
                    container.className += ' toggled';
                    button.setAttribute( 'aria-expanded', 'true' );
                    menu.setAttribute( 'aria-expanded', 'true' );
                }
            };
        } )();


        //smooth scroll to top
        $back_to_top.on('click', function(event){
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0 ,
                }, scroll_top_duration
            );
        });


        //revolution slider buttons delete effect
        jQuery('.rev_slider_wrapper .rev_slider .modeltheme_button').removeClass('animateIn').removeClass('animated');


        // contact form effect
        (function() {
            if (!String.prototype.trim) {
              (function() {
                // Make sure we trim BOM and NBSP
                var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                String.prototype.trim = function() {
                  return this.replace(rtrim, '');
                };
              })();
            }

            [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
              // in case the input is already filled..
              if( inputEl.value.trim() !== '' ) {
                classie.add( inputEl.parentNode, 'input--filled' );
              }

              // events:
              inputEl.addEventListener( 'focus', onInputFocus );
              inputEl.addEventListener( 'blur', onInputBlur );
            } );

            function onInputFocus( ev ) {
              classie.add( ev.target.parentNode, 'input--filled' );
            }

            function onInputBlur( ev ) {
              if( ev.target.value.trim() === '' ) {
                classie.remove( ev.target.parentNode, 'input--filled' );
              }
            }
          })();


        //Begin: Skills
        jQuery('.statistics').appear(function() {
            jQuery('.percentage').each(function(){
                var dataperc = jQuery(this).attr('data-perc');
                jQuery(this).find('.skill-count').delay(6000).countTo({
                    from: 0,
                    to: dataperc,
                    speed: 5000,
                    refreshInterval: 100
                });
            });
        }); 
        //End: Skills 

        jQuery('.exchange-calculator-top #btc_calc select.currency_switcher').select2();

        jQuery('body').on('click', '#view-demos, #view-demos a', function() {
 
            var $this = jQuery(this),
            href = $this.attr('href');
         
            if(!href || href.charAt(0) !== '#') return;
            var el = jQuery(href);
         
            if(!el.length) el = jQuery('a[name=' + href.substring(1, href.length) + ']');
            if(!el.length) return;
         
            jQuery('html, body').animate({scrollTop: el.offset().top}, 1000);
            return false;
         
        });

        /*LOGIN MODAL */

        var ModalEffects = (function() {
                function init_modal() {

                    var overlay = document.querySelector( '.modeltheme-overlay' );

                    [].slice.call( document.querySelectorAll( '.modeltheme-trigger' ) ).forEach( function( el, i ) {

                        var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
                            close = modal.querySelector( '.modeltheme-close' );

                        function removeModal( hasPerspective ) {
                            classie.remove( modal, 'modeltheme-show' );

                            if( hasPerspective ) {
                                classie.remove( document.documentElement, 'modeltheme-perspective' );
                            }
                        }

                        function removeModalHandler() {
                            removeModal( classie.has( el, 'modeltheme-setperspective' ) ); 
                        }

                        el.addEventListener( 'click', function( ev ) {
                            classie.add( modal, 'modeltheme-show' );
                            overlay.removeEventListener( 'click', removeModalHandler );
                            overlay.addEventListener( 'click', removeModalHandler );

                            if( classie.has( el, 'modeltheme-setperspective' ) ) {
                                setTimeout( function() {
                                    classie.add( document.documentElement, 'modeltheme-perspective' );
                                }, 25 );
                            }
                        });

                    } );

                }

            if (!jQuery("body").hasClass("login-register-page")) {
                init_modal();
            }

        })();   

        /* MULTISTEP REGISTER*/ 

        jQuery("._um_row_2 input").on("keyup",function() {
            var empty = false;
            jQuery('._um_row_2 input').each(function() {
                if (jQuery(this).val().length == 0) {
                    empty = true;
                }
            });
            if (empty) {
                jQuery('.next1').attr('disabled', 'disabled');
            } else {
                jQuery('.next1').attr('disabled', false);
            }
        });

        jQuery("._um_row_3 input").on("keyup",function() {
            var empty = false;
            if (jQuery(this).val().length == 0) {
                empty = true;
            }
            if (empty) {
                jQuery('.next2').attr('disabled', 'disabled');
            } else {
                jQuery('.next2').attr('disabled', false);
            }
        });

        jQuery( ".next1" ).on("click",function() {
            jQuery( "._um_row_2" ).hide();
            jQuery( "._um_row_3" ).fadeIn();
            jQuery("ul#progressbar li:nth-child(2)").addClass("active");
        });

        jQuery( ".next2" ).on("click",function() {
            if(jQuery('._um_row_3 input').val() == ''){
                jQuery('.next1').prop("disabled", false);
            } else {
                jQuery( "._um_row_3" ).hide();
                jQuery( "._um_row_4" ).fadeIn();
                jQuery("ul#progressbar li:nth-child(3)").addClass("active");
            }
        });

        jQuery( ".previous2" ).on("click",function() {
            jQuery( "._um_row_3" ).hide();
            jQuery( "._um_row_2" ).fadeIn();
            jQuery("ul#progressbar li:nth-child(2)").removeClass("active");
        });
        jQuery( ".previous3" ).on("click",function() {
            jQuery( "._um_row_4" ).hide();
            jQuery( "._um_row_3" ).fadeIn();
            jQuery("ul#progressbar li:nth-child(3)").removeClass("active");
        });
            
        jQuery("#modal-log-in #register-modal").on("click",function(){                       
            jQuery("#login-modal-content").fadeOut("fast", function(){
               jQuery("#signup-modal-content").fadeIn(500);
            });
        }); 

        jQuery("#login-content-shortcode .btn-register-shortcode").on("click",function(){                       
            jQuery("#login-content-shortcode").fadeOut("fast", function(){
               jQuery("#register-content-shortcode").fadeIn(500);
            });
        });     

        jQuery("#dropdown-user-profile").on("click", function(e){
          if(jQuery(this).hasClass("open")) {
            jQuery(this).removeClass("open");
          } else {
            jQuery(this).addClass("open");
          }
        });               

        /* Modeltheme Countdown */
        jQuery( document ).ready(function() {

            //get each width
            var width_dayscountdown = jQuery('.rev_slider #modeltheme-countdown .days-digit').width();
            var width_hourscountdown = jQuery('.rev_slider #modeltheme-countdown .hours-digit').width();
            var width_minutescountdown = jQuery('.rev_slider #modeltheme-countdown .minutes-digit').width();
            var width_secondscountdown = jQuery('.rev_slider #modeltheme-countdown .seconds-digit').width();
            var width_dotscountdown = jQuery('.rev_slider #modeltheme-countdown .c_dot').width();
            var width_dots_x3countdown = width_dotscountdown*7;
            //total width
            var width_sumcountdown = width_dayscountdown+width_hourscountdown+width_minutescountdown+width_secondscountdown+width_dots_x3countdown;
            //test
            //console.log(width_sumcountdown);
            //apply width
            jQuery(".rev_slider #modeltheme-countdown").width(width_sumcountdown);


            jQuery("#modeltheme-countdown").countdown("2018/07/12", function(event) {
              jQuery(this).html(
                event.strftime("<div class='days'>"
                                  +"<div class='days-digit' style='color:#ffffff;font-size: 60px !important;line-height: 50px !important;'>%D</div>"
                                  +"<div class='clearfix'></div>"
                                  +"<div class='days-name' style='color:#ffffff !important;font-size: 16px !important;line-height: 16px !important;!important'>days</div>"
                                +"</div>"
                                +"<div class='hours'>"
                                  +"<div class='hours-digit'  style='color:#ffffff;font-size: 60px !important;line-height: 50px !important;'>%H</div>"
                                  +"<div class='clearfix'></div>"
                                  +"<div class='hours-name' style='color:#ffffff !important;font-size: 16px !important;line-height: 16px !important;'>hours</div>"
                                +"</div>"
                                +"<div class='minutes'>"
                                  +"<div class='minutes-digit' style='color:#ffffff;font-size: 60px !important;line-height: 50px !important;'>%M</div>"
                                  +"<div class='clearfix'></div>"
                                  +"<div class='minutes-name' style='color:#ffffff !important;font-size: 16px !important;line-height: 16px !important;'>minutes</div>"
                                +"</div>"
                                +"<div class='seconds'>"
                                  +"<div class='seconds-digit' style='color:#ffffff;font-size: 60px !important;line-height: 50px !important;'>%S</div>"
                                  +"<div class='clearfix'></div>"
                                  +"<div class='seconds-name' style='color:#ffffff !important;font-size: 16px !important;line-height: 16px !important;'>seconds</div>"
                                +"</div>")
              );
            });
        });
            // 13. MAINTENANCE CLOCK
        function crypticCountdown() {
            var clock;
            var clockDate = jQuery(".countdownv2").attr('data-count-down');
            // Grab the current date
            var currentDate = new Date();
            // Grab the date inserted by user
            var inserted_date = new Date(clockDate);
            // Calculate the difference in seconds between the future and current date
            var diff = inserted_date.getTime() / 1000 - currentDate.getTime() / 1000;
            // Instantiate a coutdown FlipClock
            clock = jQuery(".countdownv2").FlipClock(diff, {
                clockFace: "DailyCounter",
                countdown: true
            });
        }
        if ($('.countdownv2').length) {   
            crypticCountdown();
        }
        (function() {
        if (!window.mc4wp) {
            window.mc4wp = {
                listeners: [],
                forms    : {
                    on: function (event, callback) {
                        window.mc4wp.listeners.push({
                            event   : event,
                            callback: callback
                        });
                    }
                }
            }
        }
        })();


});
jQuery(document).on('ready',function() {
    jQuery(".popup-vimeo-video").magnificPopup({
        type: "iframe",
        disableOn: 700,
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    jQuery(".popup-vimeo-youtube").magnificPopup({
        type: "iframe",
        disableOn: 700,
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});
jQuery(document).ready(function() {
// TIMELINE HORIZONTAL
    (function() {

      // VARIABLES
      const timelinehorizontal = document.querySelector(".timelinehorizontal ol"),
        elH = document.querySelectorAll(".timelinehorizontal li > div"),
        arrows = document.querySelectorAll(".timelinehorizontal .arrows .arrow"),
        arrowPrev = document.querySelector(".timelinehorizontal .arrows .arrow__prev"),
        arrowNext = document.querySelector(".timelinehorizontal .arrows .arrow__next"),
        firstItem = document.querySelector(".timelinehorizontal li:first-child"),
        lastItem = document.querySelector(".timelinehorizontal li:last-child"),
        xScrolling = 280,
        disabledClass = "disabled";

      // START
      window.addEventListener("load", init);

      function init() {
        setEqualHeights(elH);
        animateTl(xScrolling, arrows, timelinehorizontal);
        setSwipeFn(timelinehorizontal, arrowPrev, arrowNext);
        setKeyboardFn(arrowPrev, arrowNext);
      }

      // SET EQUAL HEIGHTS
      function setEqualHeights(el) {
        let counter = 0;
        for (let i = 0; i < el.length; i++) {
          const singleHeight = el[i].offsetHeight;

          if (counter < singleHeight) {
            counter = singleHeight;
          }
        }

        for (let i = 0; i < el.length; i++) {
          el[i].style.height = `${counter}px`;
        }
      }

      // CHECK IF AN ELEMENT IS IN VIEWPORT
      // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
      function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      // SET STATE OF PREV/NEXT ARROWS
      function setBtnState(el, flag = true) {
        if (flag) {
          el.classList.add(disabledClass);
        } else {
          if (el.classList.contains(disabledClass)) {
            el.classList.remove(disabledClass);
          }
          el.disabled = false;
        }
      }

      // ANIMATE TIMELINE
      function animateTl(scrolling, el, tl) {
        let counter = 0;
        for (let i = 0; i < el.length; i++) {
          el[i].addEventListener("click", function() {
            if (!arrowPrev.disabled) {
              arrowPrev.disabled = true;
            }
            if (!arrowNext.disabled) {
              arrowNext.disabled = true;
            }
            const sign = (this.classList.contains("arrow__prev")) ? "" : "-";
            if (counter === 0) {
              tl.style.transform = `translateX(-${scrolling}px)`;
            } else {
              const tlStyle = getComputedStyle(tl);
              // add more browser prefixes if needed here
              const tlTransform = tlStyle.getPropertyValue("-webkit-transform") || tlStyle.getPropertyValue("transform");
              const values = parseInt(tlTransform.split(",")[4],``) + parseInt(`${sign}${scrolling}`);
              tl.style.transform = `translateX(${values}px)`;
            }

            setTimeout(() => {
              isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
              isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
            }, 1100);

            counter++;
          });
        }
      }

      // ADD SWIPE SUPPORT FOR TOUCH DEVICES
      function setSwipeFn(tl, prev, next) {
      }

      // ADD BASIC KEYBOARD FUNCTIONALITY
      function setKeyboardFn(prev, next) {
        document.addEventListener("keydown", (e) => {
          if ((e.which === 37) || (e.which === 39)) {
            const timelinehorizontalOfTop = timelinehorizontal.offsetTop;
            const y = window.pageYOffset;
            if (timelinehorizontalOfTop !== y) {
              window.scrollTo(0, timelinehorizontalOfTop);
            }
            if (e.which === 37) {
              prev.click();
            } else if (e.which === 39) {
              next.click();
            }
          }
        });
      }

    })();
});


// TIMELINE VERTICAL
jQuery(document).ready(function($){
  var timelineBlocks = $('.cd-timeline-block'),
    offset = 0.8;

  //hide timeline blocks which are outside the viewport
  hideBlocks(timelineBlocks, offset);

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    (!window.requestAnimationFrame) 
      ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
      : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
  });

  function hideBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content, .cd-date, .timeline_item_title, .timeline_item_content').addClass('is-hidden');
    });
  }

  function showBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content, .cd-date, .timeline_item_title, .timeline_item_content').removeClass('is-hidden').addClass('bounce-in');
    });
  }
});




  if ( jQuery( "#grid" ).length ) {
    (function() {

      function init() {
        var speed = 300,
          easing = mina.backout;

        [].slice.call ( document.querySelectorAll( '#grid a' ) ).forEach( function( el ) {
          var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
            pathConfig = {
              from : path.attr( 'd' ),
              to : el.getAttribute( 'data-path-hover' )
            };

          el.addEventListener( 'mouseenter', function() {
            path.animate( { 'path' : pathConfig.to }, speed, easing );
          } );

          el.addEventListener( 'mouseleave', function() {
            path.animate( { 'path' : pathConfig.from }, speed, easing );
          } );
        } );
      }

      init();

    })();
  }



(function ($) {
  'use strict';

  jQuery( document ).ready(function() {
    /*
    * ||||||||||||||||||||||||||||||||||||||||||||||||||||||||-> TESTIMONIALS01 SLIDER (Shortcode)
    */
    jQuery(".testimonials-container").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : true,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   2],
            [700,   2],
            [1000,  2],
            [1200,  2],
            [1400,  2],
            [1600,  2]
        ]
    });
    jQuery(".members-container").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : false,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        singleItem      : true,
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   1],
            [700,   1],
            [1000,  1],
            [1200,  1],
            [1400,  1],
            [1600,  1]
        ]
    });
    jQuery(".testimonials-container-1").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : false,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   1],
            [700,   1],
            [1000,  1],
            [1200,  1],
            [1400,  1],
            [1600,  1]
        ]
    });
    jQuery(".testimonials-container-2").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : false,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   2],
            [700,   2],
            [1000,  2],
            [1200,  2],
            [1400,  2],
            [1600,  2]
        ]
    });
    jQuery(".testimonials-container-3").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : false,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   2],
            [700,   2],
            [1000,  3],
            [1200,  3],
            [1400,  3],
            [1600,  3]
        ]
    });

    /*
    * ||||||||||||||||||||||||||||||||||||||||||||||||||||||||-> TESTIMONIALS02 SLIDER (Shortcode)
    */
    jQuery(".testimonials02-container").owlCarousel({
      navigation      : false, // Show next and prev buttons
      pagination      : true,
      autoPlay        : false,
      slideSpeed      : 700,
      paginationSpeed : 700,
      singleItem      : true
    });

    /*
    * ||||||||||||||||||||||||||||||||||||||||||||||||||||||||-> TWEETS SLIDER (Shortcode)
    */
    jQuery(".mt_tweets_slider").owlCarousel({
      navigation      : false, // Show next and prev buttons
      pagination      : false,
      autoPlay        : false,
      slideSpeed      : 700,
      paginationSpeed : 700,
      singleItem      : true
    });


    /*
    * ||||||||||||||||||||||||||||||||||||||||||||||||||||||||-> MEMBERS FANCY SLIDER (Shortcode)
    */
    jQuery(".mt_members_fancy_slider").owlCarousel({
      navigation      : false, // Show next and prev buttons
      pagination      : false,
      autoPlay        : false,
      slideSpeed      : 700,
      paginationSpeed : 700,
      autoPlay : true,
      autoPlayTimeout:10000,
      autoPlayHoverPause:true,
      itemsCustom : [
          [0,     1],
          [450,   1],
          [600,   2],
          [700,   2],
          [1000,  4],
          [1200,  4],
          [1400,  4],
          [1600,  4]
      ]
    });


    /*
    * ||||||||||||||||||||||||||||||||||||||||||||||||||||||||-> CLIENTS SLIDER (Shortcode)
    */
    jQuery(".clients_container_shortcode-1").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : false,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        autoPlay : true,
        autoPlayTimeout:10000,
        autoPlayHoverPause:true,
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   1],
            [700,   1],
            [1000,  1],
            [1200,  1],
            [1400,  1],
            [1600,  1]
        ]
    });
    jQuery(".clients_container_shortcode-2").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : false,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        autoPlay : true,
        autoPlayTimeout:10000,
        autoPlayHoverPause:true,
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   2],
            [700,   2],
            [1000,  2],
            [1200,  2],
            [1400,  2],
            [1600,  2]
        ]
    });
    jQuery(".clients_container_shortcode-3").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : false,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        autoPlay : true,
        autoPlayTimeout:10000,
        autoPlayHoverPause:true,
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   2],
            [700,   2],
            [1000,  3],
            [1200,  3],
            [1400,  3],
            [1600,  3]
        ]
    });

    jQuery(".clients_container_shortcode-4").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : false,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        autoPlay : true,
        autoPlayTimeout:10000,
        autoPlayHoverPause:true,
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   2],
            [700,   3],
            [1000,  4],
            [1200,  4],
            [1400,  4],
            [1600,  4]
        ]
    });


    jQuery(".clients_container_shortcode-5").owlCarousel({
        navigation      : false, // Show next and prev buttons
        pagination      : false,
        autoPlay        : false,
        slideSpeed      : 700,
        paginationSpeed : 700,
        autoPlay : true,
        autoPlayTimeout:10000,
        autoPlayHoverPause:true,
        itemsCustom : [
            [0,     1],
            [450,   2],
            [600,   2],
            [700,   3],
            [1000,  4],
            [1200,  4],
            [1400,  5],
            [1600,  5]
        ]
    });

    /*
        * ||||||||||||||||||||||||||||||||||||||||||||||||||||||||-> CATEGORY PRODUCTS (Shortcode) 
    */

        jQuery(".categories_shortcode_2").owlCarousel({
            navigation      : true, // Show next and prev buttons
            pagination      : false,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            navigationText  : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            itemsCustom : [
                [0,     1],
                [450,   2],
                [600,   2],
                [700,   2],
                [1000,  2],
                [1200,  2],
                [1400,  2],
                [1600,  2]
            ]
        });

        jQuery(".categories_shortcode_3").owlCarousel({
            navigation      : true, // Show next and prev buttons
            pagination      : false,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            navigationText  : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            itemsCustom : [
                [0,     1],
                [450,   2],
                [600,   2],
                [700,   2],
                [1000,  3],
                [1200,  3],
                [1400,  3],
                [1600,  3]
            ]
        });

        jQuery(".categories_shortcode_4").owlCarousel({
            navigation      : true, // Show next and prev buttons
            pagination      : false,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            navigationText  : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            itemsCustom : [
                [0,     1],
                [450,   2],
                [600,   2],
                [700,   2],
                [1000,  4],
                [1200,  4],
                [1400,  4],
                [1600,  4]
            ]
        });


        if ( jQuery( ".woocommerce_categories" ).length ) {
            
            jQuery(".category a").on("click", function () {
                var attr = jQuery(this).attr("class");

                jQuery(".products_by_category").removeClass("active");
                jQuery(attr).addClass("active");

                jQuery('.category').removeClass("active");
                jQuery(this).parent('.category').addClass("active");

            });  

            jQuery('.products_category .products_by_category:first').addClass("active");
            jQuery('.categories_shortcode .category:first').addClass("active");

        }

    /*
    * ||||||||||||||||||||||||||||||||||||||||||||||||||||||||-> GET DIV HEIGHT (Shortcode) 
    */

    jQuery(document).ready(function() {
        var height = jQuery(".about_image").height();
        jQuery('.about_text_holder').css('height',height);
    });

    jQuery(document).ready(function() {
        var height = jQuery(".portfolio03_thumbnail").height();
        jQuery('.color_verlay_portfolio3').css('height',height);
    });

    jQuery(document).ready(function() {
        var height = jQuery(".color_verlay_portfolio3").height();
        jQuery('.portfolio03_title_subtitle_holder').css('height',height);
    });

    /*
    * ||||||||||||||||||||||||||||||||||||||||||||||||||||||||-> SERVICES SLIDER (Shortcode)
    */

    // SET LEFT SIDE height of RIGHT SIDE
    jQuery( '.right-side' ).ready(function() {
      var right_side_height = jQuery('.right-side').height();
      jQuery( '.left-side' ).height( right_side_height )
    });



    var sync1 = jQuery("#service_big_slides");
    var sync2 = jQuery("#service_small_slides");
   
    jQuery(".service_small_slides_holder .fa-angle-right").on("click", function(){
      sync1.trigger('owl.next');
    })
    jQuery(".service_small_slides_holder .fa-angle-left").on("click", function(){
      sync1.trigger('owl.prev');
    })


    sync1.owlCarousel({
      // mouseDrag: false,
      center:true,
      loop: true,
      navigationText:  ["<",">"],
      rewindNav: true,
      singleItem : true,
      slideSpeed : 1000,
      navigation: false,
      pagination: false,
      afterAction : syncPosition,
      responsiveRefreshRate : 200,
      afterInit : function(elem){
        this.jumpTo(1);
      }
    });
   
    sync2.owlCarousel({
      // mouseDrag: false,
      center:true,
      loop: true,
      items : 3,
      itemsDesktop      : [1199,3],
      itemsDesktopSmall     : [979,3],
      itemsTablet       : [768,3],
      itemsMobile       : [479,3],
      pagination:false,
      responsiveRefreshRate : 100,
      afterInit : function(el){
        el.find(".owl-item").eq(1).addClass("synced");
      }
    });
   
    function syncPosition(el){
      var current = this.currentItem;
      jQuery("#service_small_slides")
        .find(".owl-item")
        .removeClass("synced")
        .eq(current)
        .addClass("synced")
      if(jQuery("#service_small_slides").data("owlCarousel") !== undefined){
        center(current)
      }
    }
   
    jQuery("#service_small_slides").on("click", ".owl-item", function(e){
      e.preventDefault();
      var number = jQuery(this).data("owlItem");
      sync1.trigger("owl.goTo",number);
    });
   
    function center(number){
      var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
      var num = number;
      var found = false;
      for(var i in sync2visible){
        if(num === sync2visible[i]){
          var found = true;
        }
      }
   
      if(found===false){
        if(num>sync2visible[sync2visible.length-1]){
          sync2.trigger("owl.goTo", num - sync2visible.length+2)
        }else{
          if(num - 1 === -1){
            num = 0;
          }
          sync2.trigger("owl.goTo", num);
        }
      } else if(num === sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", sync2visible[1])
      } else if(num === sync2visible[0]){
        sync2.trigger("owl.goTo", num-1)
      }
      
    }

    // Tabs

    jQuery('.naccs .menu div').on("click",function(){
      var tab_id = jQuery(this).attr('data-tab');

      jQuery('.naccs .menu div').removeClass('active');
      jQuery('.naccs ul li').removeClass('active');
      jQuery('.naccs .gc--1-of-3').removeClass('active');
      jQuery('.naccs .gc--2-of-3').removeClass('active');

      
      jQuery(this).parent().parent().addClass('active');
      jQuery("#"+tab_id).parent().parent().addClass('active');
      jQuery(this).addClass('active');
      jQuery("#"+tab_id).addClass('active');
    })


  });
} (jQuery) )