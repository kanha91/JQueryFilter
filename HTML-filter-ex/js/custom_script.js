 jQuery($ => {
// The speed of the scroll in milliseconds
const speed = 1000;
 
$('a[href*="#at-glance"]')
.filter((i, a) => a.getAttribute('href').startsWith('#') || a.href.startsWith(`${location.href}#`))
.unbind('click.smoothScroll')
.bind('click.smoothScroll', event => {
const targetId = event.currentTarget.getAttribute('href').split('#')[1];
const targetElement = document.getElementById(targetId);



if (targetElement) {
event.preventDefault();
$('html, body').animate({ scrollTop: $(targetElement).offset().top - 100}, speed);
}
});
}); 

//counter
	$('.counter-count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 5000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});


//Header_fix
if($(window).width()>768){
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 130) {
      $('header').addClass('fix_active');
    } else {
      $('header').removeClass('fix_active');
    }
  })
}


function inviewExample() {
    var counted = 0;
    $(window).scroll(function() {

      var oTop = $('#counter').offset().top - window.innerHeight;
      if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },

            {

              duration: 2000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }

            });
        });
        counted = 1;
      }

    });
 }
$(window).on('load', function() {
    inviewExample();
});


//why_choose_american
$(window).on('load', function () {
    var maxH = 0;
    if($(window).width()>767){
        $('.counters .common-box').each(function(){
            if($(this).height() > maxH){
                maxH = $(this).innerHeight();
            }
        })
        $('.counters .common-box').height(maxH); 
    } else {
        $('.counters .common-box').removeAttr('style');
    }    
});

$(window).resize(function(){
    $('.counters .common-box').removeAttr('style');
    var maxH = 0;
    if($(window).width()>767){
        $('.counters .common-box').each(function(){
            if($(this).height() > maxH){
                maxH = $(this).innerHeight();
            }
        });
        $('.counters .common-box').height(maxH); 
    } else {
        $('.counters .common-box').removeAttr('style');
    }
});

$(window).on('load', function () {
    var maxH = 0;
    if($(window).width()>767){
        $('.common-box .counter-num').each(function(){
            if($(this).height() > maxH){
                maxH = $(this).innerHeight();
            }
        })
        $('.common-box .counter-num').height(maxH); 
    } else {
        $('.common-box .counter-num').removeAttr('style');
    }    
});

$(window).resize(function(){
    $('.common-box .counter-num').removeAttr('style');
    var maxH = 0;
    if($(window).width()>767){
        $('.common-box .counter-num').each(function(){
            if($(this).height() > maxH){
                maxH = $(this).innerHeight();
            }
        });
        $('.common-box .counter-num').height(maxH); 
    } else {
        $('.common-box .counter-num').removeAttr('style');
    }
});

//select
$('select.select').each(function () {
    var title = $(this).attr('title');
    if ($('option:selected', this).val() != '') title = $('option:selected', this).text();
    $(this)
        .css({ 'z-index': 10, 'opacity': 0, '-khtml-appearance': 'none' })
        .after('<span class="select">' + title + '</span>')
        .change(function () {
            val = $('option:selected', this).text();
            $(this).next().text(val);
        })
});


//mobile-menu
$(function(){

$('.hamburger-menu').on('click', function(){
  $('html').addClass('Bg-open');
    $(".burger-1, .burger-2, .burger-3").addClass("open");
    if ($('.rightColm .Menu_list').hasClass('mobileOpen'))
    {
    $('.rightColm .Menu_list').removeClass('mobileOpen');
    $(".burger-1, .burger-2, .burger-3").removeClass("open");
    $('html').removeClass('Bg-open');
    }
    else{
    $('.rightColm .Menu_list').addClass('mobileOpen');
    }
  });
});


$(document).click(function(e){
  if(!$(e.target).is('.hamburger-menu, .hamburger-menu *, .rightColm  .Menu_list, .Menu_list *')){
    $('.rightColm .Menu_list').removeClass('mobileOpen');
    $(".burger-1, .burger-2, .burger-3").removeClass("open");
    $('html').removeClass('Bg-open');
  }
});




  var lightbox = GLightbox();
        lightbox.on('open', (target) => {
            console.log("lightbox opened");
        });
        var lightboxDescription = GLightbox({
            selector: '.glightbox2',
        });
        var lightboxVideo = GLightbox({
            selector: '.glightbox3'
        });
        lightboxVideo.on('slide_changed', ({ prev, current }) => {
            console.log("Prev slide", prev);
            console.log("Current slide", current);

            const { index, slide, player } = current;

            if (player) {
                if (!player.ready) {
                    // If player is not ready
                    player.on('ready', event => {
                        // Do something when video is ready
                    });
                }

                player.on('play', event => {
                    console.log("Started play");
                });

                player.on('volumechange', event => {
                    console.log("Volume change");
                });

                player.on('ended', event => {
                    console.log("Video ended");
                });
            }
        });

        var lightboxInlineIframe = GLightbox({
            'selector': '.glightbox4'
        });


        /* var exampleApi = GLightbox({ selector: null });
        exampleApi.insertSlide({
            href: 'https://picsum.photos/1200/800',
        });
        exampleApi.insertSlide({
            width: '500px',
            content: '<p>Example</p>'
        });
        exampleApi.insertSlide({
            href: 'https://www.youtube.com/watch?v=WzqrwPhXmew',
        });
        exampleApi.insertSlide({
            width: '200vw',
            content: document.getElementById('inline-example')
        });
        exampleApi.open(); */

