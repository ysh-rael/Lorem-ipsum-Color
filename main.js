function confirmar() {
// VAR NOME
	var txtn = window.document.getElementById('txtn')
	var nome = txtn.value.toUpperCase()

// VAR GENERO 
	var sex = window.document.getElementsByName('radx')
	var genero = ''
	if (sex[0].checked) {
		genero = 'Homem'
	} else {
		genero = 'mulher'
	}

// VAR IDADE
	var idade = window.document.getElementById('idade')
	var idad = Number(idade.value)

// VAR NACIONALIDADE
 
	var select = window.document.getElementById('paises')
	var vpaís = select.options[select.selectedIndex].text
	var br = window.document.getElementById('br')
	var divEmoji = window.document.getElementById('emoji')
	if (vpaís == 'Brasil') {
		emoji.innerHTML = '&#x1F1E7 &#x1F1F7'
	} else{
		emoji.innerHTML = '"emoji"'
	}

// VAR SENHA
	var txts = window.document.getElementById('senha')
	var senha = txts.value
	var txtcs = window.document.getElementById('confirsenha')
	var csenha = txtcs.value

// SE TIVER DADOSS INCORRETOS..
	if (senha !== csenha || senha == null || csenha == null) {
		alert('Senhas diferente')
	}

	if (nome == 0 || idad <= 0 || idad > 122) {
		alert('[ERR0] Verifique os dados e tente novamente!')
	}else{

// SE NÃO..

	/*//BUTÃO CONFIRMAR
		var confir = window.document.createElement('input')
		confir.type = 'button'
		confir.value = 'confirmar'
		confir.id = 'confir'
		confir.style.src ='estilo.css'
		res.appendChild(confir)

 	 }*/
 	 var usuario01 = [nome, senha, genero, idad, vpaís]
	 alert(`usuario: "${usuario01[0]}" com a senha: "${usuario01[1]}"`)
  }
 }
//PALETA DE CORES
 function cores001(){
	var estilo = window.document.getElementById('estilo')
	estilo.href = 'estilo.css'
 }

 function cores002(){
	var estilo = window.document.getElementById('estilo')
	estilo.href = 'estilo-002.css'
 }

 function cores003(){
	var estilo = window.document.getElementById('estilo')
	estilo.href = 'estilo-003.css'
 }

 function cores004(){
	var estilo = window.document.getElementById('estilo')
	estilo.href = 'estilo-004.css'
   }
 
//PALETA DE CORES TRÍADES
 function tríade(){
 	alert('tríade ok')
 	
// pag recebe estilo 00x
 	function cores001(){
	var estilo = window.document.getElementById('estilo')
	estilo.href = 'estilo-005.css'
 }

 function cores002(){
	var estilo = window.document.getElementById('estilo')
	estilo.href = 'estilo-006.css'
 }

 function cores003(){
	var estilo = window.document.getElementById('estilo')
	estilo.href = 'estilo-007.css'
 }

 function cores004(){
	var estilo = window.document.getElementById('estilo')
	estilo.href = 'estilo-008.css'
   }
 }

//PALETA DE CORES COMPLEMENTAR
 function complementar(){
 	alert('tríade ok')
 	
// pag recebe estilo 00x
 	function cores001(){
	var estilo = window.document.getElementById('estilo')
	estilo.href = 'estilo-005.css'
 }

 function cores002(){
	var estilo = window.document.getElementById('estilo')
	estilo.href = 'estilo-006.css'
 }

 function cores003(){
	var estilo = window.document.getElementById('estilo')
	estilo.href = 'estilo-007.css'
 }

 function cores004(){
	var estilo = window.document.getElementById('estilo')
	estilo.href = 'estilo-008.css'
   }
 }


/*Para alterar um texto para maiúsculo em JavaScript, utilizamos o método toUpperCase(). Para alterar para minúsculo, utilizamos o método toLowerCase().*/