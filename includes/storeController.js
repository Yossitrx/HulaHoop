$("document").ready(function() {


	// $.ajax({
	// 	url: '/ggggg.php',
	// 	type: 'GET',
	// 	dataType: 'json'
	// })
	// .done(function() {

	// 	var div = $("<div>,l,l,l,llmdsojocijiosjio</div>");
	// 	$(".summary").append(div);
	// 	console.log("success");
	// })

	// .fail(function() {
	// 	console.log("error");
	// })
	// .always(function() {
	// 	console.log("complete");
	// });
	

	$.get("rawData.php", function(data) {
		//console.log(data[0].name);
		// $.each(data, function(i, val) {
		// 	console.log(i);
		// })
		var tumb, galeria;
		galeria = $("#galleria");
		for (var key in data){
			tumb = '<div class="col-sm-6 col-md-3">'+
					    '<div class="thumbnail">'+
					      '<img src="'+data[key].image+'" alt="...">'+
					      '<div class="caption">'+
					        '<h3>'+data[key].name+'</h3>'+
					        '<h5>'+data[key].model+'</h5>'+
					        '<p>Price: '+data[key].price+' sekels</p>'+
					      '</div>'+
					    '</div>'+
				  	'</div>';
			galeria.append(tumb);
			console.log(data[key].image);
		}
		
	},'json');








});



