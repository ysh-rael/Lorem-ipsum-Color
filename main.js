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

// bot

 let mon = window.document.getElementById('mono')
 let tri = window.document.getElementById('tria')
 let com = window.document.getElementById('comple')
 var estilo = window.document.getElementById('estilo')

//paletas 
 	var p1 = window.document.getElementById('p1')
 	var p2 = window.document.getElementById('p2')
 	var p3 = window.document.getElementById('p3')
 	var p4 = window.document.getElementById('p4')

//CONTEUDO-MENU DAS CORES
var jscript = window.document.getElementById('js')
//PALETA DE CORES MONOCROMÁTICAS

 var conteudo = window.document.getElementById('conteudo')
// N° DA COR + N° DA PALETA (C*P*)
function monocromatico() {
	conteudo.innerHTML = `<P><img src="imagens/monocromatica.png"> <h4>Monocromática</h4>

 <strong>Cores monocromáticas</strong> são todas as cores de uma única tonalidade. Os esquemas de cores monocromáticos são derivados de uma única tonalidade base e estendidos usando suas tonalidades, tons e matizes. Os tons são alcançados adicionando branco e os tons e tons adicionando uma cor mais escura, cinza ou preto.</p>`
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 	var c1p1 = window.document.getElementById('c1p1')
 	var c2p1 = window.document.getElementById('c2p1')
 	var c3p1 = window.document.getElementById('c3p1')
 	var c4p1 = window.document.getElementById('c4p1')
 	var c5p1 = window.document.getElementById('c5p1')

 	var c1p1bc ='#DE8D4B'
 	var c2p1bc ='#5E3C20'
 	var c3p1bc ='#E3B692'
 	var c4p1bc ='#AC6E3B'
 	var c5p1bc ='#5E4C3C'


 	c1p1.style.backgroundColor = c1p1bc;
 	c2p1.style.backgroundColor = c2p1bc;
 	c3p1.style.backgroundColor = c3p1bc;
 	c4p1.style.backgroundColor = c4p1bc;
 	c5p1.style.backgroundColor = c5p1bc;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 	var c1p2 = window.document.getElementById('c1p2')
 	var c2p2 = window.document.getElementById('c2p2')
 	var c3p2 = window.document.getElementById('c3p2')
 	var c4p2 = window.document.getElementById('c4p2')
 	var c5p2 = window.document.getElementById('c5p2')

 	var c1p2bc ='#5EA9D1'
 	var c2p2bc ='#3C6C85'
 	var c3p2bc ='#738C99'
 	var c4p2bc ='#9DBFD1'
 	var c5p2bc ='#254252'


 	c1p2.style.backgroundColor = c1p2bc ;
 	c2p2.style.backgroundColor = c2p2bc ;
 	c3p2.style.backgroundColor = c3p2bc ;
 	c4p2.style.backgroundColor = c4p2bc ;
 	c5p2.style.backgroundColor = c5p2bc ;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 	var c1p3 = window.document.getElementById('c1p3')
 	var c2p3 = window.document.getElementById('c2p3')
 	var c3p3 = window.document.getElementById('c3p3')
 	var c4p3 = window.document.getElementById('c4p3')
 	var c5p3 = window.document.getElementById('c5p3')

 	var c1p3bc ='#6058D1'
 	var c2p3bc ='#3D3885'
 	var c3p3bc ='#716E99'
 	var c4p3bc ='#9A97D1'
 	var c5p3bc ='#272456'


 	c1p3.style.backgroundColor = c1p3bc ;
 	c2p3.style.backgroundColor = c2p3bc ;
 	c3p3.style.backgroundColor = c3p3bc ;
 	c4p3.style.backgroundColor = c4p3bc ;
 	c5p3.style.backgroundColor = c5p3bc ;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 	var c1p4 = window.document.getElementById('c1p4')
 	var c2p4 = window.document.getElementById('c2p4')
 	var c3p4 = window.document.getElementById('c3p4')
 	var c4p4 = window.document.getElementById('c4p4')
 	var c5p4 = window.document.getElementById('c5p4')

 	var c1p4bc ='#4D4D4D'
 	var c2p4bc ='#000000'
 	var c3p4bc ='#333333'
 	var c4p4bc ='#474747'
 	var c5p4bc ='#A3A3A3'

 	c1p4.style.backgroundColor = c1p4bc ;
 	c2p4.style.backgroundColor = c2p4bc ;
 	c3p4.style.backgroundColor = c3p4bc ;
 	c4p4.style.backgroundColor = c4p4bc ;
 	c5p4.style.backgroundColor = c5p4bc ;




 }

