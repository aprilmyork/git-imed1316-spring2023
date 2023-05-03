// A $( document ).ready() block.
$(document).ready(function () {
  //console.log("ready!");

  $("imed-gallery").nanogallery2({
    thumbnailWidth: "auto",
    colorScheme: {
      thumbnail: {
        borderColor: "rgba(136,107,164,20)"
      }
    },
    thumbnailDisplayTransition: "slideLeft",
    thumbnailLabel: {
      position: "overImageOnBottom"
    },
    thumbnailHoverEffect2: "imageScaleIn80",
    thumbnailAlignment: "center",
    gallerySorting: "titleasc",
    thumbnailOpenImage: true
  });
});
