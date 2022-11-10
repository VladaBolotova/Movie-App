// global scope - scope 1
var checkList = document.getElementsByClassName('d-check');
for(i=0;i<checkList.length;i++){
	//for loop "local" scope - scope 2
	var anchor = checkList[i].querySelector('.anchor');
	anchor.addEventListener('click', function(event){
		//event listener "local" scope - scope 3
		if (event.target.parentElement.classList.contains('visible')){
			event.target.parentElement.classList.remove('visible');
			// if there is an input with a type range then add a class with display none 
		
		}else{
			event.target.parentElement.classList.add('visible');
			// if there is an input with a type range then remove the class with display none 
		}
	}) 
}

$(".range-selector").click(function(){
	var range=$(this).children(".range-container")[0];
	if($(range).hasClass("hidden")){
		$(range).removeClass("hidden");
	}else{
		$(range).addClass("hidden");

	}
	

})

$("#points").on('change',function(){
	$("#pt").text(this.value)
})

$("#point").on('change',function(){
	$("#pf").text(this.value)
})


$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 1950,
      max: 2022,
      values: [ 1970, 2000],
      slide: function( event, ui ) {
    $("#min").html(ui.values[0]);
	$("#max").html(ui.values[1]);

      }
    });

	
    
  } );

  