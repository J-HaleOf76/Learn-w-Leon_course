const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')
const amy = document.querySelector('#amy')
const nikki = document.querySelector('#nikki')


document.querySelector('#nikkiNext').addEventListener('click', nikkiNext)
document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)
document.querySelector('#amyNext').addEventListener('click', amyNext)


function nikkiNext(){
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	andi.classList.add('hidden')
	amy.classList.add('hidden')
	nikki.classList.toggle('hidden')
}
function andiNext(){
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	andi.classList.toggle('hidden')
	amy.classList.add('hidden')
	nikki.classList.add('hidden')
}

function claireNext(){
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
	claire.classList.toggle('hidden')
	amy.classList.add('hidden')
}

function sharleenNext(){
	claire.classList.add('hidden')
	andi.classList.add('hidden')
	sharleen.classList.toggle('hidden')
	amy.classList.add('hidden')
	nikki.classList.add('hidden')
}

function amyNext(){
	amy.classList.toggle('hidden')
	claire.classList.add('hidden')
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
	nikki.classList.add('hidden')
}