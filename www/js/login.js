$(document).ready( function(){
  $("#submit").click(function(){
    var uname = $("#uname").val();
    var upass = $("#upass").val();

    $.post(serviceUrl+"?obj=lin",
      {
        u : uname,
        p : upass
      },
      function(response) {
        $("#uname").val('');
        $("#upass").val('');
        //$("#login-response").html(response);
        var user = JSON.parse(response);
        setCookie(user.uid , user.rln , user.lgn);
      }
    )
  });
});

function setCookie(uid,rln,lgn){
  var uid = localStorage.setItem('uid',uid);
  var rln = localStorage.setItem('rln',rln);
  var lgn = localStorage.setItem('lgn',lgn);
  if(uid == null || uid == ''){
    window.location='index.html';
  }
}
