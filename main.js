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
	var caracteres = senha.length
	var txtcs = window.document.getElementById('confirsenha')
	var csenha = txtcs.value

// SE TIVER DADOSS INCORRETOS..
	if (nome == 0 || idad <= 0 || idad > 122) {
		alert('[ERR0] Verifique os dados e tente novamente!')
	}
	else if (senha !== csenha || senha == 0 || csenha == 0) {
		alert('Senhas diferente')
	}

	else if (caracteres < 4){
		alert('senha deve conter pelo menos 4 caracteres.')
	}
	else{


 	 var usuario01 = [nome, senha, genero, idad, vpaís]
	 alert(`usuario: "${usuario01[0]}" com a senha: "${usuario01[1]}"`)
  }
}



//PALETA DE CORES MONOCROMÁTICAS
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
 	alert('complementar ok')
 	
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

var conteudo = window.document.getElementById('conteudo')

function monocromatico() {
	conteudo.innerHTML = `<img src="imagens/monocromatica.png"> <h3>Monocromática!?</h3>

<p>Losvdfjh s hoabore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<p>selecione a paleta de cores que achres melhor.</p>`
}

function triade() {
	conteudo.innerHTML = `<img src="imagens/triade.png"> <h3>tríade!?</h3>
<p>Lofdsvr sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et fdsvr sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitadsullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Ex dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitadsullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<p>selecione a paleta de cores que achres melhor.</p>`
}

function complementar() {
	conteudo.innerHTML = `<img src="imagens/complementar.png"> <h3>complementar!?</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut fdsvr sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitadsullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Ex labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostr Lorem  in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<p>selecione a paleta de cores que achres melhor.</p>`
}



/*Para alterar um texto para maiúsculo em JavaScript, utilizamos o método toUpperCase(). Para alterar para minúsculo, utilizamos o método toLowerCase().*/