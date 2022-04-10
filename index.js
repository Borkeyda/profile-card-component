/*function puntaje(primerP,segundoP,final)
{
    return primerP+segundoP+final
debugger
console.log("Hola a todos");
console.log("Mi nota del semestre es: ",puntaje(20,25,10))*/
const elemento = document.getElementsByTagName('img')
elemento[0].alt = 'profile'   /*arreglo vector*/

const identificador = document.getElementById('ejemplo')
identificador.textContent = '700K'
console.log(identificador)

const likes=document.querySelector('img')
likes.textContent='Dislikes'
console.log(likes)

const nodeListDeParrafos=document.querySelectorAll('p')
console.log(nodeListDeParrafos)


//creando desde aqui
const profileCard=document.createElement('div')
profileCard.className='profile-card'

const profileCardTop=document.createElement('div')
profileCardTop.className='profile-card-top'

profileCard.appendChild(profileCardTop)

const app=document.querySelector('#app')
app.appendChild(profileCard)

const imagen=document.createElement('img')
imagen.src='./assets/victor.jpg'
imagen.alt='foto de perfil'

profileCardTop.appendChild(imagen)

const profileCardBottom=document.createElement('div')
profileCardBottom.className='profile-card-bottom'
profileCardBottom.className='profile-card-bottom'
profileCard.appendChild('')