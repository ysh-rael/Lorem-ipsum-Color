/*menu fixo no topo*/
const nav = window.document.getElementsByTagName('nav')[0]
const topoNav = nav.offsetTop
const quebrarLinha = window.document.querySelector("#quebra_linha")
window.onscroll = function(){fixaMenuNoTopo()}
function fixaMenuNoTopo() {
	if (window.pageYOffset >= topoNav) {
		nav.classList.add("fixaTopo")
		quebrarLinha.classList.add("quebra_linha")
	} else {
		nav.classList.remove("fixaTopo")
		quebrarLinha.classList.remove("quebra_linha")
	}
}

function confirmar() {
	// letNOME
		const txtn = window.document.getElementById('txtn')
		let nome = txtn.value.toUpperCase()
	// letGENERO 
		const sex = window.document.getElementsByName('radx')
		let genero = ''
		if (sex[0].checked) {
			genero = 'Homem'
		} else {
			genero = 'mulher'
		}
	// letIDADE
		let idade = window.document.getElementById('idade')
		let idad = Number(idade.value)
	// letNACIONALIDADE
	 
		let select = window.document.getElementById('paises')
		let vpaís = select.options[select.selectedIndex].text
		let br = window.document.getElementById('br')
		let divEmoji = window.document.getElementById('emoji')
		if (vpaís == 'Brasil') {
			emoji.innerHTML = '&#x1F1E7 &#x1F1F7'
		} else{
			emoji.innerHTML = '"emoji"'
		}
	// letSENHA
		const txts = window.document.getElementById('inptSenha')
		let senha = txts.value
		let caracteres = senha.length
		let txtcs = window.document.getElementById('confirsenha')
		let csenha = txtcs.value
	// SE TIVER DADOSS INCORRETOS..
		if (nome == 0 || idad <= 0 || idad > 122) {
			alert('[ERR0] Verifique os dados e tente novamente!')
		}
		else if (senha !== csenha || senha == 0 || csenha == 0) {
			alert('Senhas diferente')
		}

		else if (caracteres < 4){
			alert('senha deve leter pelo menos 4 caracteres.')
		}
		else{


	 	 let usuario01 = [nome, senha, genero, idad, vpaís]
		 alert(`usuario: "${usuario01[0]}" com a senha: "${usuario01[1]}"`)
	  }
	 }
	
	// bttn
	 let mon = window.document.getElementById('mono')
	 let tri = window.document.getElementById('tria')
	 let com = window.document.getElementById('comple')
	 let estilo = window.document.getElementById('estilo')
	//paletas 
	 	let p1 = window.document.getElementById('p1')
	 	let p2 = window.document.getElementById('p2')
	 	let p3 = window.document.getElementById('p3')
	 	let p4 = window.document.getElementById('p4')
	//letEUDO-MENU DAS CORES
		let jscript = window.document.getElementById('js')
	//colorir e resertcores
		const bttnColorir = window.document.getElementsByClassName('bttnColo_Resert')[0]
		const resertCores = window.document.getElementsByClassName('bttnColo_Resert')[1]
	//PAletA DE CORES MONOCROMÁTICAS

	 let explicaSobre = window.document.getElementById('explicaSobre')
	// N° DA COR + N° DA PAletA (C*P*)
	 	letc1p1 = window.document.getElementById('c1p1')
	 	letc2p1 = window.document.getElementById('c2p1')
	 	letc3p1 = window.document.getElementById('c3p1')
	 	letc4p1 = window.document.getElementById('c4p1')
	 	letc5p1 = window.document.getElementById('c5p1')
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	 	letc1p2 = window.document.getElementById('c1p2')
	 	letc2p2 = window.document.getElementById('c2p2')
	 	letc3p2 = window.document.getElementById('c3p2')
	 	letc4p2 = window.document.getElementById('c4p2')
	 	letc5p2 = window.document.getElementById('c5p2')
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	 	letc1p3 = window.document.getElementById('c1p3')
	 	letc2p3 = window.document.getElementById('c2p3')
	 	letc3p3 = window.document.getElementById('c3p3')
	 	letc4p3 = window.document.getElementById('c4p3')
	 	letc5p3 = window.document.getElementById('c5p3')

