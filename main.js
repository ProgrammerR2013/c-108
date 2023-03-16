console.log(ml5.version);

function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/D5ODrTWbk/model.json", modelReady);
}

function modelReady(){
    console.log("Model is ready")
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random * 255) + 1;
        random_number_g = Math.floor(Math.random * 255) + 1;
        random_number_b = Math.floor(Math.random * 255) + 1;

        document.getElementById("result_label").innerHTML = "Animal heard - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
         
        // Styling the 2 labels
        document.getElementById("result_label").style.color = "rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";

        // Making references to the animal images
        img_dog = document.getElementById("dog");
        img_cat = document.getElementById("cat");
        img_bird = document.getElementById("bird");
        img_lion = document.getElementById("lion");

        // Making if, else if, and else conditions to make the aliens dance when a particular sound gets made
        if (results[0].label == "Cat Meowing"){
        img_dog.src = "Dog.jpeg";
        img_cat.src = "cat.gif";
        img_bird.src = "Bird.jpeg";
        img_lion.src = "lion.jpg";
        }
        else if(results[0].label == "Bird Chirping"){
            img_dog.src = "Dog.jpeg";
            img_cat.src = "cat.jpg";
            img_bird.src = "bird.gif";
            img_lion.src = "lion.jpg";
        }

        else if(results[0].label == "Dog Barking"){
            img_dog.src = "dog.gif";
            img_cat.src = "cat.jpg";
            img_bird.src = "Bird.jpeg";
            img_lion.src = "lion.jpg";
        }
        else if(results[0].label == "Lion roaring"){
            img_dog.src = "Dog.jpeg";
            img_cat.src = "cat.jpg";
            img_bird.src = "Bird.jpeg"; 
            img_lion.src = "lion.gif";
        }
        else{
            console.log("This program only recognizes animal voices");
        }
    }
}