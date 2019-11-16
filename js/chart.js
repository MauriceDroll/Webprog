// Definition von Arrays, die Kaffees pro Tag enthalten
coffee7thday = [];
coffee6thday = [];
coffee5thday = [];
coffee4thday = [];
coffee3rdday = [];
coffee2ndday = [];
coffee1stday = [];

// Initiale Definiton des Charts
chart = 0;

function initalDataLoad() {
    hideCanvas();
    clearArrays();
    // Labelerstellung für das Chart

    timeintervall = [];
    for (let i = 0; i < 7; i++) {
        let date = new Date();
        date.setDate(date.getDate() - i);
        timeintervall[i] = date.getDate() + "/" + (date.getMonth() + 1)
    }
    timeintervall.reverse();
    sortCoffees();
}

function sortCoffees() {
    let today = new Date();
    return db.collection('coffee').get().then(response => {
        let coffee = response.docs.map(doc => doc.data());
        //Dates von Unix in Date Object
        for (let i = 0; i < coffee.length; i++) {
            coffee[i].Datum = new Date(coffee[i].Datum.seconds * 1000);
        }
        //Kaffees sortiert in die Arrays füllen
        for (let i = 0; i < coffee.length; i++) {
            if (coffee[i].Datum.getDate() === today.getDate() - 6) {
                coffee1stday.push(coffee[i])
            }
            if (coffee[i].Datum.getDate() === today.getDate() - 5) {
                coffee2ndday.push(coffee[i])
            }
            if (coffee[i].Datum.getDate() === today.getDate() - 4) {
                coffee3rdday.push(coffee[i])
            }
            if (coffee[i].Datum.getDate() === today.getDate() - 3) {
                coffee4thday.push(coffee[i])
            }
            if (coffee[i].Datum.getDate() === today.getDate() - 2) {
                coffee5thday.push(coffee[i]);
            }
            if (coffee[i].Datum.getDate() === today.getDate() - 1) {
                coffee6thday.push(coffee[i])
            }
            if (coffee[i].Datum.getDate() === today.getDate()) {
                coffee7thday.push(coffee[i])
            }

        }

    });
}

function calcCoffeineAmount(day) {
    let amountofCoffeine = 0;
    if (day === []) {
        return 0;
    } else {
        amountofCoffeine = 0;
        for (let i = 0; i < day.length; i++) {
            amountofCoffeine = amountofCoffeine + parseFloat(day[i].Kaffee.Koffeingehalt);
        }
        return amountofCoffeine;
    }

}

function calcSugarAmount(day) {
    let amountofSugar = 0;
    if (day === []) {
        return 0;
    } else {
        amountofSugar = 0;
        for (let i = 0; i < day.length; i++) {
            amountofSugar = parseInt(amountofSugar) + parseInt(day[i].Kaffee.Zucker);
        }
        return amountofSugar;
    }
}

function calcCost(day) {
    let cost = 0;
    if (day === []) {
        return 0;
    } else {
        cost = 0;
        for (let i = 0; i < day.length; i++) {
            cost = parseFloat(cost) + parseFloat(day[i].Kaffee.Preis);
        }
        return cost;

    }
}

// Diese Funktion erstellt ein Diagramm aus den Parametern
function createChart(chart, amountofCoffee, labeling, color, additionaldataset, userpreference) {
    let ctx = document.getElementById(chart).getContext('2d');
    if (Object.entries(additionaldataset).length === 0 && additionaldataset.constructor === Object && Object.entries(userpreference).length === 0 && userpreference.constructor === Object) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: timeintervall,
                datasets: [{
                    label: labeling,
                    backgroundColor: color,
                    data: amountofCoffee,
                    fill: false,
                    display: 'auto',
                }]
            },
            options: {
                scales: {
                    xAxes: [{stacked: true}],
                    yAxes: [{stacked: true}]
                }
            }
        });
    } else if (Object.entries(additionaldataset).length === 0 && additionaldataset.constructor === Object && Object.entries(userpreference).length !== 0 && userpreference.constructor === Object) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: timeintervall,
                datasets: [{
                    label: labeling,
                    backgroundColor: color,
                    data: amountofCoffee,
                    fill: false,
                    display: 'auto',
                },

                    userpreference

                ]
            },
            options: {
                scales: {
                    xAxes: [{stacked: true}],
                    yAxes: [{stacked: true}]
                }
            }
        });
    } else if (Object.entries(additionaldataset).length !== 0 && additionaldataset.constructor === Object && Object.entries(userpreference).length === 0 && userpreference.constructor === Object) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: timeintervall,
                datasets: [{
                    label: labeling,
                    backgroundColor: color,
                    data: amountofCoffee,
                    fill: false,
                    display: 'auto',
                },

                    additionaldataset

                ]
            },
            options: {
                scales: {
                    xAxes: [{stacked: true}],
                    yAxes: [{stacked: true}]
                }
            }
        });
    } else {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: timeintervall,
                datasets: [{
                    label: labeling,
                    backgroundColor: color,
                    data: amountofCoffee,
                    fill: false,
                    display: 'auto',
                },

                    additionaldataset,
                    userpreference

                ]
            },
            options: {
                scales: {
                    xAxes: [{stacked: false}],
                    yAxes: [{stacked: false}]
                }
            }
        });
    }

}

