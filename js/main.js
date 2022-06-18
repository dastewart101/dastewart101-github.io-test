

document.addEventListener("DOMContentLoaded", function() {
	console.log("doc is ready");
});

  // closes the hamburger menu and drop down menu if open when viewport is > than 800px
	window.addEventListener("resize", () => {
		const newWidth = window.innerWidth;
			if (newWidth > 800) {
				document.body.classList.remove("open1");
				
			}
		});

		//opens navigation on button click
const menuOpen = document.querySelector(".btn1");

menuOpen.addEventListener("click", () => {
	document.body.classList.toggle("open1");	
	
});

// closes the nav menu if clickoff btn. removes the open1 class
const links = document.querySelector(".nav-items");
 window.addEventListener('mouseup', function(e) {
	const closeNav = document.querySelector('#navClose');
		if (e.target !== menuOpen && e.target !== links ) {
			document.body.classList.remove("open1");
			
		}
}); 
