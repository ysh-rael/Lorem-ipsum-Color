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
<<<<<<< Updated upstream
// VAR NACIONALIDADE


=======
/* VAR NACIONALIDADE
	var select = window.document.getElementById('nações')
	var value = select.options[select.selectedIndex].value
//SE TIVER DADOSS INCORRETOS..*/
	if (nome == 0 || idade <= 0 || idade <122) {
		alert('[ERR0] Verifique os dados e tente novamente!')
	}else{
// SE NÃO..
>>>>>>> Stashed changes
// RESSULTADO LATERAL	
	res.innerHTML  = `Nome: ${nome}<br>`
	res.innerHTML += `Gênero: ${sexo}<br>`
	res.innerHTML += `Idade: ${idad} anos<br>`
<<<<<<< Updated upstream
=======
}
}
>>>>>>> Stashed changes
