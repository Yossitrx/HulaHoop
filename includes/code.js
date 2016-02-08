// function getHulaId() {
// 	var aKeyValue = window.location.search.substring(1).split("&");
// 	var hulaId = aKeyValue[0].split("=")[1];
// 	return hulaId;
// 	};




function getDataFromJson(json_name) {

	$.getJSON('json/' + json_name, function(data) {
		var ul =  $('ul.pickHulaPattern');	 
		for (var key in data.products){

			var li = $('<li></li>');
			var a = $('<a></a>', {
				class: 'colorjquery',
				id: data.products[key].id
			});
			a.attr('href','#');
			var img = $('<img>', {
				src: data.products[key].url
			})
			a.append(img);
			li.append(a);
			ul.append(li);
		}		
	});
};


var changeHulaColor = function() {

	switch($(this).attr("id")){
		case "a":
			$(".line1").css({
				fill: '#D65F33'
			});
			$(".line2").css({
				fill: '#FF4FB6'
			});
			$(".line3").css({
				fill: '#FFA735'
			});
			$(".line4").css({
				fill: '#E5FF55'
			});
			$(".line5").css({
				fill: '#FFFAC3'
			});
			$(".line6").css({
				fill: '#DD2FFF'
			});
			$(".line7").css({
				fill: '#BC3EFF'
			});
			$(".line8").css({
				fill: '#7847FF'
			});
			break;
		case "b":
			$(".line1").css({
				fill: 'red'
			});
			$(".line2").css({
				fill: '#FF4FB6'
			});
			$(".line3").css({
				fill: '#FFA735'
			});
			$(".line4").css({
				fill: '#E5FF55'
			});
			$(".line5").css({
				fill: '#FFFAC3'
			});
			$(".line6").css({
				fill: '#DD2FFF'
			});
			$(".line7").css({
				fill: '#BC3EFF'
			});
			$(".line8").css({
				fill: 'red'
			});
			break;
	}
}



$("document").ready(function() {
		
	$(".colorjquery").click(changeHulaColor);

	$(".toSumUp2").click(function() {
		window.location.href = "HoopStep2.html";
	});
	$(".toSumUp1").click(function() {
		window.location.href = "HoopStep1.html";
	});
	$('#dialog').hide();
	$('#mega').click(function() {
		$( "#dialog" ).show('fast', function() {
				
	 	});
	});
	$('main').click(function() {
		$('#dialog').hide();
	});
	$('#questionDiv').hide(); 
	$('.question').click(function() {
		$('#questionDiv').dialog();
	});

	//***************************************//
	//										 //
	// 		  HulaHoop1.html jQuery			 //				
	//										 //
	//***************************************//

	var json1 = "prod.json",
		json2 = "prod2.json";

	getDataFromJson(json1);

	//on click --> left 

	$.getJSON('json/prod.json', function(data) {
		console.log("i'm here 2");
	});

	//************ END page-1 ***************//
});


