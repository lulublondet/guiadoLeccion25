
window.addEventListener("load", function(){

	var urlImage = ["assets/img/uno.jpg",
					"assets/img/dos.jpg",
					"assets/img/tres.jpg",
					"assets/img/cuatro.jpg",
					"assets/img/cinco.jpg",
					"assets/img/seis.jpg"]	
	
	for(i in urlImage) {
		creandoDiv(urlImage[i]);}
	})




function creandoDiv(getURL) {
 	var  contenedor = document.getElementById("contenedor");
 	var div = document.createElement("div");
 	var img = document.createElement("img");	
 	img.setAttribute("src",getURL);
 	div.classList.add("contenedor-imagen");
 	div.appendChild(img);
 	contenedor.appendChild(div);
}



var inputURL = document.getElementById("url");
	inputURL.addEventListener("keydown", getURL);

function getURL(e) {
	console.log(e);
	if(e.keyCode==13) {
		creandoDiv(this.value);
		this.value = " ";
	}
}



