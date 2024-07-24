camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format :'jpeg',
    jpeg_quality:90
});
function take_snapshot()
{

    Webcam.snap(function(data_uri) {
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
    
    })
  ;
}

Webcam.attach(camera);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/y6PKCry1X/model.json",modelLoaded)

function modelLoaded() {
    console.log('Model Loaded!');
    take_snapshot();
    check();
  }
function check()
{
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/y6PKCry1X/model.json',modelLoaded);
  img = document.getElementById('selfie1');
  classifier.classify(img, gotResult);
}
music = new Audio("s.mp3");
function gotResult(error, results) {

    console.log(results);

    animal = results[0].label;
    if (animal == "monkey")
        music.play();

}