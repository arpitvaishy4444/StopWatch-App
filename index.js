const watch = document.querySelector("h2");
const startbutton = document.getElementById("btn1");
const stopbutton = document.getElementById("btn2");
const restartbtn = document.getElementById("btn3");


let sec = 0;
let hr = 0;
let min = 0;

let interval1;

startbutton.addEventListener("click",()=>{
     interval1 = setInterval(() => {
        
        if(sec<59){
          sec++;
        }
        else if(min>59){
          min =0;
          hr++;
        }else{
          sec = 0;
          min++;
        };
        let syntax  = (String(hr).padStart(2,"0")+":"+String(min).padStart(2,"0")+":"+String(sec).padStart(2,"0"));
        watch.innerText= syntax;
      }, 1000);
});

stopbutton.addEventListener("click",()=>{
    clearInterval(interval1);
})

restartbtn.addEventListener("click",()=>{
    document.location.reload();
})
