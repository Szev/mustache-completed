noseX= 0;
noseY= 0;
function preload()
{
    mustache= loadImage('https://i.postimg.cc/tT5ZT2hh/A-Mustache-Looks-Like-a-Big-Hairy-Smile.png');

}
function setup()
{
    canvas= createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function modelLoaded()
{
    console.log('pose net is initialized');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x-30;
        noseY= results[0].pose.nose.y;
        
    }
}
function draw()
{
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 60, 30);


}
function take_snapshot()
{
    save('myfilteimage.png');
}