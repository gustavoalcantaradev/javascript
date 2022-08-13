function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`

    if (hora >= 0 && hora < 12 ){
        //Bom dia!
        img.src = 'manha1.jpg'
        document.body.style.background = '#b5e1fa'
    } else if (hora >= 12 && hora <= 18 ) {
        //Boa tarde!
        img.src = 'tarde1.jpg'
        document.body.style.background = '#bc6f31'
    } else {
        //Boa noite!
        img.src = 'noite1.jpg'
        document.body.style.background = '#4f4f57'
    }
}