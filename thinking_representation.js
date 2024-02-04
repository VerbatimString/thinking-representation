const cssClassNames = [
    "random-style-1",
    "random-style-2"
];

const possibleColors = [
        "DarkBlue",
        "Crimson",
        "DarkMagenta",
        "DarkSlateGray",
        "Azure",
        "DimGray",
        "MediumSpringGreen",
        "White",
        "Tan",
        "Yellow"
    ];
    
const possibleTextDecors = [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "underline",
        "overline"
    ];

const possibleTextTransformations = [
        "uppercase",
        "lowercase",
        "capitalise"
    ];

const possibleFontWeights = [
    "normal",
    "bold",
    "bolder",
    "lighter"
];
            
var containerForAll = document.getElementById("containerForAll");
var labelToUpdate = document.getElementById("label1");

var randomTextSize = getRandomArbitrary(50,200);
var randomTextSpacing = getRandomArbitrary(50,200);
var randomLineHeight = getRandomArbitrary(100,400);

labelToUpdate.setAttribute("style", 
                "color:" + possibleColors[getRandomArbitrary(0, possibleColors.length)] + ";" + 
                "text-decoration:" + possibleTextDecors[getRandomArbitrary(0,possibleTextDecors.length)] + ";" +
                "font-size:" + randomTextSize + "px;" +
                "letter-spacing" + randomTextSpacing + "px;" +
                "font-weight" + possibleFontWeights[getRandomArbitrary(0, possibleFontWeights.length)]
                );
                
var amountOfLabels = 1;

window.addEventListener('keypress', function(e){
    console.log(e.charCode);
    console.log(e.keyCode);
    appendCharacter(e.keyCode);
});

window.addEventListener('keydown', function (e) {
    if(e.keyCode == 8){
        e.preventDefault(); 
        appendCharacter(e.keyCode);
    }
});

var amountOfCss = 0;

function appendCharacter(c){
    
        if(c === 32){

            var randomTextSize = getRandomArbitrary(50,200);
            var randomTextSpacing = getRandomArbitrary(50,200);
            var randomLineHeight = getRandomArbitrary(100,400);

                    
            var newLabel = document.createElement("Label");
            newLabel.setAttribute("style", 

                "color:" + possibleColors[getRandomArbitrary(0, possibleColors.length)] + ";" + 
                "text-decoration:" + possibleTextDecors[getRandomArbitrary(0,possibleTextDecors.length)] + ";" +
                "font-size:" + randomTextSize + "px;" +
                "letter-spacing" + randomTextSpacing + "px;" +
                "font-weight" + possibleFontWeights[getRandomArbitrary(0, possibleFontWeights.length)]
                );
                        
            containerForAll.appendChild(newLabel);
            labelToUpdate = newLabel;
            
            if(newLabel.innerHTML === "")
                newLabel.innerHTML = String.fromCharCode(c);
            
            if(c === 8){
                newLabel.innerHTML = newLabel.innerHTML.slice(0, -1);
                return;
            }
        
            newLabel.innerHTML = newLabel.innerHTML + String.fromCharCode(c);
            return;
        }
        
        if(c === 8){
            labelToUpdate.innerHTML = labelToUpdate.innerHTML.slice(0, -1);
            return;
        }
        
        if(labelToUpdate.innerHTML === "")
            labelToUpdate.innerHTML = String.fromCharCode(c);
        
        labelToUpdate.innerHTML = labelToUpdate.innerHTML + String.fromCharCode(c);
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}