// menu JS 

//function to hide images on the page using jQuery
function hideImage() {
  $('.Restaurant').hide(); //gets the class from the img and hides it 

}
window.onload = hideImage; // load the JS (hide the imgage) straight after the page is loaded 

//function to show images after pressing a button on the page using jQuery
function showImage(id)
{
  $(id).show(); //shows the id (img)
  // animation of the image after pressing the button 
  $(id).show().animate({"margin-top": '-50px'})
  $(id).show().animate({"margin-top": '50px'})
// puts the image back to it's original place
  $(id).show().animate({"margin-top": '0px'})
}
