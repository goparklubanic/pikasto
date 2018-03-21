$(document).ready( function(){
  checkCookie();
  setId();
  $("#logout").click( function(){
    clearCookie();
  });
});

function checkCookie(){
  var uid = localStorage.getItem('uid');
  var rln = localStorage.getItem('rln');
  var lgn = localStorage.getItem('lgn');
  if(uid == null || uid == ''){
    window.location='login.html';
  }
}

function clearCookie(){
  uid = localStorage.setItem('uid','');
  rln = localStorage.setItem('rln','');
  lgn = localStorage.setItem('lgn','');
  window.location='login.html';
}
function setId(){
  var userId = localStorage.getItem('uid');
  var rlName = localStorage.getItem('rln');
  var lLogin = localStorage.getItem('lgn');
  $("#waiterName").html(rlName);
  $("#lastLogin").html(lLogin);
}
