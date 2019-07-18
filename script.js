function handleSiteNav() {
// Respond to user button presses:
  console.log('handleSiteNav() running')
  $('body').on('click', 'button', function(event) {
    // portfolio button pressed:
    if (`${$(this).prop('id')}` === 'portfolio') {
      console.log("portfolio button pressed")
      // scroll to beginning of portfolio section:  
      $('html, body').animate({
        scrollTop: ($('.spring').offset().top)
    },800);
    } 
    // seasons-thumbnail button pressed:
    if (`${$(this).prop('id')}` === 'seasons-thumbnail') {
      console.log("seasons-thumbnail button pressed")
      // scroll to top of page:
      $('html, body').animate({
        scrollTop: ($('html, body').offset().top)
    },800);
    } 
    // hamburger button pressed:
      if (`${$(this).prop('id')}` === 'hamburger') {
      console.log("hamburger button pressed")
      // display hamburger dropdown menu:
      $('html, body').animate({
        scrollTop: ($('.spring').offset().top)
    },800);
    } 
  })
}

function centerNameVertically() {
// Centers name vertically within the hero image:
  console.log("centerNameVertically() running")
  setTimeout(function() {
    // wait 0.3 seconds for .fitText to finish adjusting text-size before executing:
    console.log("Re-centering name verticaly inside hero image")
    let nameHeight1 = $(".name").outerHeight() + "px"
  $(".name").css({"top": `calc(50% - (${nameHeight1} / 2))`})
  $(".name").css({"transition": "top 0.5s"})
  }, 300)
  window.onresize = function() {
    setTimeout(function() {
    // wait 0.3 seconds for .fitText to finish adjusting text-size before executing:
      console.log("Re-centering name verticaly inside hero image")
      let nameHeight2 = $(".name").outerHeight() + "px"
      $(".name").css({"top": `calc(50% - (${nameHeight2} / 2))`})
      $(".name").css({"transition": "top 0.5s"})
    }, 300)
  }
}

$(function() {
  centerNameVertically()
  handleSiteNav()
})
