
function changeBgColor() {

    let farbe = document.getElementById('farbeAuswahlen')
    let myCelect = farbe.value
    let newColor = myCelect.split("  ").toString()
    let newco = newColor.replace(/\s/g, "")
    console.log(newco)
    document.getElementById('myBody').style.background = newco


}

