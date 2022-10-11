function traerInformacion(){
$.ajax({    
    url : "https://gc31840f0846900-bdsesion4ciclo03.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box",
    type : "GET",
    dataType : "JSON",
	contentType: "application/JSON",

    success : function(data) {
        pintarRespuesta(data.items);
	
    },
    error : function(xhr, status) {
        alert(xhr);
        alert(status);
    },
    complete : function(xhr, status) {
        console.log(xhr);
    }
});
}

function pintarRespuesta(items){
	let myTable = "<Table BORDER=1>";
		myTable += "<tr>";
		myTable += "<td>ID<td>";
		myTable += "<td>name<td>";
		myTable += "<td>description<td>";
		myTable += "<td>brand<td>";
		myTable += "<td>idcategory<td>";
		myTable += "<td>year<td>";
		myTable += "<td>Action<td>";
		myTable += "</tr>";
    $('#resultado').html("<br><br>");
	for (i=0; i<items.length; i++){
		myTable += "<tr>";
		myTable += "<td>"+items[i].idcostume+"<td>";
		myTable += "<td>"+items[i].name+"<td>";
		myTable += "<td>"+items[i].description+"<td>";
		myTable += "<td>"+items[i].brand+"<td>";
		myTable += "<td>"+items[i].idcategory+"<td>";
		myTable += "<td>"+items[i].year+"<td>";
		myTable += "<td><button onclick=borrarRegistro("+items[i].idcostume+")>Borrar</button><td>";
		myTable += "</tr>";
		
	}
	myTable += "</table>";
    $('#resultado').append(myTable);
	


}



function adicionarRegistro(){
   let datosForma= {
	   name:$("#name").val(),
	   brand:$("#brand").val(),
	   idCategory:parseInt($("#categoryId").val(),10),
	   description:$("#description").val(),
	   year:parseInt($("#year").val(),10)
	   };
   let datosInput = JSON.stringify(datosForma);
   $.ajax({    
		url : "https://gc31840f0846900-bdsesion4ciclo03.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box",
		type : "POST",
		data : datosInput,
		contentType: "application/JSON; charset=utf-8",
		success :  function(respuesta) {
		   $("#resultado").empty();
      	   $("#id").val("");
	       $("#name").val("");
	       $("#brand").val(""),
	       $("#categoryId").val(""),
	       $("#description").val(""),
	       $("#year").val("")
           traerInformacion();
		  alert ('Registro Adicionado');	
		},
		error : function(xhr, status) {
			alert(xhr);
			alert(status);
		},
		complete : function(xhr, status) {
           console.log(xhr);
		}
    });
}

function actualizarRegistro(){
   var datosForma= {
	   id : parseInt($("#id").val(),10),
	   name:$("#name").val(),
	   brand:$("#brand").val(),
	   idCategory:parseInt($("#categoryId").val(),10),
	   description:$("#description").val(),
	   year:parseInt($("#year").val(),10)
	   };
   let datosInput = JSON.stringify(datosForma)
$.ajax({    
    url : "https://gc31840f0846900-bdsesion4ciclo03.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box",
    type : "PUT",
    data : datosInput,
	contentType: "application/JSON",
    
		success :  function(respuesta) {
		   $("#resultado").empty();
      	   $("#id").val("");
	       $("#name").val("");
	       $("#brand").val(""),
	       $("#categoryId").val(""),
	       $("#description").val(""),
	       $("#year").val("")
 	 	   traerInformacion();
           alert ('Registro Actualizado');	

		},
    error : function(xhr, status) {
        alert(xhr);
        alert(status);
    },
    complete : function(xhr, status) {
         console.log(xhr);

    }
});
}

function borrarRegistro(idcostume){
   var datosForma= {
	   id: idcostume
	   };
   let datosInput = JSON.stringify(datosForma)
$.ajax({    
    url : "https://gc31840f0846900-bdsesion4ciclo03.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box",
    type : "DELETE",
    data : datosInput,
	contentType: "application/JSON",
    
	
		success :  function(response) {
          alert ('Registro Eliminado');	
		  traerInformacion();
			
		},
    error : function(xhr, status) {
        alert(xhr);
        alert(status);
    },
    complete : function(xhr, status) {
           console.log(xhr);
    }
});
}

function startTime(){
        today=new Date();
        h=today.getHours();
        m=today.getMinutes();
		s=today.getSeconds();
        m=checkTime(m);
        document.getElementById('reloj').innerHTML=h+":"+m+":"+s;
        t=setTimeout('startTime()',500);}
        function checkTime(i)
        {if (i<10) {i="0" + i;}return i;}
        window.onload=function(){startTime();
		}
