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
		for (var key in data){
			console.log(data[key].image);
		}
		
	},'json');








});



