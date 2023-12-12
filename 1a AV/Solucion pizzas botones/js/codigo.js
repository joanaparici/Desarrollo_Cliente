			function inicio(){
								
				pizzas.forEach(p=>{let btn=document.createElement("button");
									   btn.id=p.codigo;
									   btn.appendChild(document.createTextNode(p.nombre));
									   btn.onclick=pintaPizza;
									   document.getElementById("botones").appendChild(btn);
									});
				
				document.getElementById("importe").innerHTML="Importe: 0";
			}				   
								
				
				
				function pintaPizza(){
					// eliminamos valores anteriores
					document.getElementById("fotopizza").innerHTML="";
					document.getElementById("ingredientes").innerHTML="";
					total=0;
					
					//buscamos la pizza
					pizza=pizzas.find(p=>p.codigo==this.id);

					// creamos la imagen
					imagen=document.createElement("img");
					imagen.className="imagencss";					
					imagen.src="assets/"+ this.id + ".jpg";
					
					//añadimos la imagen de pizza a la capa fotopizza
					document.getElementById("fotopizza").appendChild(imagen);
					
					//calculamos ingredientes y suma de cada uno de ellos
					pizza.ingredientes.forEach(i=>{total+=parseFloat(i.precio)
												   document.getElementById("ingredientes").innerHTML+=i.ingrediente+"<br>";													
												   });
					//calculamos total sumando el precio base
					total+=5;
					document.getElementById("importe").innerHTML="Importe: "+total;
				}
				
				inicio();