var modelName = "kid";



function getDataFromJson(json_name) {


	var getjson = $.getJSON('json/' + json_name, function(data) {
		var ul =  $('.pickHulaPattern');	 
		for (var key in data.products){

			var li = $('<li></li>');
			var a = $('<a></a>', {
				class: 'colorjquery',
				id: data.products[key].id
			});
			a.attr('href','#');
			var img = $('<img>', {
				src: data.products[key].url
			});
			a.append(img);
			li.append(a);
			ul.append(li);
		}	
	});

	getjson.complete(function() {

		$('.colorjquery').click(function(e){ 
			e.preventDefault();
			changeHulaColor(this.id);
		});
	});
};


var changeHulaColor = function(id) {
	
	switch(id){
		case "prod1":
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
			modelName = "kid";
			break;
		case "prod2":
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
			modelName = "kid2";
			break;
	}
}





function getHulaId() {
	var aKeyValue = window.location.search.substring(1).split("&");
	if (aKeyValue == -1) {
		return "";
	};
	var hulaId = aKeyValue[0].split("=")[1];
	return hulaId;
};



$("document").ready(function() {
	//***************************************//
	//										 //
	// 		    index.html jQuery			 //				
	//										 //
	//***************************************//
	



    //************ END page-0 ***************//
	



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
	
	var json1 = "prod1.json",
		json2 = "prod2.json";

	getDataFromJson(json1);
	//Left click
	$('.btn-left').click(function() {
		$('.pickHulaPattern').empty();
		getDataFromJson(json2);
	});
	//Right click
	$('.btn-right').click(function() {
		$('.pickHulaPattern').empty();
		getDataFromJson(json1);
	});
	$(".toSumUp2").click(function() {
		console.log(modelName);
		window.location.href = "HoopStep2.html?model=" + modelName;
	});
	//************ END page-1 ***************//

	//***************************************//
	//										 //
	// 		  HulaHoop2.html jQuery			 //				
	//										 //
	//***************************************//

	//go back to pick hulaHoop color 
	$(".toSumUp1").click(function() {
		window.location.href = "HoopStep1.html";
	});

	var model = getHulaId();
	if(model != "") {
		$('.hulaSelectColor').val($('.hulaSelectColor').val() + model);
	}


	$('.dataFromForm').click(function() {

		var hulaSize = $(".dataInputAge"),
		hulaWeight = $(".dataInputKind"),
		hulaModelColor = $('.hulaSelectColor'),
		hulaAmount = $('.hulaAmount');

		console.log("Size  " + hulaSize.val());
		console.log("weight  " + hulaWeight.val());
		console.log("amount  " + hulaAmount.val());
		console.log("modelColor  " + hulaModelColor.val());



		var sum = 10;
		$('.hulaPrice').append(sum);
		// var strs = $("form").serialize();
		// var sum = strs.amount;
		// console.log(sum);
		// console.log('HHHH');

	});


   // 	var str = $( "form" ).serialize();
   //  $( "#results" ).text( str );
  	
  	// $( "input[type='checkbox'], input[type='radio']" ).on( "click", showValues );
  	// $( "select" ).on( "change", showValues );
  	// showValues();


	//button on click 
	/*
		get the form 
		get the input value  
		check if the values != "" (empty)
		if its not empty {
			sum = calculate 
			catch the sum element and put there the sum 
		}

	*/

	//************ END page-2 ***************//



});


