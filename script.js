function handleSiteNav() {
// Respond to top-bar clicks:
  console.log('handleSiteNav() running')
  $(".site-nav").on("click", function( e ) {
    e.preventDefault()
    // href='#top' is used in html to preserve navigation if JavaScript fails to load.
    // Ternary operator changes value of href='#top' to 'html, body' so JS can successfully 
    // scroll to the top of page. All other values are assigned to hrefNew without changes.
    let hrefNew = ($(this).attr('href') === '#top' ? 'html, body' : $(this).attr('href'))
    $("body, html").animate({ 
      scrollTop: $(hrefNew).offset().top 
    }, 800)
  })
  // Respond to other button presses:
  $('body').on('click', 'button', function(event) {
    // portfolio button pressed:
    if (`${$(this).prop('id')}` === 'portfolio-button') {
      console.log("portfolio button pressed")
      // scroll to beginning of portfolio section:
      $('html, body').animate({
        scrollTop: ($('.spring').offset().top)
    },800);
    } 
    // hamburger button pressed:
    if (`${$(this).prop('id')}` === 'hamburger-button') {
      console.log("hamburger button pressed")
      // pseudocode - display hamburger dropdown menu:
    } 
  })
}

function centerNameVertically() {
// Centers name vertically within the hero image:
  console.log("centerNameVertically() running")
  setTimeout(function() {
  // wait 0.3 seconds for .fitText to finish adjusting text-size before executing:
    let nameHeight1 = $(".name").outerHeight() + "px"
    $(".name").css({"top": `calc(50% - (${nameHeight1} / 2))`})
    $(".name").css({"transition": "top 0.5s"})
  }, 300)
  window.onresize = function() {
    centerNameVertically()
  }
}

$(function() {
  handleSiteNav()
  centerNameVertically()
})
