function becher() {
    let behaeltnis = document.getElementById('Behältnis');
    behaeltnis.value = "Becher";
    document.getElementById("hidden3").classList.remove("invisible");
}

function tasse() {
    let behaeltnis = document.getElementById('Behältnis');
    behaeltnis.value = "Tasse";
    document.getElementById("hidden3").classList.remove("invisible");
}

function glas() {
    let behaeltnis = document.getElementById('Behältnis');
    behaeltnis.value = "Glas";
    document.getElementById("hidden3").classList.remove("invisible");
}

function smallSize() {
    let menge = document.getElementById('Menge');
    menge.value = "250";
    document.getElementById("hidden2").classList.remove("invisible");
    document.getElementById("option2").classList.remove("active");
    document.getElementById("option1").classList.add("active");
}

function largeSize() {
    let menge = document.getElementById('Menge');
    menge.value = "500";
    document.getElementById("hidden2").classList.remove("invisible");
    document.getElementById("option1").classList.remove("active");
    document.getElementById("option2").classList.add("active")
}

function cappuccino() {
    document.getElementById("hidden").removeAttribute("hidden");
    getCoffees().then(res => {
        let sorte = document.getElementById("Sorte");
        sorte.value = "Cappuccino";
        let behaeltnis = document.getElementById("Behältnis");
        behaeltnis.value = res[0].Behältnis;
        let kalorien = document.getElementById("Kalorien");
        kalorien.value = res[0].Kalorien;
        let koffein = document.getElementById("Koffeingehalt");
        koffein.value = res[0].Koffeingehalt;
        let menge = document.getElementById("Menge");
        menge.value = res[0].Menge;
        let starttemperatur = document.getElementById("Starttemperatur");
        starttemperatur.value = res[0].Starttemperatur;
        let zucker = document.getElementById("Zucker");
        zucker.value = res[0].Zucker;
        let zuckerwuerfel = document.getElementById("Zuckerwürfel");
        zuckerwuerfel.value = res[0].Zuckerwürfel;
        let Kaffeesahne = document.getElementById("Kaffeesahne");
        Kaffeesahne.value = res[0].Kaffeesahne;
    })
}

function latteMacchiato() {
    document.getElementById("hidden").removeAttribute("hidden");
    getCoffees().then(res => {
        let sorte = document.getElementById("Sorte");
        sorte.value = "Latte Macchiato";
        let behaeltnis = document.getElementById("Behältnis");
        behaeltnis.value = res[1].Behältnis;
        let kalorien = document.getElementById("Kalorien");
        kalorien.value = res[1].Kalorien;
        let koffein = document.getElementById("Koffeingehalt");
        koffein.value = res[1].Koffeingehalt;
        let menge = document.getElementById("Menge");
        menge.value = res[1].Menge;
        let starttemperatur = document.getElementById("Starttemperatur");
        starttemperatur.value = res[1].Starttemperatur;
        let zucker = document.getElementById("Zucker");
        zucker.value = res[1].Zucker;
        let zuckerwuerfel = document.getElementById("Zuckerwürfel");
        zuckerwuerfel.value = res[1].Zuckerwürfel;
        let Kaffeesahne = document.getElementById("Kaffeesahne");
        Kaffeesahne.value = res[1].Kaffeesahne;
    })
}

function milchkaffee5050() {
    document.getElementById("hidden").removeAttribute("hidden");
    getCoffees().then(res => {
        let sorte = document.getElementById("Sorte");
        sorte.value = "Milchkaffee 50:50";
        let behaeltnis = document.getElementById("Behältnis");
        behaeltnis.value = res[2].Behältnis;
        let kalorien = document.getElementById("Kalorien");
        kalorien.value = res[2].Kalorien;
        let koffein = document.getElementById("Koffeingehalt");
        koffein.value = res[2].Koffeingehalt;
        let menge = document.getElementById("Menge");
        menge.value = res[2].Menge;
        let starttemperatur = document.getElementById("Starttemperatur");
        starttemperatur.value = res[2].Starttemperatur;
        let zucker = document.getElementById("Zucker");
        zucker.value = res[2].Zucker;
        let zuckerwuerfel = document.getElementById("Zuckerwürfel");
        zuckerwuerfel.value = res[2].Zuckerwürfel;
        let Kaffeesahne = document.getElementById("Kaffeesahne");
        Kaffeesahne.value = res[2].Kaffeesahne;
    })
}

