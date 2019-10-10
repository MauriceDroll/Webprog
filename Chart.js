var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Koffein in mg (empfohlenene Menge)',
            backgroundColor: 'rgb(255, 0, 0)',
            borderColor: 'rgb(255, 99, 132)',
            data:Array.apply(null, new Array(12)).map(Number.prototype.valueOf, 400),
            fill:false,
        }, {
            label: 'Zucker',
            backgroundColor: 'rgb(0,0,255)',
            borderColor: 'rgb(0,0,255)',
            data:[0,100,200,300,450,100,350],
            fill:false,
            display: 'auto',
        },
        {
            label: 'zug. Koffein',
            backgroundColor: 'rgb(0,255,0)',
            borderColor: 'rgb(0,255,0)',
            data: [100,130,200,300,400,500,100],
            fill:false,

        }
    ]
    },


    // Configuration options go here
    options: {}
});
