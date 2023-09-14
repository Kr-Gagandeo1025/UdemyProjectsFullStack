buttonColors = ["red","blue","green","yellow"];
var gamepattern = [];
var userpattern = [];
var started = false;
var level = 0;
function StartOver(){
    started = false;
    level = 0;
    gamepattern = [];
}
function playaudio(randomChosenColor){
    let audio = new Audio();
    audio.src="sounds/"+randomChosenColor+".mp3";
    audio.autoplay = true;
    audio.play();
}
function flashAnim(randomChosenColor){
    $("#" + randomChosenColor).fadeIn().fadeOut().fadeIn();
}
function animatepress(color){
    $("#"+color).addClass("pressed");
    setTimeout(function(){
        $("#"+color).removeClass("pressed");
    },100);
}
function NextSequence(){
    userpattern = [];
    level++;
    $("#level-title").text("Level "+level);
    randomNumber = Math.floor(Math.random()*4);
    randomChosenColor = buttonColors[randomNumber];
    gamepattern.push(randomChosenColor);
    console.log(gamepattern);
    // $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    flashAnim(randomChosenColor);
    playaudio(randomChosenColor);
    // let audio = new Audio("sounds/"+randomChosenColor+".mp3");   
}
$(".btn").on("click",function(){
    var id = $(this).attr("id");
    userpattern.push(id);
    animatepress(id);
    playaudio(id);
    checkAnswer(userpattern.length-1);
    // console.log(userpattern);

})
$(document).on("keypress",function(){
    if(!started){
        NextSequence();
        started = true;
    }
})
function checkAnswer(index){
    if(gamepattern[index]===userpattern[index]){
        // console.log("success");
        if(userpattern.length===gamepattern.length){
            setTimeout(NextSequence(),100);
        }
    }else{
        $("body").addClass("game-over");
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        StartOver();
    }
}

