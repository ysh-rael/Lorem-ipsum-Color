function verificar() {
// VAR NOME
	var txtn = window.document.getElementById('txtn')
	var nome = txtn.value
// VAR SEXO 
	var sex = window.document.getElementsByName('radx')
	var sexo = ''
	if (sex[0].checked) {
		sexo = 'Homem'
	} else {
		sexo = 'mulher'
	}
// VAR IDADE
	var idade = window.document.getElementById('idade')
	var idad = Number(idade.value)
// VAR NACIONALIDADE
	var select = document.getElementById('nações')
	var option = select.options[select.selectedIndex]
	window.document.getElementById('value').value = option.value
	window.document.getElementById('text').value = option.text
	}

// RESSULTADO LATERAL	
	res.innerHTML  = `Nome: ${nome}<br>`
	res.innerHTML += `Gênero: ${sexo}<br>`
	res.innerHTML += `Idade: ${idad} anos<br>`
	res.innerHTML += `País: ${país}`