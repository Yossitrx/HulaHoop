$("document").ready(function() {
	var getItems = $.get("cartD.php", function(data) {
		var tumb, galeria;
		galeria = $("#galleria");
		for (var key in data){
			tumb = '<div class="col-sm-6 col-md-3 cartmd">'+
					    '<div class="thumbnail cartBox">'+
					      '<h4><u>מודל: ' +data[key].model+'</u></h3>'+
					      '<div class="caption">'+
					      	'<h4>משקל: ' +data[key].size+'</h3>'+
					        '<h5>משקל: '+data[key].weight+'g</h5>'+
					        '<h5>כמות: '+data[key].amount+'</h5>'+
					      '</div>'+
					    '</div>'+
				  	'</div>';
			galeria.append(tumb);
		}
	},'json');
	getItems.complete(function() {
		$('.buyHulas').css("cursor","pointer");
		$('#butBTN').removeClass('cantBuy');
		$('#butBTN').addClass('canBuy');
	});
	$('#butBTN').click(function(){
		setTimeout(function(){
  		window.location.href = "index.html";
		}, 100);
	});
});