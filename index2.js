let r1 = document.querySelector(`.r1`);
let r2 = document.querySelector(`.r2`);
let r3 = document.querySelector(`.r3`);

let r1_order = document.querySelector(`.r1_order`);
let r2_order = document.querySelector(`.r2_order`);
let r3_order = document.querySelector(`.r3_order`);

let gen_inf = document.querySelector(`.gen_inf`);

for(let i = 0; i < 5; i++){
    const node = document.createElement("button");
    node.innerHTML = (i + 1);
    node.classList.add("item");
    r1.append(node);
    console.log(i);
    let isClick = false;
    node.addEventListener('click', function(){
        isClick = !isClick;
        if(isClick){
            node.classList.remove("item");
            node.classList.add("booked");
            document.querySelector(`.r1_order`).style.display = 'block';
            r1_order.innerHTML = "Номер забронирован";
            setTimeout(function(){
                document.querySelector(`.r1_order`).style.display = 'none';
            }, 1000);
            localStorage.setItem(`order1${i}`, i);
        }
        else{
            node.classList.remove("booked");
            node.classList.add("item");
            localStorage.removeItem(`order1${i}`, i);
        }
    });
    let storage = localStorage.getItem(`order1${i}`);
    if(!storage){
        node.classList.remove("booked");
        node.classList.add("item");
    }
    else{
        isClick = !isClick;
        node.classList.remove("item");
        node.classList.add("booked");
    }
}

for(let i = 0; i < 5; i++){
    const node = document.createElement("button");
    node.innerHTML = (i + 1);
    node.classList.add("item");
    r2.append(node);
    console.log(i);
    let isClick = false;
    node.addEventListener('click', function(){
        isClick = !isClick;
        if(isClick){
            node.classList.remove("item");
            node.classList.add("booked");
            document.querySelector(`.r2_order`).style.display = 'block';
            r2_order.innerHTML = "Номер забронирован";
            setTimeout(function(){
                document.querySelector(`.r2_order`).style.display = 'none';
            }, 1000);
            localStorage.setItem(`order2${i}`, i);
            
        }
        else{
            node.classList.remove("booked");
            node.classList.add("item");
            localStorage.removeItem(`order2${i}`, i);
        }
    });
    let storage = localStorage.getItem(`order2${i}`);
    if(!storage){
        node.classList.remove("booked");
        node.classList.add("item");
    }
    else{
        isClick = !isClick;
        node.classList.remove("item");
        node.classList.add("booked");
    }
}
for(let i = 0; i < 5; i++){
    const node = document.createElement("button");
    node.innerHTML = (i + 1);
    node.classList.add("item");
    r3.append(node);
    console.log(i);
    let isClick = false;
    node.addEventListener('click', function(){
        isClick = !isClick;
        if(isClick){
            node.classList.remove("item");
            node.classList.add("booked");
            document.querySelector(`.r3_order`).style.display = 'block';
            r3_order.innerHTML = "Номер забронирован";
            setTimeout(function(){
                document.querySelector(`.r3_order`).style.display = 'none';
            }, 1000);
            localStorage.setItem(`order3${i}`, i);
        }
        else{
            node.classList.remove("booked");
            node.classList.add("item");
            localStorage.removeItem(`order3${i}`, i);
        }
    });
    let storage = localStorage.getItem(`order3${i}`);
    if(!storage){
        node.classList.remove("booked");
        node.classList.add("item");
    }
    else{
        isClick = !isClick;
        node.classList.remove("item");
        node.classList.add("booked");
    }
}