const statistik = '' +  
    '<div class="btn-group btn-group-toggle statistikcontainer" data-toggle="buttons">' +
        '<label class="btn btn-primary statistikbutton" id="option-1">' +
            '<input type="radio" name="options" autocomplete="off" onclick="createCoffeineChart()">Koffein' +
        '</label>'+
        '<label class="btn btn-primary statistikbutton" id="option-2">' +
            '<input type="radio" name="options" autocomplete="off" onclick="createSugarChart()">Zuckergehalt' +
        '</label>'+
        '<label class="btn btn-primary statistikbutton" id="option-3">' +
            '<input type="radio" name="options" autocomplete="off" onclick="createCostChart()">Kosten' +
        '</label>'+
        '<label class="btn btn-primary statistikbutton" id="option-4">' +
            '<input type="radio" name="options" autocomplete="off" onclick="createAmountChart()">Anzahl' +
        '</label>'+
    '</div>'+
    '<div class="grenzwertcontainer">'+
        '<input type="number" placeholder= "Eigener Grenzwert" id=userdefined> '+
    '</div>'+
    '<style onload="initalDataLoad()"></style>'+
    '<canvas id="Koffein"></canvas>'+
    '<canvas id="Zucker"></canvas>'+
    '<canvas id="Kosten"></canvas>'+
    '<canvas id="Anzahl"></canvas>';
