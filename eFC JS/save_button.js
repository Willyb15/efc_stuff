var save_buttons_array = document.getElementsByClassName('save');
	var save_buttons_offset = (/(\/(en|fr|de))?(\/jobs-.*\.id[0-9]+|\/view-job\?jobId=[0-9]+)/.test(window.location.href)) ? 0 : 1;
		for(var i=save_buttons_offset; i<save_buttons_array.length-save_buttons_offset; i++){
		    save_buttons_array[i].addEventListener('click', function(){
		        dataLayer.push({
		        	'event': 'save_button_clicked'
		        });
		    });
		}  