/* ====================== *\
 *    HOME - UNIVERSAL    * 
\* ====================== */


/* ====================== *\
 *          HERO          * 
\* ====================== */

(function(){

	// Parallax
	var mainLogo = document.getElementById("main_logo");
	var arrowDown = document.getElementById("arrow_down");
	var clubName = document.getElementById("club_name");

	if(window.orientation === undefined){ //tests if mobile device
		window.addEventListener('scroll', adjustLogo );

		window.addEventListener('resize',function(){
			if(window.innerWidth > 600) nav.classList.remove("show_hamburger");
			adjustLogo();
		});

	} else {
		window.addEventListener('orientationchange', ifMobileDevice );
		ifMobileDevice();
		mainLogo.classList.remove("center_logo");
		mainLogo.classList.add("center_logo_mobile");
	}

	function ifMobileDevice() {
		// if mobile device and if orientation is landscape, prompt user to turn device to protrait mode 
		var rotate_device_cont = document.getElementById('rotate_device_cont');
		if(window.orientation !== 0 && window.innerWidth < 600){
			rotate_device_cont.classList.remove("hide");
		} else {
			rotate_device_cont.classList.add("hide");
			arrowDown.style.bottom = (6 - (window.pageYOffset * 0.15)) + "%";
		}
	} 

	function adjustLogo(){
		// this function is repeatedly called whan page is scrolled or resized
		arrowDown.style.bottom = (5 - (window.pageYOffset * 0.15)) + "%";
		mainLogo.style.top = ((window.pageYOffset * 0.05) + 20) + "%";
		clubName.classList.remove("hide");
	} 

	// Hamburger Menu
	var hamburger = document.getElementById('hamburger');
	var nav = document.getElementById('nav');
	hamburger.addEventListener('click',function(){
		nav.classList.toggle("show_hamburger");
	});

	// *new section code here*

})();


/* ====================== *\
 *        ABOUT US        * 
\* ====================== */

(function(){
	var aboutUsItems = document.getElementById('about_us_items');

	aboutUsItems.addEventListener('click',function(evt){
		var selected = evt.target;
		if(!selected.classList.contains("neon_underline")){
			var previousSelected = document.getElementsByClassName("neon_underline")[1];
			var previousText = document.getElementById(previousSelected.dataset.about);
			previousText.classList.add("hide_detail");
			previousSelected.classList.remove("neon_underline");
			selected.classList.add("neon_underline");
			document.getElementById(selected.dataset.about).classList.remove("hide_detail");
		}
	});

	// *new section code here*

})();


/* ====================== *\
 *   REQUEST DEV (FORM)   * 
\* ====================== */

(function(){
	// CHECKBOXES
	var checkboxes = document.getElementsByClassName("checkbox_label");
	for(var i = 0, ii = checkboxes.length; i < ii ; i++){
		checkboxes[i].addEventListener("click", function(e){
			if(e.target.tagName == "INPUT"){
				var checkbox = this.getElementsByTagName("input")[0];
				var customBox = this.getElementsByClassName("custom_check")[0];
				isChecked(checkbox, customBox);
			}
		});
	}
	function isChecked(box, customBox){
		if(box.checked){
			customBox.classList.add("is_checked");
			customBox.childNodes[0].classList.add("show");
		} else {
			customBox.classList.remove("is_checked");
			customBox.childNodes[0].classList.remove("show");
		}
	}

	// RADIO BTNS
	var radios = document.getElementsByClassName("radio_label");
	for(var i = 0, ii = radios.length; i < ii ; i++){
		radios[i].addEventListener("click", function(e){
			if(e.target.tagName == "INPUT"){
				isCheckedRadio();
			}
		});
	}
	function isCheckedRadio(){
		var radios = document.getElementsByClassName("radio_label");
		for(var i = 0, ii = radios.length; i < ii; i++){
			var radio_input = radios[i].getElementsByTagName("input")[0];
			var customRadio = radios[i].getElementsByClassName("custom_radio")[0];
			if(radio_input.checked){
				customRadio.classList.add("is_checked_radio");
			} else {
				customRadio.classList.remove("is_checked_radio");
			}	
		}
	}

	// textarea word count
	var textarea = document.getElementById("about_project_textarea");
	var word_total_div = document.getElementById("textarea_word_total");
	var word_count = null;
	var textareaInterval = null;
	textarea.addEventListener("focus", showTextareaWordCount);
	textarea.addEventListener("blur", hideTextareaWordCount);

	function showTextareaWordCount(){
		textareaInterval = window.setInterval(function(){
			var textareaString = textarea.value;
			var textareaArray = textareaString.split(/\s+/g);
			if(textareaArray[textareaArray.length-1] === ""){
				textareaArray.pop();
			}
			word_total_div.textContent = textareaArray.length+"/200"
			console.log(textareaArray.length);
			console.log(textareaArray);
		}, 2500); // check every 2.5 seconds while they are in the textarea
	}
	function hideTextareaWordCount(){
		console.log("================");
		console.log("stopped interval");
		window.clearInterval(textareaInterval);
		
	}


	// *new section code here*

})();