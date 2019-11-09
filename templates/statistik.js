const statistik = '' +  
    '<div id="Buttongroup">'+ 
    '<button class="btn btn-primary btn-lg" onClick=selectChartType("Koffein") id= koffein> Koffein </button>'+
    '<button class="btn btn-secondary btn-lg" onClick=selectChartType("Zucker") id= zucker> Zuckergehalt </button>'+
    '<button class="btn btn-success btn-lg" onClick=selectChartType("Kosten") id= kosten> Kosten </button>'+
    '<button class="btn btn-danger btn-lg" onClick=selectChartType("Anzahl") id= anzahl> Anzahl </button>'+
    '</div>'+
    '<style onload="initalDataLoad()"></style>'+
/*     '<div id="Inputgroup">'+
    '<h8> Ben. Maximalwerte pro Kategorie'+
    '<input type = "number" size="10" id= "maxKoffein" </input>'+
    '<input type = "number" id= "maxZucker" </input>'+
    '<input type = "number" id= "maxKosten" </input>'+
    '<input type = "number" id= "maxAnzahl" </input>'+
    '</div>'+ */
    '<canvas id="Koffein"> </canvas>'+
    '<canvas id="Zucker"> </canvas>'+
    '<canvas id="Kosten"> </canvas>'+
    '<canvas id="Anzahl"> </canvas>';
