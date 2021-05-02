function pesquisar() {
	alert('Desculpe, o objeto de pesquisa ainda eestá em desenvolvimento e no momento não está funcionando.')
 }

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
	estilo.href = 'estilo-001.css'
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
// N° DA COR + N° DA PALETA (C*P*)
 function monocromatico() {
	conteudo.innerHTML = `<P><img src="imagens/monocromatica.png"> <h4>Monocromática</h4>

 <strong>Cores monocromáticas</strong> são todas as cores de uma única tonalidade. Os esquemas de cores monocromáticos são derivados de uma única tonalidade base e estendidos usando suas tonalidades, tons e matizes. Os tons são alcançados adicionando branco e os tons e tons adicionando uma cor mais escura, cinza ou preto.</p>`

 	var c1p1 = window.document.getElementById('c1p1')
 	var c2p1 = window.document.getElementById('c2p1')
 	var c3p1 = window.document.getElementById('c3p1')
 	var c4p1 = window.document.getElementById('c4p1')
 	var c5p1 = window.document.getElementById('c5p1')


 	c1p1.style.backgroundColor = '#DE8D4B';
 	c2p1.style.backgroundColor = '#5E3C20';
 	c3p1.style.backgroundColor = '#E3B692';
 	c4p1.style.backgroundColor = '#AC6E3B';
 	c5p1.style.backgroundColor = '#5E4C3C';

 	var c1p2 = window.document.getElementById('c1p2')
 	var c2p2 = window.document.getElementById('c2p2')
 	var c3p2 = window.document.getElementById('c3p2')
 	var c4p2 = window.document.getElementById('c4p2')
 	var c5p2 = window.document.getElementById('c5p2')


 	c1p2.style.backgroundColor = '#5EA9D1';
 	c2p2.style.backgroundColor = '#3C6C85';
 	c3p2.style.backgroundColor = '#738C99';
 	c4p2.style.backgroundColor = '#9DBFD1';
 	c5p2.style.backgroundColor = '#254252';

 	var c1p3 = window.document.getElementById('c1p3')
 	var c2p3 = window.document.getElementById('c2p3')
 	var c3p3 = window.document.getElementById('c3p3')
 	var c4p3 = window.document.getElementById('c4p3')
 	var c5p3 = window.document.getElementById('c5p3')


 	c1p3.style.backgroundColor = '#6058D1';
 	c2p3.style.backgroundColor = '#3D3885';
 	c3p3.style.backgroundColor = '#716E99';
 	c4p3.style.backgroundColor = '#9A97D1';
 	c5p3.style.backgroundColor = '#272456';

 	var c1p4 = window.document.getElementById('c1p4')
 	var c2p4 = window.document.getElementById('c2p4')
 	var c3p4 = window.document.getElementById('c3p4')
 	var c4p4 = window.document.getElementById('c4p4')
 	var c5p4 = window.document.getElementById('c5p4')


 	c1p4.style.backgroundColor = '#4D4D4D';
 	c2p4.style.backgroundColor = '#000000';
 	c3p4.style.backgroundColor = '#333333';
 	c4p4.style.backgroundColor = '#474747';
 	c5p4.style.backgroundColor = '#A3A3A3';




 }

 function triade() {
 
	conteudo.innerHTML = `<p><img src="imagens/triade.png"> <h4>tríade</h4>
 As cores tríades são formadas por 3 cores que estão equidistantes no círculo cromático. Ou seja, se encontram exatamente na mesma distância dentro da roda de tonalidades. ... Assim, como as cores análogas e complementares, as tríades também são combinações harmonicamente perfeitas.</p>`

 	var c1p = window.document.getElementById('c1p')
 	var c2p = window.document.getElementById('c2p')
 	var c3p = window.document.getElementById('c3p')
 	var c4p = window.document.getElementById('c4p')
 	var c5p = window.document.getElementById('c5p')
 	c1p.style.backgroundColor = '#';
 	c2p.style.backgroundColor = '#';
 	c3p.style.backgroundColor = '#';
 	c4p.style.backgroundColor = '#';
 	c5p.style.backgroundColor = '#';

	var c1p2 = window.document.getElementById('c1p2')
 	var c2p2 = window.document.getElementById('c2p2')
 	var c3p2 = window.document.getElementById('c3p2')
 	var c4p2 = window.document.getElementById('c4p2')
 	var c5p2 = window.document.getElementById('c5p2')
 	c1p2.style.backgroundColor = '#';
 	c2p2.style.backgroundColor = '#';
 	c3p2.style.backgroundColor = '#';
 	c4p2.style.backgroundColor = '#';
 	c5p2.style.backgroundColor = '#';

 	var c1p = window.document.getElementById('c1p')
 	var c2p = window.document.getElementById('c2p')
 	var c3p = window.document.getElementById('c3p')
 	var c4p = window.document.getElementById('c4p')
 	var c5p = window.document.getElementById('c5p')
 	c1p.style.backgroundColor = '#';
 	c2p.style.backgroundColor = '#';
 	c3p.style.backgroundColor = '#';
 	c4p.style.backgroundColor = '#';
 	c5p.style.backgroundColor = '#';

 	var c1p = window.document.getElementById('c1p')
 	var c2p = window.document.getElementById('c2p')
 	var c3p = window.document.getElementById('c3p')
 	var c4p = window.document.getElementById('c4p')
 	var c5p = window.document.getElementById('c5p')
 	c1p.style.backgroundColor = '#';
 	c2p.style.backgroundColor = '#';
 	c3p.style.backgroundColor = '#';
 	c4p.style.backgroundColor = '#';
 	c5p.style.backgroundColor = '#';

 }

 function complementar() {
	conteudo.innerHTML = `<p><img src="imagens/complementar.png"> <h4>complementar</h4>
 Cores Complementares são aquelas que mais oferecem contraste entre si. De acordo com a definição de Michel Eugene Chevreul, no século XIX, a cor complementar de uma matriz é aquela que mais absorve seu espectro.</p>`

 	var c1p = window.document.getElementById('c1p')
 	var c2p = window.document.getElementById('c2p')
 	var c3p = window.document.getElementById('c3p')
 	var c4p = window.document.getElementById('c4p')
 	var c5p = window.document.getElementById('c5p')
 	c1p.style.backgroundColor = '#';
 	c2p.style.backgroundColor = '#';
 	c3p.style.backgroundColor = '#';
 	c4p.style.backgroundColor = '#';
 	c5p.style.backgroundColor = '#';

 	var c1p = window.document.getElementById('c1p')
 	var c2p = window.document.getElementById('c2p')
 	var c3p = window.document.getElementById('c3p')
 	var c4p = window.document.getElementById('c4p')
 	var c5p = window.document.getElementById('c5p')
 	c1p.style.backgroundColor = '#';
 	c2p.style.backgroundColor = '#';
 	c3p.style.backgroundColor = '#';
 	c4p.style.backgroundColor = '#';
 	c5p.style.backgroundColor = '#';

 	var c1p = window.document.getElementById('c1p')
 	var c2p = window.document.getElementById('c2p')
 	var c3p = window.document.getElementById('c3p')
 	var c4p = window.document.getElementById('c4p')
 	var c5p = window.document.getElementById('c5p')
 	c1p.style.backgroundColor = '#';
 	c2p.style.backgroundColor = '#';
 	c3p.style.backgroundColor = '#';
 	c4p.style.backgroundColor = '#';
 	c5p.style.backgroundColor = '#';

 	var c1p = window.document.getElementById('c1p')
 	var c2p = window.document.getElementById('c2p')
 	var c3p = window.document.getElementById('c3p')
 	var c4p = window.document.getElementById('c4p')
 	var c5p = window.document.getElementById('c5p')
 	c1p.style.backgroundColor = '#';
 	c2p.style.backgroundColor = '#';
 	c3p.style.backgroundColor = '#';
 	c4p.style.backgroundColor = '#';
 	c5p.style.backgroundColor = '#';
 }



/*Para alterar um texto para maiúsculo em JavaScript, utilizamos o método toUpperCase(). Para alterar para minúsculo, utilizamos o método toLowerCase().*/

/*
	var c1p = window.document.getElementById('c1p')
 	var c2p = window.document.getElementById('c2p')
 	var c3p = window.document.getElementById('c3p')
 	var c4p = window.document.getElementById('c4p')
 	var c5p = window.document.getElementById('c5p')
 	c1p.style.backgroundColor = '#';
 	c2p.style.backgroundColor = '#';
 	c3p.style.backgroundColor = '#';
 	c4p.style.backgroundColor = '#';
 	c5p.style.backgroundColor = '#';
 	*/