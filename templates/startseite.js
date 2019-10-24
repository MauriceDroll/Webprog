const startseite = '' +
    '<div class="buttoncontainer">' +
        '<button class="btn btn-primary" onclick="cappuccino()">Cappucino</button>' +
        '<button class="btn btn-primary" onclick="latteMacchiato()">Latte Macchiato</button>' +
        '<button class="btn btn-primary" onclick="milchkaffee5050()">Milchkaffee 50:50</button>' +
        '<button class="btn btn-primary" onclick="schwarz()">Schwarz</button>' +
    '</div>' +
    '<div id="hidden" class="row" hidden>' +
        '<div class="behältercontainer col-md-3">' +
            '<a onclick="becher()"><img src="../assets/coffee-paper-cup-500x500.png" id="becherimg"></a>' +
            '<a onclick="tasse()"><img src="../assets/White-Mug.png" id="tasseimg"></a>' +
            '<a onclick="thermo()"><img src="../assets/302228-silver.png" id="thermoimg"></a>' +
            '<a onclick="glass()"><img src="../assets/JDG32.png" id="glassimg"></a>' +
        '</div>' +
        '<div class="inputcontainer col-md-9 invisible" id="hidden2">' +
            '<div class="row">' +
                '<label for="Sorte" class="col-md-3">Sorte</label>' +
                '<input type="text" id="Sorte" class="col-md-9" disabled>' +
            '</div>' +
            '<div class="row">' +
                '<label for="Behältnis" class="col-md-3">Behältnis</label>' +
                '<input type="text" id="Behältnis" class="col-md-9" disabled>' +
            '</div>' +
            '<div class="row">' +
                '<label for="Kalorien" class="col-md-3">Kalorien</label>' +
                '<input type="number" id="Kalorien" class="col-md-9">' +
            '</div>' +
            '<div class="row">' +
                '<label for="Koffeingehalt" class="col-md-3">Koffeingehalt</label>' +
                '<input type="number" id="Koffeingehalt" class="col-md-9">' +
            '</div>' +
            '<div class="row">' +
                '<label for="Menge" class="col-md-3">Menge</label>' +
                '<input type="number" id="Menge" class="col-md-9">' +
            '</div>' +
            '<div class="row">' +
                '<label for="Starttemperatur" class="col-md-3">Starttemperatur</label>' +
                '<input type="number" id="Starttemperatur" class="col-md-9">' +
            '</div>' +
            '<div class="row">' +
                '<label for="Zucker" class="col-md-3">Zucker</label>' +
                '<input type="number" id="Zucker" class="col-md-9">' +
            '</div>' +
            '<div class="row">' +
                '<div class="col-md-6">' +
                    '<div class="row würfelcontainer">' +
                        '<label for="Zuckerwürfel" class="col-md-6">Zuckerwürfel</label>' +
                        '<input id="Zuckerwürfel" class="col-md-4" disabled>' +
                        '<a onclick="addWuerfel()" class="counterbutton col-md-1"><img src="../assets/add_circle-24px.svg"></a>' +
                        '<a onclick="removeWuerfel()" class="counterbutton col-md-1"><img src="../assets/remove_circle-24px.svg"></a>' +
                    '</div>' +
                '</div>' +
                '<div class="col-md-6">' +
                    '<div class="row sahnecontainer">' +
                        '<label for="Kaffeesahne" id="sahnelabel" class="col-md-6">Kaffeesahne</label>' +
                        '<input id="Kaffeesahne" class="col-md-4" disabled>' +
                        '<a onclick="addSahne()" class="counterbutton col-md-1"><img src="../assets/add_circle-24px.svg"></a>' +
                        '<a onclick="removeSahne()" class="counterbutton col-md-1"><img src="../assets/remove_circle-24px.svg"></a>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="row">' +
                '<button class="btn btn-success savecoffeebutton" onclick="saveCoffee()">Speichern</button>' +
            '</div>' +
        '</div>' +
    '</div>' +
    '<style onload="getCoffees()"></style>';
