// JavaScript Document
(function () {
//runCar();
var index=1;
//alert("is this on");
	
/*var isActive=0;	
function setActive(){
	isActive=1;
}*/

/*function stopCar(){
	isActive = 0;
}*/
function runCar(){
	
	//setActive;
	//while(isActive==1){
		//alert("is this on");
		
		var ActiveCar=document.querySelector("#wyattCon > img:nth-child("+1+")");
		//var ActiveCar = document.querySelector(".WyattCarousel .carImage" + index);
		//ActiveCar.style.display = "inline";
		//ActiveCar.className="carImageActive";
		if(index==1){
			ActiveCar.src="midtownCropWeb.png";
		}
		if(index==2){
			ActiveCar.src="midtownGradMap.png";
		}
		if(index==3){
			ActiveCar.src="midtownBw.png";
			/* Reset index*/
			index=0;
		}
		
		index = index+1;
		/*change index of next slides after value change*/
		//var NxtCar=document.querySelector("#wyattCon > img:nth-child("+index+")");
		//NxtCar.className = "carImageActive";
		
	//}
	
}
	setInterval(function() { runCar(); },2000);
})();