function carregar(){
var img = document.getElementById('foto')
var horario = document.getElementById('horario')
var agora = new Date()
var hr = agora.getHours()
var corpo = document.body

if(hr > 5 && hr < 12){
    horario.innerHTML= `Agora são ${hr} horas`
    img.src = 'imagens/demanha.jpg'
}else if (hr > 11 && hr < 18){
    horario.innerHTML = `Agora são ${hr} horas`
    corpo.style.backgroundColor = 'orange'
    img.src = 'imagens/meiodia.jpg'
}else if (hr > 17 && hr < 24){
    horario.innerHTML = `Agora são ${hr} horas`
    corpo.style.backgroundColor = 'gray'
    img.src = 'imagens/fimdetarde.jpg'
}
}