function triade() {
	conteudo.innerHTML = `<p><img src="imagens/triade.png"> <h4>tríade</h4>
 As cores tríades são formadas por 3 cores que estão equidistantes no círculo cromático. Ou seja, se encontram exatamente na mesma distância dentro da roda de tonalidades. ... Assim, como as cores análogas e complementares, as tríades também são combinações harmonicamente perfeitas.</p>`
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 	var c1p1 = window.document.getElementById('c1p1')
 	var c2p1 = window.document.getElementById('c2p1')
 	var c3p1 = window.document.getElementById('c3p1')
 	var c4p1 = window.document.getElementById('c4p1')
 	var c5p1 = window.document.getElementById('c5p1')

 	var c1p1bc ='#AD3717'
 	var c2p1bc ='#93FA20'
 	var c3p1bc ='#FA3C07'
 	var c4p1bc ='#2051FA'
 	var c5p1bc ='#0E31AD'

 	c1p1.style.backgroundColor = c1p1bc ;
 	c2p1.style.backgroundColor = c2p1bc ;
 	c3p1.style.backgroundColor = c3p1bc ;
 	c4p1.style.backgroundColor = c4p1bc ;
 	c5p1.style.backgroundColor = c5p1bc ;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	var c1p2 = window.document.getElementById('c1p2')
 	var c2p2 = window.document.getElementById('c2p2')
 	var c3p2 = window.document.getElementById('c3p2')
 	var c4p2 = window.document.getElementById('c4p2')
 	var c5p2 = window.document.getElementById('c5p2')

 	var c1p2bc ='#AD3243'
 	var c2p2bc ='#FAF57A'
 	var c3p2bc ='#FA6275'
 	var c4p2bc ='#48C2FA'
 	var c5p2bc ='#3B89AD'

 	c1p2.style.backgroundColor = c1p2bc ;
 	c2p2.style.backgroundColor = c2p2bc ;
 	c3p2.style.backgroundColor = c3p2bc ;
 	c4p2.style.backgroundColor = c4p2bc ;
 	c5p2.style.backgroundColor = c5p2bc ;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 	var c1p3 = window.document.getElementById('c1p3')
 	var c2p3 = window.document.getElementById('c2p3')
 	var c3p3 = window.document.getElementById('c3p3')
 	var c4p3 = window.document.getElementById('c4p3')
 	var c5p3 = window.document.getElementById('c5p3')

 	var c1p3bc ='#ADA05F'
 	var c2p3bc ='#67F5F2'
 	var c3p3bc ='#FAEBA2'
 	var c4p3bc ='#FA89DF'
 	var c5p3bc ='#AB659A'

 	c1p3.style.backgroundColor = c1p3bc;
 	c2p3.style.backgroundColor = c2p3bc;
 	c3p3.style.backgroundColor = c3p3bc;
 	c4p3.style.backgroundColor = c4p3bc;
 	c5p3.style.backgroundColor = c5p3bc;
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 	var c1p4 = window.document.getElementById('c1p4')
 	var c2p4 = window.document.getElementById('c2p4')
 	var c3p4 = window.document.getElementById('c3p4')
 	var c4p4 = window.document.getElementById('c4p4')
 	var c5p4 = window.document.getElementById('c5p4')

 	var c1p4bc ='#1DAD4D'
 	var c2p4bc ='#922AFA'
 	var c3p4bc ='#11FA5E'
 	var c4p4bc ='#FAA72A'
 	var c5p4bc ='#AD6C0D'

 	c1p4.style.backgroundColor = c1p4bc;
 	c2p4.style.backgroundColor = c2p4bc;
 	c3p4.style.backgroundColor = c3p4bc;
 	c4p4.style.backgroundColor = c4p4bc;
 	c5p4.style.backgroundColor = c5p4bc;

 }