function createUserPreference() {
    let uservalue = parseInt(document.getElementById("userdefined").value);
    if (isNaN(uservalue)) {
        return {}
    }
    console.log(uservalue);
    return {
        type: 'line',
        label: "Eigener Grenzwert",
        backgroundColor: 'rgb(0,255,0)',
        borderColor: 'rgb(0,255,0)',
        data: Array.apply(null, new Array(9)).map(Number.prototype.valueOf, uservalue),
        fill: false,
        display: 'auto',
        radius: 0,
    }
}

// Mit den folgenden Funktionen werden die Diagramme erstellt, zur Berechnung wird jeweils die entsprechende calc-Funktion verwendet
function createAmountChart() {
    document.getElementById("option-1").classList.remove("active");
    document.getElementById("option-2").classList.remove("active");
    document.getElementById("option-3").classList.remove("active");
    document.getElementById("option-4").classList.add("active");
    let userpreference = createUserPreference();
    let color = 'rgb(0, 4, 255)';
    let amountofCoffee = [coffee1stday.length, coffee2ndday.length,
        coffee3rdday.length, coffee4thday.length, coffee5thday.length,
        coffee6thday.length, coffee7thday.length];
    hideCanvas();
    anzahl.style.display = "block";
    createChart('Anzahl', amountofCoffee, "Anzahl der Kaffees", color, {}, userpreference);
}

function createCoffeineChart() {
    document.getElementById("option-2").classList.remove("active");
    document.getElementById("option-3").classList.remove("active");
    document.getElementById("option-4").classList.remove("active");
    document.getElementById("option-1").classList.add("active");
    let userpreference = createUserPreference();
    let dataset2 = {
        type: 'line',
        label: "Empfohlene Menge an Koffein pro Tag",
        backgroundColor: 'rgb(0,0,0)',
        borderColor: 'rgb(0,0,0)',
        data: Array.apply(null, new Array(9)).map(Number.prototype.valueOf, 400),
        fill: false,
        display: 'auto',
        radius: 0,
    };
    let coffein_complete = [calcCoffeineAmount(coffee1stday), calcCoffeineAmount(coffee2ndday), calcCoffeineAmount(coffee3rdday), calcCoffeineAmount(coffee4thday), calcCoffeineAmount(coffee5thday), calcCoffeineAmount(coffee6thday), calcCoffeineAmount(coffee7thday)];
    let color = 'rgb(139,69,19)';
    hideCanvas();
    koffein.style.display = "block";
    createChart('Koffein', coffein_complete, "Koffeinkonsum pro Tag", color, dataset2, userpreference);
}

function createSugarChart() {
    document.getElementById("option-1").classList.remove("active");
    document.getElementById("option-3").classList.remove("active");
    document.getElementById("option-4").classList.remove("active");
    document.getElementById("option-2").classList.add("active");
    let userpreference = createUserPreference();
    let dataset2 = {
        label: "Empfohlene Zuckermenge pro Tag",
        backgroundColor: 'rgb(0,0,0)',
        borderColor: 'rgb(0,0,0)',
        data: Array.apply(null, new Array(9)).map(Number.prototype.valueOf, 50),
        fill: false,
        display: 'auto',
        type: 'line',
        radius: 0,
    };
    let color = 'rgb(255,0,0)';
    let amountofSugar = [calcSugarAmount(coffee1stday), calcSugarAmount(coffee2ndday), calcSugarAmount(coffee3rdday), calcSugarAmount(coffee4thday), calcSugarAmount(coffee5thday), calcSugarAmount(coffee6thday), calcSugarAmount(coffee7thday)];
    hideCanvas();
    zucker.style.display = "block";
    createChart('Zucker', amountofSugar, "Zuckerkonsum pro Tag", color, dataset2, userpreference);

}

function createCostChart() {
    document.getElementById("option-1").classList.remove("active");
    document.getElementById("option-2").classList.remove("active");
    document.getElementById("option-4").classList.remove("active");
    document.getElementById("option-3").classList.add("active");
    let userpreference = createUserPreference();
    let totalcost = [calcCost(coffee1stday), calcCost(coffee2ndday), calcCost(coffee3rdday), calcCost(coffee4thday), calcCost(coffee5thday), calcCost(coffee6thday), calcCost(coffee7thday)];
    let color = 'rgb(255,215,0)';
    hideCanvas();
    kosten.style.display = "block";
    createChart('Kosten', totalcost, "Kosten pro Tag", color, {}, userpreference);

}

function clearArrays() {
    coffee1stday = [];
    coffee2ndday = [];
    coffee3rdday = [];
    coffee4thday = [];
    coffee5thday = [];
    coffee6thday = [];
    coffee7thday = [];
}

function hideCanvas() {
    koffein = document.getElementById("Koffein");
    zucker = document.getElementById("Zucker");
    kosten = document.getElementById("Kosten");
    anzahl = document.getElementById("Anzahl");
    koffein.style.display = "none";
    zucker.style.display = "none";
    kosten.style.display = "none";
    anzahl.style.display = "none";
}

