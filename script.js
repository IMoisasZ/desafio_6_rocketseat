const form = document.querySelector('form')
const item = document.getElementById('item')
const btn = document.getElementById('btn')
const list = document.getElementById('list')
const itemList = document.getElementsByClassName('item')
const message = document.getElementById('message')
const btnClose = document.getElementById('btn-close')
message.style.display = 'none'

let buyList = ['Pão de forma', 'Café preto', 'Suco de laranja', 'Bolacha']
showList()

form.addEventListener('submit', (event) => {
	event.preventDefault()
	if (item.value === '') {
		alert('Digite um item para adicionar a lista')
		return
	}

	buyList.push(item.value)
	showList()
	item.value = ''
	item.focus()
})

function showList() {
	list.innerText = ''
	for (let i in buyList) {
		list.innerHTML += `
        <div class="format-item item"><div><input type="checkbox"><span>${buyList[i]}</span></div><button type="button" id="remove${i}" value=${i} onclick="removeItemList('${buyList[i]}')"><img src="./img/Frame-3.svg" alt=""></button></div>`
	}
}

function removeItemList(item) {
	let newList = buyList.filter((i) => i !== item)
	buyList = newList
	message.style.display = 'flex'
	showList()
}

btnClose.addEventListener('click', (event) => {
	event.preventDefault()
	message.style.display = 'none'
})
