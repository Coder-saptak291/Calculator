let buttons = document.querySelectorAll('.btn');
let input = document.querySelector("input");
let str = "";
let eq = document.getElementById("equal")
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let bv = button.innerHTML;
        // str = str + bv;
        if (bv == '=') {
            bv= eval(str)
            input.value = bv;
            // bv = "";
        }
        else{
            if (bv == 'AC') {
                input.value ="";
                // console.clear();
                str = "";
            }
            else{
                let bv = button.innerHTML;
                str = str + bv;
                input.value = str;
                
            }
        }





    })
})
input.addEventListener("input", ()=>{
    str = input.value;
})
eq.addEventListener("click", ()=>{
    bv = str.eval(str);
    input.value = bv ;
})
