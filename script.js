    let arrow = document.getElementsByClassName('arrow');
	let product = document.getElementsByClassName('card')
	let product_page = Math.ceil(product.length/2);
	let l = 0;
	let movePer = 33.50;
	let maxMove = 133;
	// mobile_view	
	let tab_view = window.matchMedia("(max-width:992px)");
	if (tab_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 250;
	 }
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 61.36;
	 	maxMove = 310;
	 }
	// mobile_view	
	let smmob_view = window.matchMedia("(max-width: 576px)");
	if (smmob_view.matches)
	 {
	 	movePer = 60.36;
	 	maxMove = 310;
	 }
	// mobile_view	
	let xsmmob_view = window.matchMedia("(max-width:400px)");
	if (xsmmob_view.matches)
	 {
	 	movePer = 83.36;
	 	maxMove = 462;
	 }
	// mobile_view	
	let xxsmmob_view = window.matchMedia("(max-width:400px)");
	if (xxsmmob_view.matches)
	 {
	 	movePer = 105.36;
	 	maxMove = 580;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>0){
				i.style.left = '-' + l + '%';
			}
		}
	}
	arrow[1].onclick = ()=>{right_mover();}
	arrow[0].onclick = ()=>{left_mover();}


// Tabs
let spans = document.querySelectorAll(".tabs span");

spans.forEach(tab =>{
tab.addEventListener("click",()=>{
	spans.forEach(clear =>{
		clear.classList.remove("active")
	})
	tab.classList.add("active")
})
})