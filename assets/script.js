var checkList = document.getElementsByClassName('d-check');
for(i=0;i<checkList.length;i++){
	console.log(checkList[i]);
	var anchor = checkList[i].getElementsByClassName('anchor')[0];
	console.log(anchor)
	anchor.addEventListener('click', function(){
		console.log(anchor)
		if (anchor.classList.contains('visible'))
		anchor.classList.remove('visible');
		else
		anchor.classList.add('visible');
	}) 
}
