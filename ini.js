let form = []; //variavel global
let contador = 0; //variavel global

$( document ).ready(function() {
});


$('#tarefa-form').on("submit", (event) => {
	event.preventDefault();

	let obj = {
		"id":contador,
		"tarefa": $('#tarefa').val(),
		"prazo": $('#prazo').val(),
		"terminada":false
	}	
	
	
	form.push(obj); //adicionando o objeto no array

	$('#tarefa-form').trigger("reset"); //limparndo os campos do formulário
   
   
	for(var i=0;i < form.length;i++){
		
		//adicionando a linha na tabela
		if(i==contador){
			$('#tarefa-table').append('<tr><td><input type="checkbox" class="remove" value="'+contador+'"></td><td>'+form[i].tarefa+'</td><td>'+form[i].prazo+'</td></tr>');
		}
	}
	console.log("adionar",form);
	contador++;
});


function remover() {
	
	console.log("remover terminadas");
	
   let selecionados = document.querySelectorAll(".remove");
   
    for (var i = 0; i < selecionados.length; i++){
		if ( selecionados[i].checked ) {//se o elemento foi selecionado	
						
			for(var j = 0; j < form.length;j ++){
				
				if(i==form[j].id){	
					form[j].terminada = true; //objeto dentro do array vai receber terminado = true 'exclusão lógica'
				}
			}
				
		}
	}
	
	$('#tarefa-table tr').remove();//removendo todas as linhas da tabela
	
	for(var i=0;i < form.length;i++){
		
		//adicionando linhas onde os objetos terminado = false
		if(form[i].terminada==false){
			$('#tarefa-table').append('<tr><td><input type="checkbox" class="remove" value="'+form[i].id+'"></td><td>'+form[i].tarefa+'</td><td>'+form[i].prazo+'</td></tr>');
		}
	}
}



function mostarTerminadas(){
	
	$('#tarefa-terminadas tr').remove();//removendo todas as linhas da tabela
	
	for(var i=0;i < form.length;i++){
		if(form[i].terminada==true){
			$('#tarefa-terminadas').append('<tr><td><input type="checkbox" class="remove" value="'+form[i].id+'"></td><td><strike>'+form[i].tarefa+'</strike></td><td><strike>'+form[i].prazo+'</strike></td></tr>');
		}
	}
}




