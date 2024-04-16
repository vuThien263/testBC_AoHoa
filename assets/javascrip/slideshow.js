/*JS BANNER-SALE*/
var fulltime =new Date("may 21, 2023 22:10:00").getTime();
	setInterval(function()
	{
		var now=new Date().getTime();
		var Duration=fulltime-now;
		var days=Math.floor(Duration/(1000*60*60*24));
		var hours=Math.floor(Duration/(1000*60*60));
		var minutes=Math.floor(Duration/(1000*60));
		var seconds=Math.floor(Duration/1000);
		
		hours %=24;
		minutes %= 60;
		seconds %=60;
		
		document.getElementById("days").innerHTML=days;
		document.getElementById("hours").innerHTML=hours;
		document.getElementById("minutes").innerHTML=minutes;
		document.getElementById("seconds").innerHTML=seconds;
		
		if(Duration<=0)
			{
				document.getElementById("days").innerHTML=0;
		document.getElementById("hours").innerHTML=0;
		document.getElementById("minutes").innerHTML=0;
		document.getElementById("seconds").innerHTML=0;
				const end =document.getElementById("end");
				end.style.display="block";
				end.style.color="red";
				end.style.textAlign="center";
			}
	},1000) 


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) 
  {
    slideIndex = 1
   }
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

setInterval(function() {
  plusDivs(1);
},3000);

              /* LINH KIỆN ĐIỆN TỬ */
var slideLKDT = 1;
showLKDT(slideLKDT);

function plusLKDT(m) {
  showLKDT(slideLKDT += m);
}

function showLKDT(m) {
  var j;
  var y = document.getElementsByClassName("LKDT");
  if (m > y.length) 
  {
    slideLKDT = 1
   }
  if (m < 1) {slideLKDT = y.length}
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";  
  }
  y[slideLKDT-1].style.display = "block";  
}

setInterval(function() {
  plusLKDT(1);
},3000);


              /* MẠCH ĐIỆN */

var slideMD = 1;
showMD(slideMD);

function plusMD(k) {
  showMD(slideMD += k);
}

function showMD(m) {
  var j;
  var y = document.getElementsByClassName("machDien");
  if (m > y.length) 
  {
    slideMD = 1
   }
  if (m < 1) {slideMD = y.length}
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";  
  }
  y[slideMD-1].style.display = "block";  
}

setInterval(function() {
  plusMD(1);
},3000);

/*Back to top*/
var myButton = document.getElementById("back-to-top");

		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				myButton.style.display = "block";
			} else {
				myButton.style.display = "none";
			}
		}

		myButton.addEventListener("click", backToTop);

		function backToTop() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}


