   $(document).ready(function () {
    $('.OK-jiexi').click(function () {
      $('.panel').slideToggle('slow');
    });
     $('.panel a').click(function () {
      $('.panel').slideToggle('slow');
    });
  });
    	var url_adress = (GetQueryString("url"));
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
   
     var r = window.location.search.substr(1).match(reg);
        if (r != null)return unescape(r[2]);
        return null;
    }
 
   function play(url) {
     loadad();
        $('#WANG').attr('src', decodeURIComponent(decodeURIComponent(url))).show();
        
    }
   
  function loadad() {
		var a = document.getElementById("playad");
		a.innerHTML = '<iframe  width="100%" height="100%" src="" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no"   ></iframe>';
		$("#playad").show()
	setTimeout("$('#playad').empty().hide();$('#WANG').show();", 0 * 1000)
}

