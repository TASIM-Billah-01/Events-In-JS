console.log("hello! from inside of the script js file");

// option - 2
function makeRed() {
    document.body.style.backgroundColor = "red";
}

// option - 3
const blue = document.getElementById("make-blue");
blue.onclick = makeBLue;
function makeBLue() {
    document.body.style.backgroundColor = 'blue';
}

// option - 3

const pink = document.getElementById("make-pink")
pink.onclick = function () {
    document.body.style.backgroundColor = "pink";
}

// option - 4
const gray = document.getElementById("make-gray");
gray.addEventListener("click", function () {
 document.body.style.backgroundColor = "gray";
})

// last and final and will be maximum used

document.getElementById("make-violet").addEventListener("click", function () {
    document.body.style.backgroundColor = "blueviolet"
})  