function pulandinho(){
    let ini = document.getElementById('txtini')
    let fin = document.getElementById('txtfin')
    let pul = document.getElementById('txtpul')
    let msg = document.getElementById('msg1')

    if(ini.value.length == 0 || fin.value.length == 0 || pul.value.length == 0){
        window.alert('ta faltando coisa ai brother')
    } else {
        msg.innerHTML = ('Contando:')
        let i = Number(ini.value)
        let f = Number(fin.value) 
        let p = Number(pul.value)

        if (p == 0){window.alert('não da pra pular de 0 em 0 né animal?')}
        if(i < f){
        //contagem crescente
        for(let c = i; c <= f; c += p){
            msg.innerHTML += `${c} \u{27A1}`
        }msg.innerHTML += `\u{1F3C1}`

        }else{
            //contagem decrescente
            for(let c = i;c >= f; c -= p){
                msg.innerHTML += `${c} \u{27A1}`
            }msg.innerHTML += `\u{1F3C1}`

        }
    }
}

