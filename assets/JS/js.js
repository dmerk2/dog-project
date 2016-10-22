//Waits for document to fully load before the following functions will happen
$(document).ready(function(){
	
	//When picture 1 is clicked the following will happen
	$("#pic1").click(function(){
		//Picture 1 will fade out taking 3 seconds
		$("#pic1").fadeOut(3000);
		//Picture 1 will appear again taking 3 seconds
		$("#pic1").fadeIn(3000);
	});
	$("#pic2").click(function(){
		$("#pic2").hide(3000);
		$("#pic2").show(3000);
	});
	$("#pic3").click(function(){
		$("#pic3").slideUp(3000);
		$("#pic3").slideDown(3000);
	});

// $("#shelterSearch").click(function(){
	
// });


});