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
    clearArrays();
    // Labelerstellung für das Chart

    timeintervall = [];
    for(let i = 0; i < 7; i++) {
        let date = new Date();
        date.setDate(date.getDate() - i);
        timeintervall[i] = date.getDate() + "/" + (date.getMonth()+1)
    }
    timeintervall.reverse();
    sortCoffees();
}

function calcDate(difference) {
    let date = new Date();
    date.setDate(date.getDate() - difference);
    return date;
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

function calcCoffeineAmount(array_of_day) {
    let amountofCoffeine = 0;
    if (array_of_day === []) {
        return 0;
    } else {
        amountofCoffeine = 0;
        for (let i = 0; i < array_of_day.length; i++) {
            amountofCoffeine = amountofCoffeine + parseFloat(array_of_day[i].Kaffee.Koffeingehalt);
        }
        return amountofCoffeine;
    }

}

function calcSugarAmount(array_of_day) {
    let amountofSugar = 0;
    if (array_of_day === []) {
        return 0;
    } else {
        amountofSugar = 0;
        for (let i = 0; i < array_of_day.length; i++) {
            amountofSugar = parseInt(amountofSugar) + parseInt(array_of_day[i].Kaffee.Zucker);
        }
        return amountofSugar;
    }
}

function calcCost(array_of_day) {
    let cost = 0;
    if (array_of_day === []) {
        return 0;
    } else {
        cost = 0;
        for (let i = 0; i < array_of_day.length; i++) {
            cost = parseFloat(cost) + parseFloat(array_of_day[i].Kaffee.Preis);
        }
        return cost;

    }
}

// Diese Funktion erstellt ein Diagramm aus den Parametern
function createChart(which_chart, amountofCoffee, labeling, color, additionaldataset) {
    let ctx = document.getElementById(which_chart).getContext('2d');
    chart = new Chart(ctx, {
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

            ]
        },
        options: {
            scales: {
                xAxes: [{stacked: true}],
                yAxes: [{stacked: true}]
            }
        }
    });
}

function getDate_in_the_past(tag) {
    let d = new Date(new Date().setDate(new Date().getDate() - tag));
    return d;
}

function selectChartType(charttype) {
    if (charttype === "Anzahl") {
        createAmountChart();
    } else if (charttype === "Koffein") {
        createCoffeineChart();
    } else if (charttype === "Zucker") {
        createSugarChart();
    } else if (charttype === "Kosten") {
        createCostChart();
    }
}

// Mit den folgenden Funktionen werden die Diagramme erstellt, zur Berechnung wird jeweils die entsprechende calc-Funktion verwendet
function createAmountChart() {
    let color = 'rgb(0, 4, 255)'
    let amountofCoffee = [coffee1stday.length, coffee2ndday.length,
        coffee3rdday.length, coffee4thday.length, coffee5thday.length,
        coffee6thday.length, coffee7thday.length];
    hideCanvas();
    anzahl.style.display = "block";
    resetButton();
    colorizeButton("anzahl", color);
    createChart('Anzahl', amountofCoffee, "Anzahl der Kaffees", color, {});
}

function createCoffeineChart() {

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
    resetButton();
    colorizeButton("koffein", color);
    createChart('Koffein', coffein_complete, "Koffeinkonsum pro Tag", color, dataset2);
}

function createSugarChart() {
    let dataset2 = {
        label: "Empfohlene Zuckermenge pro Tag",
        backgroundColor: 'rgb(0,0,0)',
        bordercolor: 'rgb(0,0,0)',
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
    resetButton();
    colorizeButton("zucker", color);
    createChart('Zucker', amountofSugar, "Zuckerkonsum pro Tag", color, dataset2);

}

function createCostChart() {
    let totalcost = [calcCost(coffee1stday), calcCost(coffee2ndday), calcCost(coffee3rdday), calcCost(coffee4thday), calcCost(coffee5thday), calcCost(coffee6thday), calcCost(coffee7thday)];
    let color = 'rgb(255,215,0)';
    hideCanvas();
    kosten.style.display = "block";
    resetButton();
    colorizeButton("kosten", color);
    createChart('Kosten', totalcost, "Kosten pro Tag", color, []);

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

function colorizeButton(button, color) {
    let b = document.getElementById(button);
    b.style.background = color;
}

function resetButton() {
    let a = document.getElementById("koffein");
    let b = document.getElementById("zucker");
    let c = document.getElementById("anzahl");
    let d = document.getElementById("kosten");
    a.style.background = '#ffffff';
    b.style.background = '#ffffff';
    c.style.background = '#ffffff';
    d.style.background = '#ffffff';
}

