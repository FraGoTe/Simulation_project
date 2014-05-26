  function alertModal(texto,tipo){
	//titulo y texto
	textModal = texto.split('-');
	//imagen
	if (tipo == 'info') {
	    imgModal = 'info_info.png';
	} else if (tipo == 'delete') {
  	    imgModal = 'info_eliminar.png';
	} else if (tipo == 'alert') {
	    imgModal = 'info_alert.png';
	} else {
	    imgModal = 'info_info.png';
	}
	
	//Modal
	if (tipo == 'info') {	
		var $dialog = $('<div></div>')		
		.html('<div style="float:left;padding-right:10px"><img src="http://hyosystemsieweb.com/styles/css/img/'+imgModal+'" width="50px" height="50px" align="left" /></div> <div style=""> <b>'+textModal[0]+'!</b> <br>'+textModal[1]+'</div>')
		.dialog({
			autoOpen: false,
			modal: true,
			title: 'Francis-Gonzales.Info',buttons: {
				'Ok': function() {	
					$dialog.dialog("destroy");
					//$(this).remove();
				}
			}
		});
	} else if (tipo == 'delete') {
		var $dialog = $('<div ></div>')		
		.html('<div style="float:left;padding-right:10px"><img src="http://hyosystemsieweb.com/styles/css/img/'+imgModal+'" width="50px" height="50px" align="left" /></div> <div style=""> <b>�'+textModal[0]+'?</b> <br>'+textModal[1]+'</div>')
		.dialog({
			autoOpen: false,
			modal: true,
			title: 'Francis-Gonzales.Info',buttons: {
				Cancel: function() {		
					//$(this).remove();
					$(this).dialog('close');
				},
				'Eliminar': function() {	
					global = this;
				}					
			}
		});		
	} else if (tipo == 'alert') {
		var $dialog = $('<div></div>')		
		.html('<div style="float:left;padding-right:10px"><img id="imgModal" src="http://hyosystemsieweb.com/styles/css/img/'+imgModal+'" width="50px" height="50px" align="left" /></div> <div style=""> <b>'+textModal[0]+'</b> <br>'+textModal[1]+'</div>')
		.dialog({
			autoOpen: false,modal: true,title: 'Francis-Gonzales.Info',buttons: {
				Cancel: function() {		
					//$(this).remove();
					$(this).dialog('close');
					global = this;
				},
				'Aceptar': function() {	
				$(this).dialog('close');
					global = this;
				}					
			}
		});		
	} else {
		var $dialog = $('<div></div>')		
		.html('<div style="float:left;padding-right:10px"><img src="http://hyosystemsieweb.com/styles/css/img/'+imgModal+'" width="50px" height="50px" align="left" /></div> <div style=""> <b>'+textModal[0]+'!</b> <br>'+textModal[1]+'</div>')
		.dialog({
			autoOpen: false,
			modal: true,
			title: 'Francis-Gonzales.Info',buttons: {
				'Ok': function() {	
					$dialog.dialog("destroy");
					//$(this).remove();
					}
			}
		});
	}
	
	$dialog.dialog('open');
