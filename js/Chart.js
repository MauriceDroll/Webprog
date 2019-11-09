// Definition von Arrays, die Kaffees pro Tag enthalten
coffee7thday=new Array();
coffee6thday=new Array();
coffee5thday=new Array();
coffee4thday=new Array();
coffee3rdday=new Array();
coffee2ndday=new Array();
coffee1stday=new Array();

// Initiale Definiton des Charts
chart=0;
function initalDataLoad() {

    // Labelerstellung für das Chart
    timeintervall= [];
    let i=7;
    while(i>=0){
        let dummy= getDate_in_the_past(i);
        timeintervall.push(dummy.getDate()+"."+(dummy.getMonth()+1));
        i--;
    }
    // Array, welches die Daten der letzten 8 Tage beeinhaltet
    let tageuebersicht=[];
    let d=7;
    while(d>=0){
        tageuebersicht.push(calcDate(d));
        d--;
    }

    getDatafromDatabase(tageuebersicht[0],tageuebersicht[1],coffee1stday).then(response => {
        return getDatafromDatabase(tageuebersicht[1],tageuebersicht[2],coffee2ndday).then(response2 => {
            return getDatafromDatabase(tageuebersicht[2],tageuebersicht[3],coffee3rdday).then(response3 => {
                return getDatafromDatabase(tageuebersicht[3],tageuebersicht[4],coffee4thday).then(response4 => {
                    return getDatafromDatabase(tageuebersicht[4],tageuebersicht[5],coffee5thday).then(response5 => {
                        return getDatafromDatabase(tageuebersicht[5],tageuebersicht[6],coffee6thday).then(response6 => {
                            return getDatafromDatabase(tageuebersicht[6],tageuebersicht[7],coffee7thday).then(response7 => {
                            });
                        });
                    });
                });
            });
        });
    });
}
function calcDate(difference){
    let date= new Date();
    date.setDate(date.getDate() - difference);
    return date;
}

function getDatafromDatabase(start,end,array_tosave){
    return db.collection('coffee').where("Datum",">",start).where("Datum","<",end).get().then(response => {
        let dummy = response.docs.map(doc => doc.data());
        array_tosave.push(dummy);
        return array_tosave;
    });  
}

function calcAmountofCoffee(){
    return amountCoffee= [coffee1stday[0].length,coffee2ndday[0].length,
        coffee3rdday[0].length,coffee4thday[0].length,coffee5thday[0].length,
        coffee6thday[0].length,coffee7thday[0].length];
}

function calcCoffeineAmount(array_of_day){
    let amountofCoffeine=0;
    if(array_of_day[0][0]===null || array_of_day[0][0]===undefined){
        return 0;
    }else{
        amountofCoffeine=0;
        array_of_day.forEach(part =>{
            amountofCoffeine= parseFloat(amountofCoffeine)+ parseFloat(part[0].Kaffee.Koffeingehalt);
        });
        return amountofCoffeine;
    }

}

function calcSugarAmount(array_of_day){
    let amountofSugar=0;
    if (array_of_day[0][0]===null || array_of_day[0][0]===undefined){
        return 0;
    }else{
        amountofSugar=0;
        array_of_day.forEach(part =>{
            amountofSugar= parseFloat(amountofSugar)+ parseFloat(part[0].Kaffee.Zucker);
        });
        return amountofSugar;
    }
}

function calcCost(array_of_day){
    let cost=0;
    if (array_of_day[0][0]===null || array_of_day[0][0]===undefined){
        return 0;
    }else{
        cost=0;
        array_of_day.forEach(part =>{
            cost= parseFloat(cost)+ parseFloat(part[0].Kaffee.Preis);
        });
        return cost;
        
    }
}

// Diese Funktion erstellt ein Diagramm aus den Parametern
function createChart(which_chart,amountofCoffee,labeling,color,additionaldataset){
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
            scales:{
                xAxes: [{ stacked: true }],
                yAxes: [{ stacked: true }]
              }
        }
        });
}

function getDate_in_the_past(tag){
    let d= new Date(new Date().setDate(new Date().getDate()-tag));
    return d;
}   

function selectChartType(charttype){
    if (charttype==="Anzahl"){
        createAmountChart();
    }else if(charttype==="Koffein"){
        createCoffeineChart();
    } else if(charttype==="Zucker"){
        createSugarChart();
    } else if (charttype==="Kosten") {
        createCostChart();
    }
}