function monocromatico() {
		explicaSobre.innerHTML = `<P><img src="imagens/monocromatica.png"> <h4>Monocromática</h4>

	 <strong>Cores monocromáticas</strong> são todas as cores de uma única tonalidade. Os esquemas de cores monocromáticos são derivados de uma única tonalidade base e estendidos usando suas tonalidades, tons e matizes. Os tons são alcançados adicionando branco e os tons e tons adicionando uma cor mais escura, cinza ou preto.</p>`
	 }

function triade() {
		explicaSobre.innerHTML = `<p><img src="imagens/triade.png"> <h4>tríade</h4>
	 As cores tríades são formadas por 3 cores que estão equidistantes no círculo cromático. Ou seja, se enconstram exatamente na mesma distância dentro da roda de tonalidades. ... Assim, como as cores análogas e complementares, as tríades também são combinações harmonicamente perfeitas.</p>`
 }

function complementar() {	
		explicaSobre.innerHTML = `<p><img src="imagens/complementar.png"> <h4>complementar</h4>
	  Cores Complementares são aquelas que mais oferecem constraste entre si. De acordo com a definição de Michel Eugene Chevreul, no século XIX, a cor complementar de uma matriz é aquela que mais absorve seu espectro.</p>`
	
 }


 function cores001(){
 	tagStyle.innerHTML = ""
 	bttnColorir.setAttribute("hidden","hidden")
 	resertCores.setAttribute("hidden","hidden")
	estilo.href = 'style/estilo-001.css'
 }

 function cores002(){
 	tagStyle.innerHTML = ""
 	bttnColorir.setAttribute("hidden","hidden")
 	resertCores.setAttribute("hidden","hidden")
	estilo.href = 'style/estilo-002.css'

 }

 function cores003(){
 	tagStyle.innerHTML = ""
	bttnColorir.setAttribute("hidden","hidden")
 	resertCores.setAttribute("hidden","hidden")
	estilo.href = 'style/estilo-003.css'
 }
  function cores004(){
 	estilo.href = 'style/estilo-004.css'
 	bttnColorir.removeAttribute("hidden")
 	resertCores.removeAttribute("hidden")
 	
}
/*PARALE 004 -> CORES PERSONALIZADAS!*/
	
	const c1p4 = window.document.getElementById('c1p4')
	const c2p4 = window.document.getElementById('c2p4')
	const c3p4 = window.document.getElementById('c3p4')
	const c4p4 = window.document.getElementById('c4p4')
	const c5p4 = window.document.getElementById('c5p4')

	const tagStyle = window.document.getElementById("tagStyle")
	/*desculpa a bagunça.. mas tentei de muitas outras formas e não conseguir. essa é uma solução temporária.*/
function restaurarCores() {
	tagStyle.innerHTML = ""
	c1p4.value = "#4D4D4D"
	c2p4.value = "#000000"
	c3p4.value = "#333333"
	c4p4.value = "#474747"
	c5p4.value = "#A3A3A3"
}
function colorir() {
	let cor1 = c1p4.value
	let cor2 = c2p4.value
	let cor3 = c3p4.value
	let cor4 = c4p4.value
	let cor5 = c5p4.value
	tagStyle.innerHTML = `
		section#explicaSobre {
		color: ${cor5};
		background-color: ${cor2};
		}
		div#miniPagTest {
		background-color: ${cor3};
		}
		h1#tituloCad {
		color: white;
		}
		ul#contemtiposPaletas {
		background-color: ${cor3};
		}
		li.tiposPaletas:hover {
		color: white;
		}
		div#cad {
		background-image: linear-gradient(to bottom, ${cor1}, ${cor2});
		color: ${cor1};
		}
		label, span#spanPais {
				color: lightgrey;
		}
		input#confir {
		background-color: transparent;
		}
		input#confir:hover {
		background-image: linear-gradient(45deg, ${cor2} 30%, ${cor1});
		}
		`
}
/*transparência*/
const inptTrans = window.document.getElementsByName('transparencia')[0]
const spanEscreva = window.document.getElementById("escreva")
let lyc = window.document.getElementById('LYC')
function opacidade() {
	let transAtual = inptTrans.value/100
	spanEscreva.textContent = (transAtual*100).toFixed(0) +"%"
	lyc.style.opacity = transAtual
	if (transAtual = 0) {
		lyc.setAttribute("hidden","hidden")
	} else{
		lyc.removeAttribute("hidden")
	}
}