function schwarz() {
    document.getElementById("hidden").removeAttribute("hidden");
    getCoffees().then(res => {
        let sorte = document.getElementById("Sorte");
        sorte.value = "Kaffee Schwarz";
        let behaeltnis = document.getElementById("Behältnis");
        behaeltnis.value = res[3].Behältnis;
        let kalorien = document.getElementById("Kalorien");
        kalorien.value = res[3].Kalorien;
        let koffein = document.getElementById("Koffeingehalt");
        koffein.value = res[3].Koffeingehalt;
        let menge = document.getElementById("Menge");
        menge.value = res[3].Menge;
        let starttemperatur = document.getElementById("Starttemperatur");
        starttemperatur.value = res[3].Starttemperatur;
        let zucker = document.getElementById("Zucker");
        zucker.value = res[3].Zucker;
        let zuckerwuerfel = document.getElementById("Zuckerwürfel");
        zuckerwuerfel.value = res[3].Zuckerwürfel;
        let Kaffeesahne = document.getElementById("Kaffeesahne");
        Kaffeesahne.value = res[3].Kaffeesahne;
    })
}

function addWuerfel() {
    let wuerfel = parseInt(document.getElementById('Zuckerwürfel').value);
    wuerfel = wuerfel + 1;
    document.getElementById('Zuckerwürfel').value = wuerfel;
    let zucker = parseInt(document.getElementById('Zucker').value);
    document.getElementById('Zucker').value = zucker + 3;
    let kalorien = parseInt(document.getElementById('Kalorien').value);
    document.getElementById('Kalorien').value = kalorien + 12
}

function removeWuerfel() {
    let wuerfel = parseInt(document.getElementById('Zuckerwürfel').value);
    let zucker = parseInt(document.getElementById('Zucker').value);
    let kalorien = parseInt(document.getElementById('Kalorien').value);
    if (wuerfel !== 0) {
        document.getElementById('Zucker').value = zucker - 3;
        document.getElementById('Kalorien').value = kalorien - 12
    }
    if (wuerfel !== 0) {
        wuerfel = wuerfel - 1;
    }
    document.getElementById('Zuckerwürfel').value = wuerfel;
}

function addSahne() {
    let sahne = parseInt(document.getElementById('Kaffeesahne').value);
    sahne = sahne + 1;
    document.getElementById('Kaffeesahne').value = sahne;
    let zucker = parseInt(document.getElementById('Zucker').value);
    document.getElementById('Zucker').value = zucker + 4;
    let kalorien = parseInt(document.getElementById('Kalorien').value);
    document.getElementById('Kalorien').value = kalorien + 12
}

function removeSahne() {
    let sahne = parseInt(document.getElementById('Kaffeesahne').value);
    let zucker = parseInt(document.getElementById('Zucker').value);
    let kalorien = parseInt(document.getElementById('Kalorien').value);
    if (sahne !== 0) {
        document.getElementById('Zucker').value = zucker - 4;
        document.getElementById('Kalorien').value = kalorien - 12
    }
    if (sahne !== 0) {
        sahne = sahne - 1;
    }
    document.getElementById('Kaffeesahne').value = sahne;
}

function validate() {
    let valid = true;
    let starttemp = document.getElementById("Starttemperatur").value;
    if (starttemp < 50 || starttemp > 100 || starttemp === "") {
        document.getElementById("Starttemperatur").classList.add("inputfalse");
        alert("Starttemperatur muss zwischen 50°C und 100°C liegen!");
        valid = false;
    } else {
        document.getElementById("Starttemperatur").classList.remove("inputfalse")
    }

    let ambienttemp = document.getElementById("Umgebungstemperatur").value;
    if (ambienttemp < 0 || ambienttemp > 50 || ambienttemp === "") {
        document.getElementById("Umgebungstemperatur").classList.add("inputfalse");
        alert("Umgebungstemperatur muss zwischen 0°C und 50°C liegen!");
        valid = false;
    } else {
        document.getElementById("Umgebungstemperatur").classList.remove("inputfalse")
    }

    let preis = document.getElementById("Preis").value;
    if (preis <= 0 || preis === "") {
        document.getElementById("Preis").classList.add("inputfalse");
        valid = false;
    } else {
        document.getElementById("Preis").classList.remove("inputfalse")
    }

    if (valid) {
        saveCoffee()
    }
}

