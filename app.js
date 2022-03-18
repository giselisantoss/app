function clicou(){
    var nome= prompt("Qual é o seu nome?")
    var res = document.getElementById('Qual é a sua média')
    res.innerHTML= `<p>Olá, ${nome} E um grande pazer te conhecer</p>`
   
   }

function calcular(){
    let nome = prompt("Qual é o seu nome ?")
    let n1= Number (prompt(`Digite a primeira nota ${nome}?`))
    let n2= Number (prompt(`Além de ${n1} qual foi a sua nota ${nome}`))
    let media= (n1+n2)/2
    
    let res = document.getElementById('resutado')
    res.innerHTML = `<p> Caucule a media final de ${nome}. </p>`
    res.innerHTML += `<p> As notas obtidas foram ${n1} e ${n2}. </p>`
    res.innerHTML += `<p> A media final será ${media} </p>`

    if (media >=6) {
        alert("Voce foi aprovado")
        res.innerHTML += `<p>Voce foi aprovado </p>`

        } else{ 
        alert ("Voce foi reprovado")
        res.innerHTML += `<p>Voce foi reprovado</p>`

        }
}
