function hideImage() {
  $('.Restaurant').hide();

}
window.onload = hideImage;

function showImage(id)
{
  $(id).show();
  $(id).show().animate({"margin-top": '-50px'})
  $(id).show().animate({"margin-top": '50px'})

  $(id).show().animate({"margin-top": '0px'})
}
