const btm_prev = document.querySelector (".prev");
const btm_next = document.querySelector (".next");
const img = document.querySelectorAll("img");

var i = 0; 

btm_next.onclick = function () {
	img[i].className = "";
	i++;
	if (i>=img.length){i=0};
	img[i].className = "showed";
	
};	
	

btm_prev.onclick = function() {
	img[i].className = "";
	i--;
	if (i<0) {i=img.length-1}
	img[i].className = "showed";
};