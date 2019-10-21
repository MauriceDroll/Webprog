const startseite = '' +
    '<div class="buttoncontainer">' +
        '<button class="btn btn-primary" onclick="cappuccino()">Cappucino</button>' +
        '<button class="btn btn-primary">Latte Macchiato</button>' +
        '<button class="btn btn-primary">Milchkaffee 50:50</button>' +
        '<button class="btn btn-primary">Schwarz</button>' +
    '</div>' +
    '<div class="inputcontainer">' +
        '<div class="row">' +
            '<label for="Behältnis" class="col-md-2">Behältnis</label>' +
            '<input type="text" id="Behältnis" class="col-md-10">' +
        '</div>' +
        '<div class="row">' +
            '<label for="Kalorien" class="col-md-2">Kalorien</label>' +
            '<input type="number" id="Kalorien" class="col-md-10">' +
        '</div>' +
        '<div class="row">' +
            '<label for="Koffeingehalt" class="col-md-2">Koffeingehalt</label>' +
            '<input type="number" id="Koffeingehalt" class="col-md-10">' +
        '</div>' +
        '<div class="row">' +
            '<label for="Menge" class="col-md-2">Menge</label>' +
            '<input type="number" id="Menge" class="col-md-10">' +
        '</div>' +
        '<div class="row">' +
            '<label for="Starttemperatur" class="col-md-2">Starttemperatur</label>' +
            '<input type="number" id="Starttemperatur" class="col-md-10">' +
        '</div>' +
        '<div class="row">' +
            '<label for="Zucker" class="col-md-2">Zucker</label>' +
            '<input type="number" id="Zucker" class="col-md-10">' +
        '</div>' +
    '</div>' +
    '<style onload="getCoffees()"></style>';
