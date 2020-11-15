canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
rover_width1 = 100;
rover_height1 = 90;

background_image = "./racing.jpg";

rover_image = "./car1.png";
rover_image1 = "./car2.png";

rover_x = 10;
rover_y = 10;
rover_x1 = 110;
rover_y1 = 110;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    //new
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
    //new

    rover_imgTag1 = new Image();
    rover_imgTag1.onload = uploadrover1;
    rover_imgTag1.src = rover_image1;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    if (rover_x > 700) {
        console.log("player1 winner")
        document.getElementById("gggg").innerHTML="player1 winner";
        setTimeout(function () {
            location.reload();
        }, 5000
        );
    } else if (rover_x1 > 700) {
        document.getElementById("gggg").innerHTML="player2 winner";
        console.log("player2 winner")
        setTimeout(function () {
            location.reload();
        }, 5000
        );
    }
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

function uploadrover1() {
    ctx.drawImage(rover_imgTag1, rover_x1, rover_y1, rover_width1, rover_height1);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    keyPressed = e.keyCode;
    if (keyPressed == '38') {
        up(); e.preventDefault();
    }
    if (keyPressed == '40') {
        down(); e.preventDefault();
    }
    if (keyPressed == '37') {
        left(); e.preventDefault();
    }
    if (keyPressed == '39') {
        right(); e.preventDefault();
    }
    if (keyPressed == '87') {
        up1(); e.preventDefault();
    }
    if (keyPressed == '83') {
        down1(); e.preventDefault();
    }
    if (keyPressed == '65') {
        left1(); e.preventDefault();
    }
    if (keyPressed == '68') {
        right1(); e.preventDefault();
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        uploadBackground();
        uploadrover();
        uploadrover1();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        uploadBackground();
        uploadrover();
        uploadrover1();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        uploadBackground();
        uploadrover();
        uploadrover1();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        uploadBackground();
        uploadrover();
        uploadrover1();
    }
}





function up1() {
    if (rover_y1 >= 0) {
        rover_y1 = rover_y1 - 10;
        uploadBackground();
        uploadrover1();
        uploadrover();
    }
}

function down1() {
    if (rover_y1 <= 500) {
        rover_y1 = rover_y1 + 10;
        uploadBackground();
        uploadrover1();
        uploadrover();
    }
}

function left1() {
    if (rover_x1 >= 0) {
        rover_x1 = rover_x1 - 10;
        uploadBackground();
        uploadrover1();
        uploadrover();
    }
}

function right1() {
    if (rover_x1 <= 700) {
        rover_x1 = rover_x1 + 10;
        uploadBackground();
        uploadrover1();
        uploadrover();
    }
}