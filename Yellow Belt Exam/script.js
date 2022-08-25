var countPepper = 1;
var countBruce = 1;
var countOscar = 1;
var p1 = document.querySelector(".petting1 p")
var p2 = document.querySelector(".petting2 p")
var p3 = document.querySelector(".petting3 p")

function removeButton(element){
    element.remove();
}

function pettingPepper() {
    countPepper++;
    p1.innerText = countPepper + " petting(s)";
}
function pettingBruce() {
    countBruce++;
    p2.innerText = countBruce + " petting(s)";
}
function pettingOscar(){
    countOscar++;
    p3.innerText = countOscar + " petting(s)";
}

function alertPet(){
    var choice = document.getElementById("pets");
    if (choice.value == "Dog"){
        alert('you are looking for a Dog');
    }
    else if (choice.value == "Cat"){
        alert('you are looking for a Cat');
    }

}