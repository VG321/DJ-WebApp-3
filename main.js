song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if (results.length < 0){
        console.log("no results");
    }
    else {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        console.log(leftWristX);
        leftWristY = results[0].pose.leftWrist.y;
        console.log(leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        console.log(rightWristX);
        rightWristY = results[0].pose.rightWrist.y;
        console.log(rightWristY);
    }
}

function modelLoaded(){
    console.log('PoseNet is Initialized.');
}

function draw(){
    image(video, 0, 0, 500, 400);
}

function preload(){
    song = loadSound("music.mp3");
}

function play(){
    song.play();

    song.setVolume(0.5);
    song.rate(1);
}