document.addEventListener("DOMContentLoaded", function () {
	console.log("doc is ready");
});

const moveLines = document.querySelector(".btn1");

moveLines.addEventListener("click", () => {
	document.body.classList.toggle("open1");
	console.log(moveLines);
});

/* const xclClick = document.querySelector("body");

xclClick.addEventListener("click", () => {
	document.body.classList.remove("open1");
}); */
