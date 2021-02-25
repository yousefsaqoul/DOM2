
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


