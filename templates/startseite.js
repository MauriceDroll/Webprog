const startseite = '' +
    '<div class="buttoncontainer">' +
        '<button class="btn btn-primary" onclick="cappuccino()">Cappucino</button>' +
        '<button class="btn btn-primary" onclick="latteMacchiato()">Latte Macchiato</button>' +
        '<button class="btn btn-primary" onclick="milchkaffee5050()">Milchkaffee 50:50</button>' +
        '<button class="btn btn-primary" onclick="schwarz()">Schwarz</button>' +
    '</div>' +
    '<div id="hidden" class="row" hidden>' +
        '<div class="behältercontainer col-lg-12">' +
            '<a onclick="becher()"><img src="../assets/coffee-paper-cup-500x500.png" id="becherimg"></a>' +
            '<a onclick="tasse()"><img src="../assets/White-Mug.png" id="tasseimg"></a>' +
            '<a onclick="glas()"><img src="../assets/JDG32.png" id="glasimg"></a>' +
        '</div>' +
        '<div class="btn-group btn-group-toggle mengecontainer col-lg-12 invisible" id="hidden3" data-toggle="buttons">' +
            '<label class="btn btn-primary mengebutton" id="option1">' +
                '<input type="radio" name="options" autocomplete="off" onclick="smallSize()"> 250ml' +
            '</label>' +
            '<label class="btn btn-primary mengebutton" id="option2">' +
                '<input type="radio" name="options" autocomplete="off" onclick="largeSize()"> 500ml' +
            '</label>' +
        '</div>' +
        '<div class="inputcontainer col-lg-12 invisible" id="hidden2">' +
            '<div class="row">' +
                '<label for="Sorte" class="col-lg-12 col-xl-4">Sorte</label>' +
                '<input type="text" id="Sorte" class="col-xl-8" disabled>' +
            '</div>' +
            '<div class="row">' +
                '<label for="Behältnis" class="col-lg-12 col-xl-4">Behältnis</label>' +
                '<input type="text" id="Behältnis" class="col-xl-8" disabled>' +
            '</div>' +
            '<div class="row">' +
                '<label for="Kalorien" class="col-lg-12 col-xl-4">Kalorien</label>' +
                '<input type="number" id="Kalorien" class="col-xl-8">' +
            '</div>' +
            '<div class="row">' +
                '<label for="Koffeingehalt" class="col-lg-12 col-xl-4">Koffeingehalt</label>' +
                '<input type="number" id="Koffeingehalt" class="col-xl-8">' +
            '</div>' +
            '<div class="row">' +
                '<label for="Menge" class="col-lg-12 col-xl-4">Menge</label>' +
                '<input type="text" id="Menge" class="col-xl-8" disabled>' +
            '</div>' +
            '<div class="row">' +
                '<label for="Preis" class="col-lg-12 col-xl-4">Preis</label>' +
                '<input type="number" id="Preis" class="col-xl-8">' +
            '</div>' +
            '<div class="row">' +
                '<label for="Starttemperatur" class="col-lg-12 col-xl-4">Starttemperatur</label>' +
                '<input type="number" id="Starttemperatur" class="col-xl-8">' +
            '</div>' +
            '<div class="row">' +
                '<label for="Umgebungstemperatur" class="col-lg-12 col-xl-4">Umgebungstemperatur</label>' +
                '<input type="number" id="Umgebungstemperatur" class="col-xl-8">' +
            '</div>' +
            '<div class="row">' +
                '<label for="Zucker" class="col-lg-12 col-xl-4">Zucker</label>' +
                '<input type="number" id="Zucker" class="col-xl-8">' +
            '</div>' +
            '<div class="row würfelcontainer">' +
                '<label for="Zuckerwürfel" class="col-lg-12 col-xl-4">Zuckerwürfel</label>' +
                '<input id="Zuckerwürfel" class="col-sm-6 col-xl-2" disabled>' +
                '<a onclick="addWuerfel()" class="counterbutton col-sm-3 col-xl-3"><img src="../assets/add_circle-24px.svg"></a>' +
                '<a onclick="removeWuerfel()" class="counterbutton col-sm-3 col-xl-3"><img src="../assets/remove_circle-24px.svg"></a>' +
            '</div>' +
            '<div class="row sahnecontainer">' +
                '<label for="Kaffeesahne" id="sahnelabel" class="col-lg-12 col-xl-4">Kaffeesahne</label>' +
                '<input id="Kaffeesahne" class="col-sm-6 col-xl-2" disabled>' +
                '<a onclick="addSahne()" class="counterbutton col-sm-3 col-xl-3"><img src="../assets/add_circle-24px.svg"></a>' +
                '<a onclick="removeSahne()" class="counterbutton col-sm-3 col-xl-3"><img src="../assets/remove_circle-24px.svg"></a>' +
            '</div>' +
            '<div class="row">' +
                '<button class="btn btn-success savecoffeebutton" onclick="saveCoffee()">Speichern</button>' +
            '</div>' +
        '</div>' +
    '</div>' +
    '<style onload="getCoffees()"></style>';
