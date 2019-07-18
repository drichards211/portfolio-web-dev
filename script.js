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
})
