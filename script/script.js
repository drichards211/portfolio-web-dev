function measureMobileViewportHeight() {
// Mobile versions of Chrome and Safari ignore the address bar when calculating vh.
// This calculates the true value using .innerHeight and sets it as the CSS var --vh.
  console.log("measureMobileViewportHeight() running")
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  // re-calculate if viewport changes size:
  window.addEventListener('resize', function() {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
}

function handleSiteNav() {
// Respond to top-bar clicks:
  console.log('handleSiteNav() running')
  $(".site-nav").on("click", function(event) {
    event.preventDefault()
    // href='#top' is used in html to preserve navigation if JavaScript fails to load.
    // Ternary operator changes value of href='#top' to 'html, body' so JS can successfully 
    // scroll to the top of page. All other values are assigned to hrefNew without changes.
    let hrefNew = ($(this).attr('href') === '#top' ? 'html, body' : $(this).attr('href'))
    // scroll to beginning of specified href:
    $("body, html").animate({ 
      scrollTop: $(hrefNew).offset().top
    }, 800)
  })
  // Respond to other button presses:
  $('body').on('click', 'button', function(event) {
    // portfolio button pressed:
    if ($(this).prop('id') === 'portfolio-button') {
      console.log("portfolio button pressed")
      // scroll to beginning of portfolio section:
      $('html, body').animate({
        scrollTop: ($('.spring').offset().top)
    },800);
    } 
    // hamburger button pressed:
    if ($(this).prop('id') === 'hamburger-button') {
      console.log("hamburger button pressed")
      event.stopPropagation() // do not bubble-up the click event:
      // display or hide dropdown menu:
      $('.site-nav').toggleClass('vertical-nav')
    }
    // hide dropdown menu after click, or if clicked outside:
    $(document).click(function(){
      $('.site-nav').removeClass('vertical-nav')
    })
    window.onresize = function() {
    // hide dropdown menu when viewport rotated or resized:
      console.log('Hiding dropdown menu')
      $('.site-nav').removeClass('vertical-nav')
    } 
  })
}

function centerNameVertically() { // called by resizer() in jquery.fittext.js
// Centers name vertically within the hero image:
  setTimeout(function() {
    // wait 0.3 seconds for .name element to finish adjusting size before measuring:
    let nameHeight1 = $(".name").outerHeight() + "px"
    $(".name").css({"top": `calc(50% - (${nameHeight1} / 2))`})
  }, 300)
}

$(function() {
  measureMobileViewportHeight()
  handleSiteNav()
})
