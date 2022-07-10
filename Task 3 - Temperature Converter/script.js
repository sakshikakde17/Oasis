let main=()=>{
    let val = document.getElementById('val').value
    let op = document.getElementById('op').value
    let result = document.getElementById('result')
    let ic = document.getElementById('ic')

    let re

    let FtoC=(chr)=>{
        let c = Math.round((chr-32)*5/9)
        if(c <= 10){
            result.innerHTML=(`${c}°celsius <span>&#129398;</span>`) 
            ic.src = "cold_face.gif"
        }else if(c >= 40){
            result.innerHTML =(`${c}°celsius <span>&#129397;</span>`) 
            ic.src = "hot_face.gif"
        }else{
            result.innerHTML=(`${c}°celsius <span>&#128519;</span>`)
            ic.src = "smiling_face_with_halo.gif"
        }
    }

    let CtoF=(fhr)=>{
        let f = Math.round((fhr*9/5)+32)
        if(f <= 50){
            result.innerHTML=(`${f}°fahrenheit <span>&#129398;</span>`) 
            ic.src = "cold_face.gif"
        }else if(f >= 104){
            result.innerHTML =(`${f}°fahrenheit <span>&#129397;</span>`) 
            ic.src = "hot_face.gif"
        }else{
            result.innerHTML=(`${f}°fahrenheit <span>&#128519;</span>`)
            ic.src = "smiling_face_with_halo.gif"
        }
    }

    if(op=="celsius"){
        re = FtoC(val)
        return re
    }else{
        re= CtoF(val)
        return re
    }
}