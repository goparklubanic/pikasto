$(document).ready( function(){
	var oid = localStorage.getItem('oid');
	$.ajax({
		url:serviceUrl+"/?obj=odt&id="+oid,
		success: function(orderDetil){
			$("#orderDetil").html(orderDetil);
		}
	});
	$.getJSON(serviceUrl+'?obj=mgr',function(menuGroups){
		$("#menuGroups li").remove();
		$.each(menuGroups,function(i,menu){
			$("#menuGroups").append(
			"<li class='list-group-item'>"+
			"<a href=# class='mg' id='"+menu.id+"'>"+
			menu.name+"</a></li>"
			);
		});
	});


});

$(document).on("click",".mg",function(){
	var idx = $(this).attr('id');
	var txt = $(this).html();
	//console.log(idx+'-'+txt);
	localStorage.setItem('mgid',idx);
	localStorage.setItem('menu',txt);

  window.location='menuLists.html';
});
