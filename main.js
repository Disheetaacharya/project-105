Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90

});

camera = document.getElementById("camera").innerHTML;
Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 verson :",ml5.verson);
classifier =ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lLrKPgtzE/model.json",modelLoaded);

function modelLoaded()
{
    console.log('Modle Loaded!');
}

function check()
{
    img = document.getElementById("capture_img");
    classifier.classify(img,gotResult);
}

function gotResult(error , results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_object").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}

