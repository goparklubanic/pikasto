$(document).ready( function(){

  $.ajax({
    url:serviceUrl+"/?obj=aco",
    success:function(aos){
      $("#aolist").html(aos);
    }
  });
});

$(document).on('click','.oid',function(){
  var oid =  $(this).attr('id');
  //console.log(oid);
  localStorage.setItem("oid",oid);
  window.location='menuGroup.html';
});
