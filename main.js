noseX = 0;
noseY = 0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/LX2v7D0B/mustache-removebg-preview.png')

}
function setup() {
    Canvas = createCanvas(300, 300);
    Canvas.center()
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results) {
    if (results.length > 0)
    {
        console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
    }
}
function modelLoaded() {
    console.log('PoseNet Is Initialized')
}
function draw() {
image(video, 0, 0, 300, 300);
image(mustache, noseX -30, noseY +8, 70, 32)
}
function takesnapshot() {
    save('myfilterimg.png')
}