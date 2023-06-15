console.log('kuk');
var obj_pos=document.getElementById('first');

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

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function move_right(to_right){
    left+=step;

    if(left <=96){
        obj_pos.style.left =left+"%";
    } else{
        alert("Достигнуто крайнее правое положение!")
    }
    if(obj_pos.style.left == ball.style.left && obj_pos.style.top == ball.style.top){
        var x_ball = getRandomInRange(4, 94);
        var y_ball = getRandomInRange(7, 63);
        console.log(x_ball, y_ball);
        ball.style.left=x_ball+'%';
        ball.style.top=y_ball+'%';
    }
}

function move_left(to_left){
    left-=step;

    if(left >=2){
        obj_pos.style.left =left+"%";
    } else{
        alert("Достигнуто крайнее левое положение!")
    }
    if(obj_pos.style.left == ball.style.left && obj_pos.style.top == ball.style.top){
        var x_ball = getRandomInRange(4, 94);
        var y_ball = getRandomInRange(7, 63);
        console.log(x_ball, y_ball);
        ball.style.left=x_ball+'%';
        ball.style.top=y_ball+'%';
    }
}
function move_up(to_up){
    up-=step;

    if(up >=5){
        obj_pos.style.top =up+"%";
    } else{
        alert("Достигнуто крайнее верхнее положение!")
    }
    if(obj_pos.style.left == ball.style.left && obj_pos.style.top == ball.style.top){
        var x_ball = getRandomInRange(4, 94);
        var y_ball = getRandomInRange(7, 63);
        console.log(x_ball, y_ball);
        ball.style.left=x_ball+'%';
        ball.style.top=y_ball+'%';
    }
}
function move_down(to_down){
    up+=step;

    if(up <=65){
        obj_pos.style.top=up+"%";
    } else{
        alert("Достигнуто крайнее нижнее положение!")
    }
    if(obj_pos.style.left == ball.style.left && obj_pos.style.top == ball.style.top){
        var x_ball = getRandomInRange(4, 94);
        var y_ball = getRandomInRange(7, 63);
        console.log(x_ball, y_ball);
        ball.style.left=x_ball+'%';
        ball.style.top=y_ball+'%';
    }
}
ball.style.left=x_ball+'%';
ball.style.top=y_ball+'%';
