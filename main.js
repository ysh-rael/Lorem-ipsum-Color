function verificar() {
// VAR NOME
	var txtn = window.document.getElementById('txtn')
	var nome = txtn.value

// VAR SEXO 
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

// VAR CIDADE
	var select = window.document.getElementById('cidade')
	var vcidad = select.options[select.selectedIndex].text

// VAR BAIRRO
	var select = window.document.getElementById('bairro')
	var vbairr = select.options[select.selectedIndex].text


// SE TIVER DADOSS INCORRETOS..
	if (nome == 0 || idade <= 0 || idade <122) {
		alert('[ERR0] Verifique os dados e tente novamente!')
	}else{

// SE NÃO..

// RESSULTADO LATERAL	
	res.innerHTML  = `Nome: ${nome}<br>`
	res.innerHTML += `Gênero: ${genero}<br>`
	res.innerHTML += `Idade: ${idad} anos<br>`
	res.innerHTML += `País: ${vpaís} <br>`
	res.innerHTML += `Cidade: ${vcidad}<br>`
	res.innerHTML += `bairro: ${vbairr}<br>`
}
}