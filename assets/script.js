// global scope - scope 1
var checkList = document.getElementsByClassName('d-check');
for(i=0;i<checkList.length;i++){
	//for loop "local" scope - scope 2
	var anchor = checkList[i].querySelector('.anchor');
	anchor.addEventListener('click', function(event){
		//event listener "local" scope - scope 3
		if (event.target.parentElement.classList.contains('visible'))
		event.target.parentElement.classList.remove('visible');
		else
		event.target.parentElement.classList.add('visible');
	}) 
}