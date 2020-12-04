$(document).ready(() => {
  //hide PopUp when page load
  PopUpHide();
});
//show the PopUp
PopUpShow = () => {
  $("#popup1").show();
};
//Функция скрытия PopUp
PopUpHide = () => {
  $("#popup1").hide();
};