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
			a.data('model',data.products[key].model);
			a.attr('href','#');
			var img = $('<img>', {
				class: "prodImg",
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
			changeHulaColor(this.id,$(this).data("model"));
		});
	});
};


var changeHulaColor = function(id,modelM) {
	modelName = modelM;
	switch(id){
	//***************************************//
	//										 //
	// 		   	     Image-1   	    		 //				
	//										 //
	//***************************************//
		case "prod1":
			$(".line1").css({
				fill: '#FF7F00'
			});
			$(".line2").css({
				fill: '#FFFF00'
			});
			$(".line3").css({
				fill: '#CFCFCF'
			});
			$(".line4").css({
				fill: '#FF7F00'
			});
			$(".line5").css({
				fill: '#FFFF00'
			});
			$(".line6").css({
				fill: '#CFCFCF'
			});
			$(".line7").css({
				fill: '#CFCFCF'
			});
			break;
	//***************************************//
	//										 //
	// 		   	     Image-2   	    		 //				
	//										 //
	//***************************************//
		case "prod2":
			$(".line1").css({
				fill: '#FF0000'
			});
			$(".line2").css({
				fill: '#FF7F00'
			});
			$(".line3").css({
				fill: '#BABABA'
			});
			$(".line4").css({
				fill: '#FFA2EF'
			});
			$(".line5").css({
				fill: '#FF9FA2'
			});
			$(".line6").css({
				fill: '#BABABA'
			});
			$(".line7").css({
				fill: '#BABABA'
			});
			break;
	//***************************************//
	//										 //
	// 		   	     Image-3   	    		 //				
	//										 //
	//***************************************//
		case "prod3":
			$(".line1").css({
				fill: '#91A6FF'
			});
			$(".line2").css({
				fill: '#AF81FF'
			});
			$(".line3").css({
				fill: '#6CA0BA'
			});
			$(".line4").css({
				fill: '#BBD6FF'
			});
			$(".line5").css({
				fill: '#505CFF'
			});
			$(".line6").css({
				fill: '#6CA0BA'
			});
			$(".line7").css({
				fill: '#6CA0BA'
			});
			break;
	//***************************************//
	//										 //
	// 		   	     Image-4   	    		 //				
	//										 //
	//***************************************//			
		case "prod4":
			$(".line1").css({
				fill: '#BD6AFF'
			});
			$(".line2").css({
				fill: '#FF99DA'
			});
			$(".line3").css({
				fill: '#7751BA'
			});
			$(".line4").css({
				fill: '#B577FF'
			});
			$(".line5").css({
				fill: '#F884FF'
			});
			$(".line6").css({
				fill: '#7751BA'
			});
			$(".line7").css({
				fill: '#7751BA'
			});
			break;
	//***************************************//
	//										 //
	// 		   	     Image-5   	    		 //				
	//										 //
	//***************************************//			
		case "prod5":
			$(".line1").css({
				fill: '#5C0792'
			});
			$(".line2").css({
				fill: '#679669'
			});
			$(".line3").css({
				fill: '#087918'
			});
			$(".line4").css({
				fill: '#6FFF36'
			});
			$(".line5").css({
				fill: '#9937C9'
			});
			$(".line6").css({
				fill: '#087918'
			});
			$(".line7").css({
				fill: '#087918'
			});
			break;
	//***************************************//
	//										 //
	// 		   	     Image-6   	    		 //				
	//										 //
	//***************************************//			
		case "prod6":
			$(".line1").css({
				fill: '#BFBFBF'
			});
			$(".line2").css({
				fill: '#7F7F7F'
			});
			$(".line3").css({
				fill: '#3F3F3F'
			});
			$(".line4").css({
				fill: '#C2C2C2'
			});
			$(".line5").css({
				fill: '#7F7F7F'
			});
			$(".line6").css({
				fill: '#3F3F3F'
			});
			$(".line7").css({
				fill: '#3F3F3F'
			});
			break;
	//***************************************//
	//										 //
	// 		   	     Image-7   	    		 //				
	//										 //
	//***************************************//			
		case "prod7":
			$(".line1").css({
				fill: '#4257B4'
			});
			$(".line2").css({
				fill: '#FFC535'
			});
			$(".line3").css({
				fill: '#11603A'
			});
			$(".line4").css({
				fill: '#5B9545'
			});
			$(".line5").css({
				fill: '#FFC23C'
			});
			$(".line6").css({
				fill: '#11603A'
			});
			$(".line7").css({
				fill: '#11603A'
			});
			break;
	//***************************************//
	//										 //
	// 		   	     Image-8   	    		 //				
	//										 //
	//***************************************//			
		case "prod8":
			$(".line1").css({
				fill: '#BB362A'
			});
			$(".line2").css({
				fill: '#50945C'
			});
			$(".line3").css({
				fill: '#6ABA9D'
			});
			$(".line4").css({
				fill: '#BB362A'
			});
			$(".line5").css({
				fill: '#11A523'
			});
			$(".line6").css({
				fill: '#6ABA9D'
			});
			$(".line7").css({
				fill: '#6ABA9D'
			});
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
	$('#questionDivA').hide();
	$('#questionDivB').hide();
	$('#questionDivC').hide();


	$('.questionA').click(function(e) {
		e.preventDefault();
		$('#questionDivA').dialog();
	});
	$('.questionB').click(function(e) {
		e.preventDefault();
		$('#questionDivB').dialog();
	});
	$('.questionC').click(function(e) {
		e.preventDefault();
		$('#questionDivC').dialog();
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


		var sum = (0.8 * parseInt(hulaSize.val()) + 0.8 * parseInt(hulaWeight.val())) * parseInt(hulaAmount.val());
		console.log(sum);
		$('.hulaPrice').html(sum);
	});


	//not working
	$('.addToFavor').click(function(e){
		e.preventDefault();
		$(this).find('span').toggleClass('heartOpacity');
	});

	$('#addToCart').click(function(e) {
		e.preventDefault();

		var hulaSize = $(".dataInputAge").val(),
		hulaWeight = $(".dataInputKind").val(),
		hulaModelColor = $('.hulaSelectColor').val(),
		hulaAmount = $('.hulaAmount').val();
		if (hulaSize == null || hulaWeight == null || hulaModelColor == null || hulaAmount == null ) {
			return;
		}
		console.log("Size  " + hulaSize);
		console.log("weight  " + hulaWeight);
		console.log("amount  " + hulaAmount);
		console.log("modelColor  " + hulaModelColor);

		$.post( "addToCart.php", 
				{ 
					"hulaSize": hulaSize, 
					"hulaWeight": hulaWeight,
					"hulaModelColor": hulaModelColor,
					"hulaAmount": hulaAmount

				})
				.done(function(data){
					console.log("success HERE");
					$('.cartIndicator')
						.text("נשלח בהצלחה")
						.css("background", "#67A54D");
				})
				.fail(function(data){
					console.log("faild");
				});
	});
	//************ END page-2 ***************//
});


