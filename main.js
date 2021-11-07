function setup() {
    canvas = createCapture(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{

}
