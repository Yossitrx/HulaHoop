$("document").ready(function() {

	var getItems = $.get("rawData.php", function(data) {
		var tumb, galeria;
		galeria = $("#galleria");
		for (var key in data){
			tumb = '<div class="col-sm-6 col-md-3">'+
					    '<div class="thumbnail">'+
					      '<img src="'+data[key].image+'" alt="...">'+
					      '<div class="caption">'+
					        '<h3>'+data[key].weight+'</h3>'+
					        '<h5>'+data[key].model+'</h5>'+
					        '<p>Price: '+data[key].price+' sekels</p>'+
					      '</div>'+
					    '</div>'+
				  	'</div>';
			galeria.append(tumb);
			console.log(data[key].image);
		}
	},'json');

	getItems.complete(function() {
		$('.thumbnail').click(function(){
			console.log($(this));
			$(this).toggleClass('thumbnailToBuy');
		});
	});


	$('.buyHulas').click(function(){

		var confirm = $('<section class="confirmOrder">תודה !!</section>');
		var parent = $(this).parent();
		$(this).remove();
		parent.append(confirm);
		confirm.show("slow");
	});
});



