<?php 
/*
CSS: assets/css/home.css -> (REQUEST DEVELOPER)
JS:	assets/js/home.js -> (REQUEST DEV (FORM))
*/
 ?>
<!-- Request Developer -->
<section id="seeking_developer">

	<div id="seeking_title" class="section_title">Need a Developer?</div>
	
	<div id="seeking_description">Have an app or website you need developed or designed? Need a little consulting?</div>

	<form id="request_developer_form">
		<input class="text_input_l" placeholder="Full Name">
		<input class="text_input_r" placeholder="Email">
		<input class="text_input_l" placeholder="Organization (if applicable)">
		<input class="text_input_r" placeholder="Phone #">
		
		<div class="textarea_group">
			<div class="text_area_title">Tell Us About Your Project <span>(max 200 words)</span></div>
			<textarea id="about_project_textarea" form="request_developer_form" placeholder=""></textarea>
			<div id="textarea_word_total">0/200</div>
		</div>

	
		<!-- Checkbox Fieldset -->
		<fieldset class="fieldset_group">

			<div class="fieldset_category">Platform <span>(check all that apply)</span></div>

			<label class="fieldset_label checkbox_label">
		  	<div class="field_title">iOS</div>
		  	<input type="checkbox">
		  	<div class="custom_check"><img class="" src="assets/images/home/check_lime.png"></div>
		  </label>

		  <label class="fieldset_label checkbox_label">
		  	<div class="field_title">Android</div>
		  	<input type="checkbox">
		  	<div class="custom_check"><img class="" src="assets/images/home/check_lime.png"></div>
		  </label>

		  <label class="fieldset_label checkbox_label">
		  	<div class="field_title">Website</div>
		  	<input type="checkbox">
		  	<div class="custom_check"><img class="" src="assets/images/home/check_lime.png"></div>
		  </label>
		</fieldset>

		<!-- Radio Fieldset -->
		<fieldset class="fieldset_group">
			<div class="fieldset_category">Compensation</div> 
			
			<label class="fieldset_label radio_label">
		  	<div class="field_title">Paid</div>
		  	<input name="compensation" value="1" type="radio">
		  	<div class="custom_radio"></div>
		  </label>

		  <label class="fieldset_label radio_label">
		  	<div class="field_title">Non-Profit</div>
		  	<input name="compensation" value="1" type="radio">
		  	<div class="custom_radio"></div>
		  </label>

		  <label class="fieldset_label radio_label">
		  	<div class="field_title">We'll Talk</div>
		  	<input name="compensation" value="1" type="radio">
		  	<div class="custom_radio"></div>
		  </label>

	  </fieldset>

		<div class="form_bottom_padding"></div>

		<input id="submit_btn" type="submit" value="Submit">

	</form>
</section>