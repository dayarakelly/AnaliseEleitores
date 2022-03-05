var btn = document.querySelector("#btn");
var nome = document.querySelector("#nome");
var pendencias = document.getElementsByClassName("pendencias");
var idade = document.querySelector("#idade");
var resultado = document.querySelector("#res");
var habilitarResultado = document.querySelector(".resultado");


btn.addEventListener('click',verificar);


function verificar(){
	
	if((idade.value.length == 0)||(nome.value =='')) {
		alert("Preenha todos os campos!");		
	}else{
		habilitarResultado.style.display='block';
		resultado.innerHTML='';
		const divNome = document.createElement('div');
		divNome.setAttribute('class','resultadoNome');
		
		divNome.textContent=`${nome.value}`;
		resultado.appendChild(divNome);
		
				
		if(idade.value <16 ){
			resultado.innerHTML+=`<p>Você não tem idade para votar!</p>`
		}else if(idade.value >=18 && idade.value <=69){
			resultado.innerHTML+=`<p>O voto é obrigatório para pessoas da sua idade!</p>`;
		}else{
			resultado.innerHTML+=`<p>O voto é opcional para pessoas da sua idade!</p>`;
		}
		const pendencias= document.getElementsByName("pendencias");
		if((pendencias[1].checked) ||(pendencias[2].checked)){
			const divLink = document.createElement('div');
			divLink.setAttribute('class','resultadoLink')
			const aviso = document.createElement('a');
			aviso.textContent=`Clique aqui para acessar o site o TSE e verificar a regularidade do seu título`
			aviso.setAttribute('href','https://www.tse.jus.br/eleitor/titulo-e-local-de-votacao/copy_of_consulta-por-nome');
			aviso.setAttribute('target','_blank');			
		divLink.appendChild(aviso)
		resultado.appendChild(divLink);				
		console.log(aviso);
		}	
		
	}
}