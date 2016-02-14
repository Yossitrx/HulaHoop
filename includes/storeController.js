$("document").ready(function() {
	var getItems = $.get("rawData.php", function(data) {
		var tumb, galeria;
		galeria = $("#galleria");
		for (var key in data){
			tumb = '<div class="col-sm-6 col-md-3">'+
					    '<div class="thumbnail">'+
					      '<img src="'+data[key].image+'" alt="HulaHoop image" title="HulaHoop image">'+
					      '<div class="caption">'+
					      	'<h4><u>מודל: ' +data[key].model+'</u></h3>'+
					        '<h5>משקל: '+data[key].weight+'g</h5>'+
					        '<h5>מחיר: '+data[key].price+'&#8362</h5>'+
					      '</div>'+
					    '</div>'+
				  	'</div>';
			galeria.append(tumb);
		}
	},'json');
	getItems.complete(function() {
		$('.thumbnail').click(function(){
			$(this).toggleClass('thumbnailToBuy');
			if($(".thumbnailToBuy").length !=0 ){
				$('#butBTN').removeClass('cantBuy');
				$('#butBTN').addClass('canBuy');
				$('.buyHulas').css("cursor","pointer");
			}else{
				$('#butBTN').addClass('cantBuy');
				$('#butBTN').removeClass('canBuy');
				$('.buyHulas').css("cursor","not-allowed");
			}
		});
	});
	$('#butBTN').click(function(){
		if($(".thumbnailToBuy").length !=0 ){
			var confirm = $('<section class="confirmOrder">הזמנה נשלחה</section>');
			var parent = $(this).parent();
			$(this).remove();
			parent.append(confirm);
			confirm.show("slow");
			setTimeout(function(){
  				window.location.href = "cart.html";
			}, 1500);
		}
	});
});