(function main() {
	// let desct = document.querySelectorAll(".desct");
	let item = document.querySelectorAll(".item");
	// let icons = document.querySelectorAll(".item img");
	let taxi = document.querySelector(".taxi img");
	let body = document.querySelector("body");
	let wrapContent = document.querySelector(".wrap-content");
	window.onload = ()=>{
		wrapContent.classList.add("move");
		taxi.classList.add("anti-move");
		for(let elem of item) {
			elem.classList.add("anti-move");
		}
		body.addEventListener("mouseover", ()=>{
			wrapContent.classList.add("animation-pause");
			taxi.classList.add("animation-pause");
			for(let elem of item) {
				elem.classList.add("animation-pause");
			}
		});
	};
})();