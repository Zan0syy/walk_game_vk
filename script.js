console.log('kuk');
var obj_pos=document.getElementById('first');


var up = 2;
var left=2;
var step=2;

function move_right(to_right){
    left+=step;

    if(left <=83){
        obj_pos.style.left =left+"%";
    } else{
        alert("Достигнуто крайнее правое положение!")
    }
}

function move_left(to_left){
    left-=step;

    if(left >=2){
        obj_pos.style.left =left+"%";
    } else{
        alert("Достигнуто крайнее левое положение!")
    }
}
function move_up(to_up){
    up-=step;

    if(up >=2){
        obj_pos.style.top =up+"%";
    } else{
        alert("Достигнуто крайнее верхнее положение!")
    }
}
function move_down(to_down){
    up+=step;

    if(up <=65){
        obj_pos.style.top =up+"%";
        console.log('k')
    } else{
        alert("Достигнуто крайнее нижнее положение!")
    }
}
