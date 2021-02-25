
changeBgColor = () => {
    let farbe = document.getElementById('farbeAuswahlen')
    let myCelect = farbe.value
    let newColor = myCelect.split("  ").toString()
    let newColor2 = newColor.replace(/\s/g, "")
    document.getElementById('myBody').style.background = newColor2
}
// --------------------_______________________------------------------


small = () => {
    document.getElementById('element').classList.add('small1')
}

middle = () => {
    document.getElementById('element').classList.add('middle')
}
big = () => {
    document.getElementById('element').classList.add('big1')
}


// --------------------_______________________------------------------
let zahl = document.getElementById('clickme')
overButton = () => {
    for (let i = 0; i < 10; i++) {

    }

}


// --------------------_______________________------------------------


let myFunction = document.getElementById('my-select')
let result = document.getElementById('option-selected')
myFunction.addEventListener('change', function (event) {
    result.textContent = "sie haben" + ' ' + event.target.value + ' ' + "ausgewält"
})