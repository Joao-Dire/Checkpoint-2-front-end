function digit(value) {
    document.getElementById("result").value += value
}

function addFloat() {
    var currentValue = document.getElementById("result").value;
        if(!currentValue.includes(".")) {
            document.getElementById("result").value += "."
        }
}
function addFloat2() {
    var currentValue = document.getElementById("result").value;
        if(!currentValue.includes(".")) {
            document.getElementById("result").value += "."
        }
}

function clearAll() {
    document.getElementById("result").value = ""
}

function equals() {
    var expression = document.getElementById("result").value
    var result = eval(expression) 
    document.getElementById("result").value = result
}


function multi() {
    var expression = document.getElementById("result").value
    
    document.getElementById("result").value += "*"
}