function verificar() {
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

// SE TIVER DADOSS INCORRETOS..
	if (nome == 0 || idad <= 0 || idad > 122) {
		alert('[ERR0] Verifique os dados e tente novamente!')
	}else{

// SE NÃO..

// RESSULTADO LATERAL	
	res.innerHTML  = `Nome: ${nome}<br>`
	res.innerHTML += `Gênero: ${genero}<br>`
	res.innerHTML += `Idade: ${idad} anos<br>`
	res.innerHTML += `País: ${vpaís} <br>`

//BUTÃO CONFIRMAR
	var confir = window.document.createElement('input')
	confir.type = 'button'
	confir.value = 'confirmar'
	confir.id = 'confir'
	confir.style.src ='estilo.css'
	res.appendChild(confir)

 }
 }

function confirmar() {
	var dados01 = [nome, genero, idad, vpaís, vcidad, vbairr]
	alert(usuario01.value)
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

/*Para alterar um texto para maiúsculo em JavaScript, utilizamos o método toUpperCase(). Para alterar para minúsculo, utilizamos o método toLowerCase().*/