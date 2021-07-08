function contar() {
    let ini = document.getElementById('txti')
    let end = document.getElementById('txtf')
    let pass = document.getElementById('txtp')
    let res = document.getElementById('res')
    if(ini.value.length == 0 || end.value.length == 0 || pass.value.length == 0){
        res.innerHTML = 'IMPOSSIVEL CONTAR!'
        window.alert('[ERRO] faltam dados!')
    }
    else{
        res.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(end.value)
        let p = Number(pass.value)
        if(p <= 0){
            window.alert('Passo invalido! considerando PASSO 1')
            p = 1
        }
        if (i < f){
            //Contagem crescente
            for(let c = 1; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}` 
        }
        else{
            //Contagem regressiva
            for(let c = 1; c >= f; c-=0){
                res.innerHTML +=`${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}