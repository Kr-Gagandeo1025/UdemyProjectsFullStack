function decideWinner(){
    var rand1 = Math.floor(Math.random()*6)+1;
    var rand2 = Math.floor(Math.random()*6)+1;
    var d1n = "./images/dice"+rand1+".png";
    var d2n = "./images/dice"+rand2+".png";
    document.querySelector(".img1").setAttribute("src",d1n);
    document.querySelector(".img2").setAttribute("src",d2n);
    if(rand1>rand2){
        document.querySelector("h1").textContent="🚩Player 1 is Winner";
    }else if(rand2>rand1){
        document.querySelector("h1").textContent="Player 2 is Winner 🚩";
    }else{
        document.querySelector("h1").textContent="🚩Tie🚩";
    }
}