// Mit den folgenden Funktionen werden die Diagramme erstellt, zur Berechnung wird jeweils die entsprechende calc-Funktion verwendet
function createAmountChart(){
    delete_arrays();
    let color= 'rgb(0, 4, 255)'
    let amountofCoffee=[coffee1stday[0].length,coffee2ndday[0].length,
    coffee3rdday[0].length,coffee4thday[0].length,coffee5thday[0].length,
    coffee6thday[0].length,coffee7thday[0].length];
    hideCanvas();
    anzahl.style.display="block";
    resetButton();
    colorizeButton("anzahl",color);
    createChart('Anzahl',amountofCoffee,"Anzahl der Kaffees",color, {});
}

function createCoffeineChart(){

    let dataset2= {
        type: 'line',
        label: "Empfohlene Menge an Koffein pro Tag",
        backgroundColor: 'rgb(0,0,0)',
        borderColor: 'rgb(0,0,0)' ,
        data: Array.apply(null, new Array(9)).map(Number.prototype.valueOf, 400),
        fill: false,
        display: 'auto',
        radius:0,
    };
    let coffein_complete= [calcCoffeineAmount(coffee1stday),calcCoffeineAmount(coffee2ndday),calcCoffeineAmount(coffee3rdday),calcAmountofCoffee(coffee4thday), calcCoffeineAmount(coffee5thday),calcCoffeineAmount(coffee6thday),calcCoffeineAmount(coffee7thday)];
    let color= 'rgb(139,69,19)';
    hideCanvas();
    koffein.style.display="block";
    resetButton();
    colorizeButton("koffein",color);
    createChart('Koffein',coffein_complete,"Koffeinkonsum pro Tag",color,dataset2);
    console.log(coffein_complete);
    
}

function createSugarChart(){
    let dataset2= {
        label: "Empfohlene Zuckermenge pro Tag",
        backgroundColor: 'rgb(0,0,0)',
        bordercolor: 'rgb(0,0,0)',
        data: Array.apply(null, new Array(9)).map(Number.prototype.valueOf, 50),
        fill: false,
        display: 'auto',
        type: 'line',
        radius:0,
    };
    let color= 'rgb(255,0,0)';
    let amountofSugar=[calcSugarAmount(coffee1stday),calcSugarAmount(coffee2ndday),calcSugarAmount(coffee3rdday),calcSugarAmount(coffee4thday),calcSugarAmount(coffee5thday),calcSugarAmount(coffee6thday),calcSugarAmount(coffee7thday)];
    hideCanvas(); 
    zucker.style.display="block";  
    resetButton();
    colorizeButton("zucker",color);
    createChart('Zucker',amountofSugar,"Zuckerkonsum pro Tag",color,dataset2);

}

function createCostChart(){
    delete_arrays();
    let totalcost= [calcCost(coffee1stday),calcCost(coffee2ndday),calcCost(coffee3rdday),calcCost(coffee4thday),calcCost(coffee5thday),calcCost(coffee6thday),calcCost(coffee7thday)];
    let color= 'rgb(255,215,0)';
    hideCanvas();
    kosten.style.display="block"; 
    resetButton();
    colorizeButton("kosten",color);
    createChart('Kosten',totalcost,"Kosten pro Tag",color,[]);

}

function delete_arrays(){
    totalcost=[];
    amountofSugar=[];
    amountofCoffeine=[];
    amountCoffee=[];
}

function hideCanvas(){
    koffein=document.getElementById("Koffein");
    zucker=document.getElementById("Zucker");
    kosten=document.getElementById("Kosten");
    anzahl= document.getElementById("Anzahl");
    koffein.style.display="none";
    zucker.style.display="none";
    kosten.style.display="none";
    anzahl.style.display="none";
}

function colorizeButton(button,color){
    let b= document.getElementById(button);
    b.style.background= color;
}

function resetButton(){
    let a= document.getElementById("koffein");
    let b= document.getElementById("zucker");
    let c= document.getElementById("anzahl");
    let d= document.getElementById("kosten");
    a.style.background= '#ffffff';
    b.style.background= '#ffffff';
    c.style.background= '#ffffff';
    d.style.background= '#ffffff';
}

