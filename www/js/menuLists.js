$(document).ready( function(){
  var oid  = localStorage.getItem('oid');
  var mgid = localStorage.getItem('mgid');
  var menu = localStorage.getItem('menu');
  $("#menu").html(menu);
	$.ajax({
		url:serviceUrl+"/?obj=odt&id="+oid,
		success: function(orderDetil){
			$("#orderDetil").html(orderDetil);
		}
	});
  $.getJSON(
    serviceUrl+"/?obj=mls&id="+mgid,
    function(menus){
      $("#menuLists li").remove();
      $.each(menus,function(i,menu){
        $("#menuLists").append(
          "<li class='list-group-item' style='color:"+menu.stok+";'>"+
          "<input type='number' class='menuqty' id='menu"+menu.id+"' max='999' />"+
          menu.nama+"<span style='float:right; margin-right:15px;'>"+
          "<img class='round-border' src='img/checkmark.png' id="+menu.id+" /></span></li>"
        );
      });
    }
  );

  $.ajax({
    url:serviceUrl+"/?obj=odl&id="+oid,
    success: function(response){
      $("#orderList").html(response);
    }
  });

});


$(document).on('click','.round-border',function(){
  var idx = $(this).attr('id');
  var qty = $("#menu"+idx).val();

  $.post(
    serviceUrl+"/?obj=odm",
    {
      oid : localStorage.getItem('oid'),
      mid : idx,
      qty : qty
    },
    function(){
      $.ajax({
        url:serviceUrl+"/?obj=odl&id="+localStorage.getItem('oid'),
        success: function(response){
          $("#orderList").html(response);
        }
      });
    }
  );
});

$(document).on('click','.menu-cancel',function(){
  var mid = $(this).attr('id');
  var oid = localStorage.getItem("oid");
  // console.log("batalkan menu",oid+','+mid);

  $.post(
    serviceUrl+"/?obj=omc",
    {
      mid : mid
    },function(){
      $.ajax({
        url:serviceUrl+"/?obj=odl&id="+oid,
        success: function(response){
          $("#orderList").html(response);
        }
      });
    }
  );

});
