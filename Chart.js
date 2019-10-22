function loadChart() {

    let ctx = document.getElementById('myChart').getContext('2d');
    let chart = new Chart(ctx, {

        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Koffein in mg (empfohlenene Menge)',
                backgroundColor: 'blue',
                borderColor: 'black',
                data: Array.apply(null, new Array(12)).map(Number.prototype.valueOf, 400),
                fill: false,
                type: 'line',
            },
            {
                label: 'zug. Koffein durch Latte Macchiato',
                backgroundColor: 'rgb(0,255,0)',
                borderColor: 'rgb(0,255,0)',
                data: [100, 130, 200, 300, 400, 500, 100],
                fill: false,

            },
            {
                label: 'Koffeinmenge durch Kaffee',
                data: [50,10,123,54,60]
            }
            ]
        },


        // Defintion der gestapelten Diagramme
        options: {
            scales:{
                xAxes: [{ stacked: true }],
                yAxes: [{ stacked: true }]
              }
        }
        }
    );
    let sec_Chart = document.getElementById('secondChart').getContext('2d');
    let sec_chart = new Chart(secondChart, {
        // Definition eines Säulendiagramms
        type: 'bar',
        // The data for our dataset
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Zucker',
                backgroundColor: 'rgb(0,0,255)',
                borderColor: 'rgb(0,0,255)',
                data: [0, 100, 200, 300, 450, 100, 350],
                fill: false,
                display: 'auto',
            }
            ]
        },


        // Configuration options go here
        options: {}
    })

};


function getCoffee(){
    let koffein= 
    alert()

}
