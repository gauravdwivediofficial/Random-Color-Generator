let bgContainerElement = document.getElementById("bgContainer");
let buttonElement = document.getElementById("button");

let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

bgContainerElement.style.backgroundColor = "lightblue";

function touchMe(){
    let numbersOfColor = bgColorsArray.length;
    let randomColorIndex = Math.ceil(Math.random() * numbersOfColor);

    if (randomColorIndex === numbersOfColor){
        randomColorIndex = numbersOfColor - 1;
    }
    let randomColor = bgColorsArray[randomColorIndex];
    bgContainerElement.style.backgroundColor = randomColor;
}

