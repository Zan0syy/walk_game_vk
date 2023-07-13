console.log('kuk');
var obj_pos=document.getElementById('first');

var count = 0;
document.getElementById("count").innerHTML = 0;

var ball = document.getElementById("ball");
var find = true;

var x_ball;
var y_ball;

var x_ball = getRandomInRange(4, 94);
var y_ball = getRandomInRange(7, 63);
console.log(x_ball, y_ball);

var up = 5;
var left=2;
var step=1;


let timer; 
let time =10; 
countdown();
function countdown(){ 
  document.getElementById('time').innerHTML = time;
  time--;
  if (time<0){
    clearTimeout(timer);
    show_gameOver_screen();
  }
  else {
    timer = setTimeout(countdown, 1000);
  }
  if(count>=5){
    clearTimeout(timer);
    show_gameWin_screen();
  }
}


function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function move_right(to_right){
    left+=step;

    if(left <=96.5){
        obj_pos.style.left =left+"%";
    } else{
        alert("Достигнуто крайнее правое положение!")
    }
    if(obj_pos.style.left == ball.style.left && obj_pos.style.top == ball.style.top){
        count+=1;
        document.getElementById("count").innerHTML = count;
        var x_ball = getRandomInRange(4, 94);
        var y_ball = getRandomInRange(7, 63);
        console.log(x_ball, y_ball);
        ball.style.left=x_ball+'%';
        ball.style.top=y_ball+'%';
        time+=5;
    }

}

function move_left(to_left){
    left-=step;

    if(left >=0){
        obj_pos.style.left =left+"%";
    } else{
        alert("Достигнуто крайнее левое положение!")
    }
    if(obj_pos.style.left == ball.style.left && obj_pos.style.top == ball.style.top){
        count+=1;
        document.getElementById("count").innerHTML = count;
        var x_ball = getRandomInRange(4, 94);
        var y_ball = getRandomInRange(7, 63);
        console.log(x_ball, y_ball);
        ball.style.left=x_ball+'%';
        ball.style.top=y_ball+'%';
        time+=5;
    }
}
function move_up(to_up){
    up-=step;

    if(up >=0){
        obj_pos.style.top =up+"%";
    } else{
        alert("Достигнуто крайнее верхнее положение!")
    }
    if(obj_pos.style.left == ball.style.left && obj_pos.style.top == ball.style.top){
        count+=1;
        document.getElementById("count").innerHTML = count;
        var x_ball = getRandomInRange(4, 94);
        var y_ball = getRandomInRange(7, 63);
        console.log(x_ball, y_ball);
        ball.style.left=x_ball+'%';
        ball.style.top=y_ball+'%';
        time+=5;
    }
}
function move_down(to_down){
    up+=step;

    if(up <=92){
        obj_pos.style.top=up+"%";
    } else{
        alert("Достигнуто крайнее нижнее положение!")
    }
    if(obj_pos.style.left == ball.style.left && obj_pos.style.top == ball.style.top){
        count+=1;
        document.getElementById("count").innerHTML = count;
        var x_ball = getRandomInRange(4, 94);
        var y_ball = getRandomInRange(7, 63);
        console.log(x_ball, y_ball);
        ball.style.left=x_ball+'%';
        ball.style.top=y_ball+'%';
        time+=5;
    }
}
ball.style.left=x_ball+'%';
ball.style.top=y_ball+'%';

window.onkeydown = e =>{
    if (e.key == 'w' || e.key == 'ц'){
        move_up();
    }
    if (e.key == 's' || e.key == 'ы'){
        move_down();
    }
    if (e.key == 'a' || e.key == 'ф'){
        move_left();
    }
    if (e.key == 'd' || e.key == 'в'){
        move_right();
    }
}

function show_gameOver_screen(){
    if(time <=0){
        document.getElementById('game_over').style.display = "inline";
    }
}

function show_gameWin_screen(){
    document.getElementById('game_win').style.display = "inline";
}