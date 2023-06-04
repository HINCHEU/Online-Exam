q1_1.addEventListener("click", fnq1_1);
q1_2.addEventListener("click", fnq1_2);
q1_3.addEventListener("click", fnq1_3);
let sum1=0
function fnq1_1(){
    q1_2.checked = false;
    q1_3.checked = false;
    sum1 = 1;
}
function fnq1_2(){
    q1_1.checked = false;
    q1_3.checked = false;
    sum1 = 0;
}
function fnq1_3(){
    q1_1.checked = false;
    q1_2.checked = false;
    sum1 = 0;
}
/*////////////////////////////////2/////////////////////////*/
q2_1.addEventListener("click", fnq2_1);
q2_2.addEventListener("click", fnq2_2);
q2_3.addEventListener("click", fnq2_3);
let sum2=0;
function fnq2_1(){
    q2_2.checked = false;
    q2_3.checked = false;
    sum2 = 0;
}
function fnq2_2(){
    q2_1.checked = false;
    q2_3.checked = false;
    sum2 = 4;
}
function fnq2_3(){
    q2_1.checked = false;
    q2_2.checked = false;
    sum2 = 0;
}
/*////////////////////////////////sum/////////////////////////*/
function fnClick(){
    q1_1.disabled = true;
    q1_2.disabled = true;
    q1_3.disabled = true;
    let sum = sum1 + sum2;
    rs.innerHTML= "Your Point IS :"+sum;

    if(q1_1.checked){
        q1_1.style.borderColor= "green";
    }    
    if(q1_3.checked){
        q1_3.style.borderColor = "red";
        q1_1.style.borderColor= "green";
    }
    if(q1_2.checked){
        q1_2.style.borderColor = "red";
        q1_1.style.borderColor= "green";
    } 
    /*2*/
    if(q2_1.checked){
        q2_1.style.borderColor= "red";
        q2_2.style.borderColor= "green";
    }    
    if(q2_3.checked){
        q2_3.style.borderColor= "red";
        q2_2.style.borderColor= "green";
    }
    if(q2_2.checked){
        q2_2.style.borderColor= "green";
    }              
}

