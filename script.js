let correctNo;
genRandomNo();
outputs = [];
document.getElementById("submit-guess").addEventListener("click",checkNumber);
document.getElementById("restart-game").addEventListener("click",()=>{
    outputs = []
    genRandomNo();
    // console.log(outputs);
    document.getElementById("feedback").innerHTML = '';
    document.getElementById("all-oup").innerHTML = '';
    document.getElementById("inp-form").reset();
})
function getInput(){
    let inp = document.getElementById("get-inp").value;
    return inp;
}


function genRandomNo(){
    correctNo = Math.ceil((Math.random()*100)+1);
}

function checkNumber(){
    let user = getInput();
    outputs.push(user);
    // console.log(user);
    // console.log(correctNo);
    if(user<correctNo){
        greaterNum();
    }
    else if(user>correctNo){
        smallerNum();
    }
    else{
        equalNum();
    }
    appendOup();
}

function greaterNum(){
    document.getElementById("feedback").innerHTML  =  "<div class='alert alert-warning' role='alert'>Try a Larger Num</div>";
}

function smallerNum(){
    document.getElementById("feedback").innerHTML  =  "<div class='alert alert-warning' role='alert'>Try a Smaller Num</div>";
}

function equalNum(){
    document.getElementById("feedback").innerHTML  =  "<div class='alert alert-success' role='alert'>Correct Guess!!!</div>";
}

function appendOup(){
    let ans = "<ul class='list-group'>";
    for(let val in outputs){
        ans+="<li class='list-group-item'>" + outputs[val] + "</li>";
        document.getElementById("all-oup").innerHTML = ans;
    }
    ans+= "</ul>";
}

