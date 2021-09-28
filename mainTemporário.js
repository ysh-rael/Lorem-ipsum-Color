function confirmar() {
	// letNOME
		lettxtn = window.document.getElementById('txtn')
		let nome = txtn.value.toUpperCase()
	// letGENERO 
		letsex = window.document.getElementsByName('radx')
		let genero = ''
		if (sex[0].checked) {
			genero = 'Homem'
		} else {
			genero = 'mulher'
		}
	// letIDADE
		letidade = window.document.getElementById('idade')
		let idad = Number(idade.value)
	// letNACIONALIDADE
	 
		letselect = window.document.getElementById('paises')
		let vpaís = select.options[select.selectedIndex].text
		letbr = window.document.getElementById('br')
		letdivEmoji = window.document.getElementById('emoji')
		if (vpaís == 'Brasil') {
			emoji.innerHTML = '&#x1F1E7 &#x1F1F7'
		} else{
			emoji.innerHTML = '"emoji"'
		}
	// letSENHA
		let txts = window.document.getElementById('senha')
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
	
	// bot
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
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	 	letc1p4 = window.document.getElementById('c1p4')
	 	letc2p4 = window.document.getElementById('c2p4')
	 	letc3p4 = window.document.getElementById('c3p4')
	 	letc4p4 = window.document.getElementById('c4p4')
	 	letc5p4 = window.document.getElementById('c5p4')

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


function loop () {
	alert(letc1p1.value)
}

requestAnimationFrame(loop)

 function cores001(){
	estilo.href = 'style/estilo-001.css'
 }

 function cores002(){
	estilo.href = 'style/estilo-002.css'

 }

 function cores003(){

	estilo.href = 'style/estilo-003.css'
 }

 function cores004(){

	estilo.href = 'style/estilo-004.css'
   }