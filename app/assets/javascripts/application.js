// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require bootstrap.min
//= require turbolinks
//= require components
//= require_tree .

$(function() {
 	$('iframe').show();

   	$('.online').click(function() {
//   		if($('#iframe1').attr('src') == ''){
		var id = $(this).attr('id');
		$('#iframe1').show();
		$('#iframe1').attr('src', 'http://live.fc2.com/embedPlayer/?id=' + id + '&lang=ja&suggest=1&thumbnail=1&adultaccess=0&afid=41561948');
	//	} else {
	//	var id = $(this).attr('id');
	//	$('#iframe2').show();
	//	$('#iframe2').attr('src', 'http://live.fc2.com/embedPlayer/?id=' + id + '&lang=ja&suggest=1&thumbnail=1&adultaccess=0&afid=41561948');
	//	}
	});

	$('[name=size]').change(function() {
    // 選択されているvalue属性値を取り出す
    var val = $('[name=size]').val();
    if(val == 50){
   		$('iframe').attr('width','350');
   		$('iframe').attr('height','262');
    }
    if(val == 70){
   		$('iframe').attr('width','490');
   		$('iframe').attr('height','367');
    }
    if(val == 100){
   		$('iframe').attr('width','700');
   		$('iframe').attr('height','525');
    }

	});


  $("#booklist").tablesorter( {
    sortList: [[1,1],[2,1],[3,1]],
    headers: {
      0: { sorter:false },
      4: { sorter:false },
      5: { sorter:false }
    }
  }); 

});


