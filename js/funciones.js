var flag=0;
function run(){
    var time;
    var i;
    var cont;
    var bgcolor;
    var newbg;
    var onbg;
    var clase;
    var y;
    var hasta=Math.floor((Math.random()*48)+24);
    i=1;
    cont=1;
    var id;
    time=setInterval(function (){
        $("#boton").attr('disabled','disabled');
        if(flag!=0){
            i=flag;
            flag=0;
        }
        bgcolor=$("#sq"+i).css('background-image');
        newbg=bgcolor.split(',');
        onbg=newbg[0]+",rgb(0, 0, 0),"+newbg[4]+","+newbg[5]+","+newbg[6];
        $("#sq"+i).css('background-image',onbg);
        y=i-1;
        if(i==1) y=24;
        clase=$("#sq"+(y)).attr('class');
        $("#sq"+(y)).css('background-image','');
                    
        if(cont==hasta){ 
            flag=i;
            $("#boton").removeAttr('disabled');
            clearInterval(time);
            valida(i);
        }
        i++;
        if(i==25)i=1;
        cont++;
    }, 50);
}
            
function valida(i){
    var rand=$("#sq"+i).attr('class');
    var selectd=$(".active").attr('id');
    var array;
    array=rand.split('-');
    array=array[1].split(' ');
    if(selectd==array[0]){
        alertModal('Acertaste-Felicitaciones has ganado!!!!! :D');
    }else{
        alertModal('Que pena-Sigue Intentando :(');
    }
}
            
var contSel=0;
function fgtchange(id){
    var dis=$("#"+id).attr("class");
    var clase;
    var arr;
    arr=dis.split('active');
    contSel=(!($(".active").attr('id'))?0:1);
    //alert(contSel);
    if( arr.length>1){
        $("#"+id).attr("class",arr[0]);
        contSel--;
    }else{
        if(contSel>0){
            alertModal('Error!-No puedes seleccionar m&aacute;s de un color','alert');
            return false;
        }
        clase=$("#"+id).attr("class");
        $("#"+id).attr("class",clase+" active");
    }
    return true;
}


function alertModal(texto,tipo){
		
    //titulo y texto
    textModal=texto.split('-');
    //imagen
    if (tipo=='info'){
        imgModal='info_info.png';
    }else if (tipo=='delete'){
        imgModal='info_eliminar.png';
    }else if (tipo=='alert'){
        imgModal='info_alert.png';
    }else{
        imgModal='info_info.png';
    }

    //Modal
    if (tipo=='info'){	
        var $dialog = $('<div></div>')		
        .html('<div style="float:left;padding-right:10px"><img src="http://hyosystemsieweb.com/styles/css/img/'+imgModal+'" width="50px" height="50px" align="left" /></div> <div style=""> <b>'+textModal[0]+'!</b> <br>'+textModal[1]+'</div>')
        .dialog({
            autoOpen: false,
            modal: true,
            title: 'Francis-Gonzales.Info',
            buttons: {
                'Ok': function() {	
                    $dialog.dialog("destroy");
                //$(this).remove();
                }
            }
        });
    }else if (tipo=='delete'){
        var $dialog = $('<div ></div>')		
        .html('<div style="float:left;padding-right:10px"><img src="http://hyosystemsieweb.com/styles/css/img/'+imgModal+'" width="50px" height="50px" align="left" /></div> <div style=""> <b>�'+textModal[0]+'?</b> <br>'+textModal[1]+'</div>')
        .dialog({
            autoOpen: false,
            modal: true,
            title: 'Francis-Gonzales.Info',
            buttons: {
                Cancel: function() {		
                    //$(this).remove();
                    $(this).dialog('close');
                },
                'Eliminar': function() {	
                    global = this;
                }					
            }
        });		
    }else if (tipo=='alert'){
        var $dialog = $('<div></div>')		
        .html('<div style="float:left;padding-right:10px"><img id="imgModal" src="http://hyosystemsieweb.com/styles/css/img/'+imgModal+'" width="50px" height="50px" align="left" /></div> <div style=""> <b>'+textModal[0]+'</b> <br>'+textModal[1]+'</div>')
        .dialog({
            autoOpen: false,
            modal: true,
            title: 'Francis-Gonzales.Info',
            buttons: {
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
    }else{
        var $dialog = $('<div></div>')		
        .html('<div style="float:left;padding-right:10px"><img src="http://hyosystemsieweb.com/styles/css/img/'+imgModal+'" width="50px" height="50px" align="left" /></div> <div style=""> <b>'+textModal[0]+'!</b> <br>'+textModal[1]+'</div>')
        .dialog({
            autoOpen: false,
            modal: true,
            title: 'Francis-Gonzales.Info',
            buttons: {
                'Ok': function() {	
                    $dialog.dialog("destroy");
                //$(this).remove();
                }
            }
        });
    }
		
    $dialog.dialog('open');
//alert($dialog.parent().html());
//alert($("#ui").html());		
}
function openBox(info,div,data,w,h,modal){
	if(modal=='false')modal=false;else modal=true;
	$('#'+div).dialog({			
	autoOpen: true,
	width: w,
	height: h,
	show : 'blind',
	modal : modal,
	open: function (){
            	$('#'+div).html(info);
                }
	});
	$('#'+div).dialog('open');
}

//=== EFECTO DE CARGA EN UN MODAL ====
function divload(div,h){
	 var pt=(h/2)-80;
   $('#'+div).html("<div class='pantalla'><div style='text-align:center;padding-left:auto;padding-top:"+pt+"px;'><img name='cargando' title='cargando' src='http://hyosystemsieweb.com/images/cms/hyoloading.gif' alt='cargando' style='width:120px;height:120px;'/><br><p align='center'>Procesando... </p></div></div>");
}
