var timeout;
jQuery(function () {
	jQuery(document).on('keydown', '.weptile-image-slider-widget-number-only-input', function (event) {
		// Allow: backspace, delete, tab, escape, and enter
		if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
			// Allow: Ctrl+A
			(event.keyCode == 65 && event.ctrlKey === true) ||
			// Allow: home, end, left, right
			(event.keyCode >= 35 && event.keyCode <= 39)) {
			// let it happen, don't do anything
			return true;
		}
		else {
			// Ensure that it is a number and stop the keypress
			if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
				event.preventDefault();
			}
		}
	});
	
	
		var img_url_text_container_id = '';
	var submit_button_id = '';
   //uploading files variable
   var custom_file_frame;
   jQuery(document).on('click', '[id$="slider-images-upload-button"]', function(event) {
      event.preventDefault();
	  	submit_button_id = jQuery(this).attr('id');
		img_url_text_container_id = jQuery(this).prev().attr('id');
		
      //If the frame already exists, reopen it
      if (typeof(custom_file_frame)!=="undefined") {
         custom_file_frame.close();
      }
 
      //Create WP media frame.
      custom_file_frame = wp.media.frames.customHeader = wp.media({
         //Title of media manager frame
         title: "Weptile Image Slider Widget",
         library: {
            type: 'image'
         },
         button: {
            //Button text
            text: "Add Image to Slider"
         },
         //Do not allow multiple files, if you want multiple, set true
         multiple: true
      });
 
      //callback for selected image
      custom_file_frame.on('select', function() {
         var selection = custom_file_frame.state().get('selection');
		   selection.map(function(attachment) {
			  attachment = attachment.toJSON();
			  // Do something else with attachment object
			  jQuery('#' + img_url_text_container_id).val(attachment.url).prop('disabled', false);
		clearTimeout(timeout);
		jQuery('#' + submit_button_id).parent().parent().find('input[name=savewidget]').click();
		window.send_to_editor = window.weptile_backup_send_to_editor;
			  
			  
			  
			});
         //do something with attachment variable, for example attachment.filename
         //Object:
         //attachment.alt - image alt
         //attachment.author - author id
         //attachment.caption
         //attachment.dateFormatted - date of image uploaded
         //attachment.description
         //attachment.editLink - edit link of media
         //attachment.filename
         //attachment.height
         //attachment.icon - don't know WTF?))
         //attachment.id - id of attachment
         //attachment.link - public link of attachment, for example ""http://site.com/?attachment_id=115""
         //attachment.menuOrder
         //attachment.mime - mime type, for example image/jpeg"
         //attachment.name - name of attachment file, for example "my-image"
         //attachment.status - usual is "inherit"
         //attachment.subtype - "jpeg" if is "jpg"
         //attachment.title
         //attachment.type - "image"
         //attachment.uploadedTo
         //attachment.url - http url of image, for example "http://site.com/wp-content/uploads/2012/12/my-image.jpg"
         //attachment.width
      });
 
      //Open modal
      custom_file_frame.open();
   });
	/*
	window.weptile_send_to_editor = function (html) {
		var imgurl = jQuery('img', html).attr('src');
		if (imgurl == undefined)
			imgurl = jQuery(html).attr('src');

		jQuery('#' + img_url_text_container_id).val(imgurl).prop('disabled', false);
		clearTimeout(timeout);
		jQuery('#' + submit_button_id).parent().parent().find('input[name=savewidget]').click();
		window.send_to_editor = window.weptile_backup_send_to_editor;
	};
*/
	jQuery(document).on('click', '.weptile-image-slider-images-delete-button', function () {
		var parent_li = jQuery(this).parent();

		parent_li.toggleClass('weptile-image-slider-images-will-be-deleted');
		if (parent_li.hasClass('weptile-image-slider-images-will-be-deleted')) {
			parent_li.find('input').prop('disabled', true);
		} else {
			parent_li.find('input').prop('disabled', false);
		}

        jQuery(this).parent().parent().parent().parent().find('input[name=savewidget]').click();
	});

	jQuery(document).on('click', '.weptile-image-slider-images-details-button', function () {
		var that = jQuery(this);

		if (that.parent().find('.weptile-image-slider-images-details-table').is(':visible')) {
			that.parent().find('.weptile-image-slider-images-details-table').fadeOut(300);
		} else {
				that.parent().find('.weptile-image-slider-images-details-table').fadeIn(300);
		
		}
	});

	jQuery(document).on('change', '.weptile-image-slider-image-link-target-select, .weptile-image-slider-image-link-rel-select, .weptile-image-slider-theme-select', function () {
		var that = jQuery(this), text_input, button;

		if (that.val() === 'weptile_custom_frame_name' || that.val() === 'weptile_custom_rel' || that.val() === 'weptile_custom_theme') {
			if (that.hasClass('weptile-image-slider-image-link-target-select')) {
				text_input = jQuery('<input type="text" class="weptile-image-slider-image-link-target-input widefat" id="' + that.attr('id') + '" name="' + that.attr('name') + '" />');
				button = jQuery(' <button type="button" title="' + window.weptile_link_target_input_title + '" class="button weptile-image-slider-image-link-target-cancel-button" >X</button>');
			}

			if(that.hasClass('weptile-image-slider-image-link-rel-select')){
				text_input = jQuery('<input type="text" class="weptile-image-slider-image-link-rel-input widefat" id="' + that.attr('id') + '" name="' + that.attr('name') + '" />');
				button = jQuery(' <button type="button" title="' + window.weptile_link_rel_input_title + '" class="button weptile-image-slider-image-link-rel-cancel-button" >X</button>');
			}

			if(that.hasClass('weptile-image-slider-theme-select')){
				text_input = jQuery('<input type="text" class="weptile-image-slider-custom-theme-input widefat" id="' + that.attr('id') + '" name="' + that.attr('name') + '" />');
				button = jQuery(' <button type="button" title="' + window.weptile_custom_theme_button_title + '" class="button weptile-image-slider-custom-theme-cancel-button" >X</button>');
			}

			if (button != undefined)
				button.insertAfter(that);

			that.replaceWith(text_input);
			text_input.focus();
		}
	});

	jQuery(document).on('click', '.weptile-image-slider-image-link-target-cancel-button, .weptile-image-slider-image-link-rel-cancel-button, .weptile-image-slider-custom-theme-cancel-button', function () {
		var that = jQuery(this), text_input = that.prev(), select_input;

		if (that.hasClass('weptile-image-slider-image-link-target-cancel-button')){
			select_input = jQuery('<select class="weptile-image-slider-image-link-target-select widefat" id="' + text_input.attr('id') + '" name="' + text_input.attr('name') + '">' + window.weptile_link_target_select_options + '</select>');
		}

		if(that.hasClass('weptile-image-slider-image-link-rel-cancel-button')){
			select_input = jQuery('<select class="weptile-image-slider-image-link-rel-select widefat" id="' + text_input.attr('id') + '" name="' + text_input.attr('name') + '">' + window.weptile_link_rel_select_options + '</select>');
		}

		if(that.hasClass('weptile-image-slider-custom-theme-cancel-button')){
			select_input = jQuery('<select class="weptile-image-slider-theme-select widefat" id="' + text_input.attr('id') + '" name="' + text_input.attr('name') + '">' + window.weptile_slider_theme_select_options + '</select>');
		}

		text_input.replaceWith(select_input);
		that.remove();
	});

});

