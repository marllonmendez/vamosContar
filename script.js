function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pular = document.getElementById('pular')
    let res = document.getElementById('res')

    let i = Number(inicio.value) //inicio tipo string para number
    let f = Number(fim.value) //fim string para number
    let p = Number(pular.value) // pular string para number


    if(inicio.value.length == 0 || fim.value.length == 0 || pular.value.length == 0){
        window.alert('[ERRO] DADOS NÃO INSERIDOS')
    }else if(i < f){
        res.innerHTML = `Contando...`
        for(let cont = i; cont <= f; cont += p){
            res.innerHTML += ` ${cont}`
        }
    }else{
        res.innerHTML = `Contando...`
        for(let cont = i; cont >= f; cont -= p){
            res.innerHTML +=` ${cont}`
        }
    }

}