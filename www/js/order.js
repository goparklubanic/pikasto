$(document).ready( function(){
  var uid = localStorage.getItem('uid');
  $("#userId").val(uid);
  $.ajax({
    url:serviceUrl+"/?obj=oid",
    success:function(oid){
      $("#orderId").val(oid);
    }
  });

  $("#submit").click( function(){
    var orderId = $("#orderId").val();
    var customr = $("#customer").val();
    var send_To = $("#sendTo").val();
    var waitrId = $("#userId").val();

    $.post(
      serviceUrl+"/?obj=nwo",
      {
        orderId : orderId,
        customer: customr,
        sendTo  : send_To
      },
      function(response){
        localStorage.setItem('oid',orderId);
        $("#orderId").val('');
        $("#customer").val('');
        $("#sendTo").val('');
        $("#userId").val('');
        window.location='menuGroup.html';
      }
    );
  });

});
