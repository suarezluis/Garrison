let audio = new Audio("./audio/commercial.mp3");

$(".play").on("click", playAndHide);
$(".stop").on("click", stopAndHide);

function playAndHide() {
  $(".play").addClass("hide");
  $(".stop").removeClass("hide");
  audio.play();
}

function stopAndHide() {
  $(".stop").addClass("hide");
  $(".play").removeClass("hide");
  audio.pause();
  audio = new Audio("./audio/commercial.mp3");
}
