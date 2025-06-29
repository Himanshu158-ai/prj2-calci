let inp = document.querySelector('input');
let eql = document.querySelector('.ex');
let dgt = document.querySelectorAll('.btn');

let op = false;
let val1 = "";
let val2 = "";
let oprt = '';

for (let i = 0; i < dgt.length; i++) {
    dgt[i].addEventListener('click', (dets) => {
        // dets.target.style.backgroundColor = "red";
        let dgts = dets.target.innerHTML;
        if (dgts == '/' || dgts == '*' || dgts == '-' || dgts == '+' || dgts == '%') {
            op = true;
            inp.value = "";
            oprt = dgts;
        } else if (op == false) {
            inp.value += dgts;
            val1 += dgts;
        } else if (op == true) {
            inp.value += dgts;
            val2 += dgts;
        }
    })
}

eql.addEventListener('click', function () {
    inp.value = "";
    let f1 = false;
    for(let i = 0; i<val1.length; i++){
        if(val1[i]=='.'){
            val1 = parseFloat(val1);
            f1 = true;
            break;
        }
    }
    if(f1!=true){
        val1 = parseInt(val1);
    }

    let f2 = false;
    for(let i = 0; i<val2.length; i++){
        if(val2[i]=='.'){
            val2 = parseFloat(val2);
            f2 = true;
            break;
        }
    }
    if(f2!=true){
        val2 = parseInt(val2);
    }
    
    console.log(val1);
    console.log(val2);
    switch (oprt) {
        case '+':
            inp.value = val1 + val2;
            val1 = inp.value;
            val2 = "";
            op = false;
            break;
        case '-':
            inp.value = val1 - val2;
            val1 = inp.value;
            val2 = "";
            op = false;
            break;
        case '*':
            inp.value = val1 * val2;
            val1 = inp.value;
            val2 = "";
            break;
        case '/':
            inp.value = val1 / val2;
            val1 = inp.value;
            val2 = "";
            break;
        case '%':
            inp.value = val1 % val2;
            val1 = inp.value;
            val2 = "";
            break;
    }
})

let clr = document.querySelector('.AC');
clr.addEventListener('click', function () {
    inp.value = "";
    val1 = "";
    val2 = "";
    oprt = '';
    op = false;
})


let bck = document.querySelector('.DL');
bck.addEventListener('click', function () {
    if (op == false) {
        val1 = val1.slice(0,val1.length-1);
        inp.value = val1;
    }else{
        val2 = val2.slice(0,val2.length-1);
        inp.value = val2;
    }
})