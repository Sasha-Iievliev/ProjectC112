https://teachablemachine.withgoogle.com/models/eZDT0NBgz/

Webcam.set({
    width : 350,
    height : 250,
    image_format  : "png",
    png_quailty : 90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='capture_image' src="+data_uri+">";
    });
}

console.log("ml5 version : ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/eZDT0NBgz/model.json", modelloaded);

function modelloaded(){
console.log("modelloaded");
}

function predict(){
    img = document.getElementById("captur_image");
    classifier.classify(img, gotResults)
}

function gotResults(error, results){
    if(error){
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("emotionname1").innerHTML = results[0].label;

        if(results[0].label == "amazing"){
            doucment.getElementById("emoji1").innerHTML = "&#128076;";
        }
        if(results[0].label == "best"){
            document.getElementById("emoji1").innerHTML = "&#128077;";
        }
        if(results[0].label == "victory"){
            document.getElementById("emoji1").innerHTML = "&#9996;";
        }


    }



}