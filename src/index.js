function colourchanger(str) {
    for (let index = 0; index < 10; index++) {
        if(document.getElementsByClassName(str).item(index)==null){
            break;
        }
        else{
            document.getElementsByClassName(str).item(index).classList.add("text-cyan-400");
            // document.getElementsByClassName(str).item(index).classList.add("2xl:text-cyan-400");
        }
    }
        
}

function india() {
    document.getElementById("saf").classList.add("text-orange-400");
    document.getElementById("white").classList.add("text-slate-200");
    document.getElementById("blue").classList.add("text-blue-600");
    document.getElementById("whit2").classList.add("text-slate-200");
    document.getElementById("green").classList.add("text-green-600");
}
function foreign() {
    document.getElementById("saf").classList.remove("text-orange-400");
    document.getElementById("white").classList.remove("text-slate-200");
    document.getElementById("blue").classList.remove("text-blue-600");
    document.getElementById("whit2").classList.remove("text-slate-200");
    document.getElementById("green").classList.remove("text-green-600");
}

function backtonormal(name){
    for (let index = 0; index < 10; index++) {   
        if(document.getElementsByClassName(name).item(index)==null){
            break;
        }
        else{
            document.getElementsByClassName(name).item(index).classList.remove("text-cyan-400");
        }
    }
}

var i = 0;
function burger(){
    i+=1;
    if(i%2!=0){
        document.getElementById("borgir").classList.add("rotate-90");
        document.getElementById("burgermenu").classList.remove("hidden");
    }
    else{
        document.getElementById("borgir").classList.remove("rotate-90");
        document.getElementById("burgermenu").classList.add("hidden");
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});

