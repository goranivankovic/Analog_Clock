let obj ={

hou:document.getElementById('hou'),
min:document.getElementById('min'),
sec:document.getElementById('sec'),
picture:document.querySelector('.picture'),
deg:6
}



setInterval(() => {
    let time = new Date();
    let h = time.getHours()*30;
    let m = time.getMinutes()*obj.deg;
    let s = time.getSeconds()*obj.deg;
    
    obj.hou.style.transform =`rotate(${h+(m/12)}deg)`;
    obj.min.style.transform =`rotate(${m}deg)`;
    obj.sec.style.transform =`rotate(${s}deg)`;
     
     
    
}, 1000);