function saveCoffee() {
    let coffee = {
        Sorte: document.getElementById("Sorte").value,
        Behältnis: document.getElementById("Behältnis").value,
        Kalorien: document.getElementById("Kalorien").value,
        Koffeingehalt: document.getElementById("Koffeingehalt").value,
        Menge: document.getElementById("Menge").value,
        Preis: document.getElementById("Preis").value,
        Starttemperatur: document.getElementById("Starttemperatur").value,
        Umgebungstemperatur: document.getElementById("Umgebungstemperatur").value,
        Zucker: document.getElementById("Zucker").value,
        Zuckerwürfel: document.getElementById("Zuckerwürfel").value,
        Kaffeesahne: document.getElementById("Kaffeesahne").value,
    };
    db.collection("coffee").add({
        Datum: new Date(),
        Kaffee: coffee,
        User: "Maurice"
    }).then(document => {
        if (coffee.Menge === "500") {
            let wuerfel = parseInt(coffee.Zuckerwürfel);
            let sahne = parseInt(coffee.Kaffeesahne);
            coffee.Zucker = coffee.Zucker - wuerfel*3;
            coffee.Zucker = coffee.Zucker - sahne*4;
            coffee.Kalorien = coffee.Kalorien - wuerfel*12;
            coffee.Kalorien = coffee.Kalorien - sahne*12;
            coffee.Preis = 0;
            console.log(coffee);
            db.collection("coffee").add ({
                Datum: new Date(),
                Kaffee: coffee,
                User: "Maurice"
            });
        }
    });
    let time = calculate(coffee.Behältnis, coffee.Menge, coffee.Starttemperatur, coffee.Umgebungstemperatur);
    onNavigate('/timer')
}

function calculate(behaelter, behaeltergroesse, startTemp, ambientTemp) {
    let thermalConduct;
    let thickness;
    let surfaceArea;
    if (behaelter === "Becher") {
        thermalConduct = 0.05;
        thickness = 2;
        if (behaeltergroesse === "250") {
            let grundflaeche = 50.27;
            let schnittflaeche = 24.63;
            let mantelflaeche = 198.67;
            surfaceArea = grundflaeche + schnittflaeche + mantelflaeche;
        }
        if (behaeltergroesse === "500") {
            let grundflaeche = 62.21;
            let schnittflaeche = 26.88;
            let mantelflaeche = 301.2;
            surfaceArea = grundflaeche + schnittflaeche + mantelflaeche;
        }
    }
    if (behaelter === "Glas") {
        thermalConduct = 1;
        thickness = 2.4;
        if (behaeltergroesse === "250") {
            surfaceArea = 175.18;
        }
        if (behaeltergroesse === "500") {
            surfaceArea = 297.54;
        }
    }
    if (behaelter === "Tasse") {
        thermalConduct = 1.5;
        thickness = 6;
        if (behaeltergroesse === "250") {
            surfaceArea = 175.18;
        }
        if (behaeltergroesse === "500") {
            surfaceArea = 297.54;
        }
    }
    let heatTransfered = (thermalConduct * surfaceArea + (parseInt(startTemp) - parseInt(ambientTemp))) / thickness;
    let temperatureDiffrenceNeeded = parseInt(startTemp) - parseInt(ambientTemp);
    let heatRequired;
    if (behaeltergroesse === "250") {
        heatRequired = 250 * 4186 * temperatureDiffrenceNeeded;
    }
    if (behaeltergroesse === "500") {
        heatRequired = 500 * 4186 * temperatureDiffrenceNeeded;
    }
    return coffeeTime = heatRequired / heatTransfered;
}
