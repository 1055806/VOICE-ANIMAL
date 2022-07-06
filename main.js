

function startClassification() 
{
 navigator.mediaDevices.getUserMedia({ audio: true});
 classfier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VcLImUs27/model.json', modelReady);    
}




function modelReady()
{
    classfier.classify(gotResults);
}