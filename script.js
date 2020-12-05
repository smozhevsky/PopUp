(function() {
$(document).ready(() => {
  //hide PopUp when page load
  PopUpHide();
});
//show the PopUp
PopUpShow = () => {
  $("#popup1").show();
};
//PopUp hide
PopUpHide = () => {
  $("#popup1").hide();
};
}());