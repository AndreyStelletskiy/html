document.addEventListener("DOMContentLoaded",function(){

const send = document.getElementById("send")
const mes = document.getElementById("mes")

send.addEventListener("click",() =>{
    console.log(mes.value)
    
    if (mes.value.trim()!=""){
        modalWndow('Ваше сообщение передано владельцу данного сайта', 1200);

        function modalWndow(info, t) {
                const p = document.querySelector('.modals');
                p.innerHTML = info;
                p.classList.add('vizz');
                let time = setTimeout(() => {
                    p.classList.remove('vizz');
                    p.innerHTML = "";
                }, t);
        }
    }

    mes.value=""

})

})