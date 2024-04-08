

const btns=document.querySelectorAll(".btn");

let birinchiBtn=null;

btns.forEach(btn=>{
    btn.addEventListener("click",()=>{
        if (birinchiBtn){
            if (birinchiBtn !==  birinchiBtn.textContent===btn.textContent){
                 tn.style.backround='red';
            }else{
                birinchiBtn.style.backround='green'
            }
        }else{
            btn.style.backround='red';
            birinchiBtn=btn;
        }
    });
});