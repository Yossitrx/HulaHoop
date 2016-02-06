function getHulaId() {
	var aKeyValue = window.location.search.substring(1).split("&");
	var hulaId = aKeyValue[0].split("=")[1];
	return hulaId;
	};



function getDataFromJson(co) {
	console.log("here");
	var test = co;
	$.getJSON('json/prod.json', function(data) {
		$.each(data.products, function(k, v) {
			if (test = v.id) {
				console.log("HERE");
			};
		
		});		
	});
	return test;
};



var changeHulaColor = function() {

	switch($(this).attr("id")){
		case "a":
			var co = "prodA";
			var hulaId  = getDataFromJson(co);
			console.log(hulaId);
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
	$.getJSON('json/prod.json', function(data) {
		console.log("i'm here 2");
	});


});


