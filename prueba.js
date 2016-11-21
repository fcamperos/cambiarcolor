	window.onload=manejarClick; //Esta linea indica que cuando se cargue(onload) 
								//la ventana (window) se debe ejecutar la funcion
								// manejarClick. 

function manejarClick() {
	var cambiar=document.getElementById("clic"); //Se crea un objeto llamado "cambiar"
												//obtenido del DOM e identificandolo
												//por su id "clic"

	cambiar.addEventListener("click",cambiarColor); //Se añade un "escucha de eventos"
													//para cuando se de click sobre el div
													//con id "clic" el cual fue referenciado
													//mediante el objeto "cambiar" se ejecute la función
													//cambiarColor
}

function cambiarColor() {
	var divcolor=document.getElementById("color"); //Misma explicación linea 6

	var color=get_random_color(); 	//Se crea una variable llamada "color" y en ella se almacena el
									//valor que retorna la función get_random_color				
	
	divcolor.style.backgroundColor= color;	//Al objeto "divcolor" se le modifica el estilo
											//especificamente su color de fondo (backgroundColor)
											//al cual se le asigna el valor que quedo guardado en la 
											//variable "color".

	divcolor.textContent=color;		//Se utiliza tambien el valor de la variable "color" para modificar
									//el texto contenido (textContent) del objeto divcolor.
}

function get_random_color() {
                var letters = '0123456789ABCDEF'.split('');	//Se crea una variable llamada "letters" la cual 
                						//finalmente se convierte en un vector mediante la funcion split('')
                						//asi que letters sera un vector conteniendo la siguiente información
                						//{0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F}
                
                var color1 = '#';	//Se crea una variable llamada color que contiene el caracter "#"		

                for (var i = 0; i < 6; i++ ) {
                    color1 += letters[Math.round(Math.random() * 15)]; //Mediante un ciclo tipo for se concatenan (+=) 
                    					//6 caracteres mas (i=0;i<6) al caracter "#" que ya estaba dentro de la variable
                    					//color. La funcion Math.round y Math.random en este caso cada vez que se ejecutan
                    					//seleccionan uno de los 16 caracteres disponibles en el vector "letters".
                }
                return color1;	//Por ultimo la funcion retorna o envia de regreso el valor que quedo en la variable
                				//color calculada.
}