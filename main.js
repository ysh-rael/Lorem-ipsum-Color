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

//CONTEUDO-MENU DAS CORES
 var conteudo = window.document.getElementById('conteudo')

 function monocromatico() {
	conteudo.innerHTML = `<P><img src="imagens/monocromatica.png"> <h3>Monocromática</h3>

 <strong>Cores monocromáticas</strong> são todas as cores de uma única tonalidade. Os esquemas de cores monocromáticos são derivados de uma única tonalidade base e estendidos usando suas tonalidades, tons e matizes. Os tons são alcançados adicionando branco e os tons e tons adicionando uma cor mais escura, cinza ou preto.</p>`
 }

 function triade() {
	conteudo.innerHTML = `<p><img src="imagens/triade.png"> <h3>tríade</h3>
 As cores tríades são formadas por 3 cores que estão equidistantes no círculo cromático. Ou seja, se encontram exatamente na mesma distância dentro da roda de tonalidades. ... Assim, como as cores análogas e complementares, as tríades também são combinações harmonicamente perfeitas.</p>`
 }

 function complementar() {
	conteudo.innerHTML = `<p><img src="imagens/complementar.png"> <h3>complementar</h3>
 Cores Complementares são aquelas que mais oferecem contraste entre si. De acordo com a definição de Michel Eugene Chevreul, no século XIX, a cor complementar de uma matriz é aquela que mais absorve seu espectro.</p>`
 }



/*Para alterar um texto para maiúsculo em JavaScript, utilizamos o método toUpperCase(). Para alterar para minúsculo, utilizamos o método toLowerCase().*/