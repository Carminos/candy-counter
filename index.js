let decreaseBtn = document.getElementById("decrease-btn");
let increaseBtn = document.getElementById("increase-btn");
let resetBtn = document.getElementById("reset-btn");
let saveEl = document.getElementById("save-btn");
let counter = document.getElementById("counter");
let count = 0;

decreaseBtn.addEventListener('click', ()=>{
    count --;  // decrease by one
    counter.innerHTML = count; // get HTML to match count variable
})
increaseBtn.addEventListener('click', ()=>{
    count ++;  // increase by one
    counter.innerHTML = count; // modify HTML to match count variable
})
resetBtn.addEventListener('click', ()=>{
    count = 0;
    counter.innerHTML = count; // can also write innerText
})

