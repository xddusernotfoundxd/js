let b = document.querySelector('body')
let but = document.createElement('button')
let but1 = document.createElement('button')
let but2 = document.createElement('button')
let but3 = document.createElement('button')
let cvad = document.createElement('div')
cvad.classList.add('cvad')
but.classList.add('but')
but1.classList.add('but1')
but.innerHTML = 'Розовый'
but1.innerHTML = 'Голубой'
but2.innerHTML = 'Оранжевый'
but3.innerHTML = 'Черный'
cvad.addEventListener('mouseenter', () => {
  cvad.style.backgroundColor = 'green'
})
cvad.addEventListener('mouseleave', () => {
  cvad.style.backgroundColor = 'red'
})
but.addEventListener('click', () => {
  cvad.style.backgroundColor = 'pink'
})
but1.addEventListener('click', () => {
  cvad.style.backgroundColor = 'blue'
})
but2.addEventListener('click', () => {
  cvad.style.backgroundColor = 'orange'
})
but3.addEventListener('click', () => {
  cvad.style.backgroundColor = 'black'
})






b.appendChild(cvad)
b.appendChild(but)
b.appendChild(but1)
b.appendChild(but2)
b.appendChild(but3)
console.log(b)