function complementar() {	
	conteudo.innerHTML = `<p><img src="imagens/complementar.png"> <h4>complementar</h4>
  Cores Complementares são aquelas que mais oferecem contraste entre si. De acordo com a definição de Michel Eugene Chevreul, no século XIX, a cor complementar de uma matriz é aquela que mais absorve seu espectro.</p>`
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 	var c1p1 = window.document.getElementById('c1p1')
 	var c2p1 = window.document.getElementById('c2p1')
 	var c3p1 = window.document.getElementById('c3p1')
 	var c4p1 = window.document.getElementById('c4p1')
 	var c5p1 = window.document.getElementById('c5p1')

 	var c1p1bc ='#1F5AAD'
 	var c2p1bc ='#61A3FF'
 	var c3p1bc ='#458FFA'
 	var c4p1bc ='#AD770E'
 	var c5p1bc ='#FABD46'

 	c1p1.style.backgroundColor = c1p1bc;
 	c2p1.style.backgroundColor = c2p1bc;
 	c3p1.style.backgroundColor = c3p1bc;
 	c4p1.style.backgroundColor = c4p1bc;
 	c5p1.style.backgroundColor = c5p1bc;
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 	var c1p2 = window.document.getElementById('c1p2')
 	var c2p2 = window.document.getElementById('c2p2')
 	var c3p2 = window.document.getElementById('c3p2')
 	var c4p2 = window.document.getElementById('c4p2')
 	var c5p2 = window.document.getElementById('c5p2')

 	var c1p2bc ='#17AD49'
 	var c2p2bc ='#0AFF5B'
 	var c3p2bc ='#7AFAA5'
 	var c4p2bc ='#AD302D'
 	var c5p2bc ='#FA7E7A'

 	c1p2.style.backgroundColor = c1p2bc;
 	c2p2.style.backgroundColor = c2p2bc;
 	c3p2.style.backgroundColor = c3p2bc;
 	c4p2.style.backgroundColor = c4p2bc;
 	c5p2.style.backgroundColor = c5p2bc;
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 	var c1p3 = window.document.getElementById('c1p3')
 	var c2p3 = window.document.getElementById('c2p3')
 	var c3p3 = window.document.getElementById('c3p3')
 	var c4p3 = window.document.getElementById('c4p3')
 	var c5p3 = window.document.getElementById('c5p3')

 	var c1p3bc ='#A8AD02'
 	var c2p3bc ='#F6FF00'
 	var c3p3bc ='#F6FB5D'
 	var c4p3bc ='#6518AD'
 	var c5p3bc ='#AE5CFA'

 	c1p3.style.backgroundColor = c1p3bc;
 	c2p3.style.backgroundColor = c2p3bc;
 	c3p3.style.backgroundColor = c3p3bc;
 	c4p3.style.backgroundColor = c4p3bc;
 	c5p3.style.backgroundColor = c5p3bc;
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 	var c1p4 = window.document.getElementById('c1p4')
 	var c2p4 = window.document.getElementById('c2p4')
 	var c3p4 = window.document.getElementById('c3p4')
 	var c4p4 = window.document.getElementById('c4p4')
 	var c5p4 = window.document.getElementById('c5p4')

 	var c1p4bc ='#AD6F0A'
 	var c2p4bc ='#FF9D00'
 	var c3p4bc ='#FAC46A'
 	var c4p4bc ='#216BAD'
 	var c5p4bc ='#69B5FA'

 	c1p4.style.backgroundColor = c1p4bc;
 	c2p4.style.backgroundColor = c2p4bc;
 	c3p4.style.backgroundColor = c3p4bc;
 	c4p4.style.backgroundColor = c4p4bc;
 	c5p4.style.backgroundColor = c5p4bc;
 }


//ESTILO DO CONTENE COM EXEMPLOS DE CORES



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


 	