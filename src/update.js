
import state from "./state";
import data from "./data";


import {numconvert} from './numberConversion.js';


function update() {
    
/*     function sortingOrderTranlsate(order) {
        if (state.sortingOrder == "Aufsteigend") {
            state.sortingOrder = "asc";
            return state.sortingOrder;
        }
    
        else if (state.sortingOrder == "Absteigend"){
            state.sortingOrder = "desc";
            return state.sortingOrder;
        }
        else {
            return state.sortingOrder;
        }

    } */

    function reloadTable(variable) {
        table.ajax.reload();
        return variable;
    }

    function tranlsateSortingAlphaToNumber(alpha) {
        let alphaList = [{number:1, string:'A'},
                         {number:2, string:'B'},
                         {number:3, string:'C'},
                         {number:4, string:'D'},
                         {number:5, string:'E'},
                         {number:6, string:'F'},
                         {number:7, string:'G'},
                         {number:8, string:'H'},
                         {number:9, string:'I'},
                         {number:10, string:'J'},
                         {number:11, string:'K'},
                         {number:12, string:'L'},
                         {number:13, string:'M'},
                         {number:14, string:'N'},
                         {number:15, string:'O'},
                         {number:16, string:'P'},
                         {number:17, string:'Q'},
                         {number:18, string:'R'},
                         {number:19, string:'S'},
                         {number:20, string:'T'},
                         {number:21, string:'U'},
                         {number:22, string:'V'},
                         {number:23, string:'W'},
                         {number:24, string:'X'},
                         {number:25, string:'Y'},
                         {number:26, string:'Z'}
                        ];
        
        let i;
        for (i=0; i < alphaList.length; i++) {
            if (alphaList[i].string == alpha) {
                //console.log("Output:" + typeof(alphaList[i].number));
                return alphaList[i].number -1;
            };
        };       
        

    }


    function c_names() {
        var column_data = [];
        for(var i=0; i<data.Data.column_names.values.length; i++){
            column_data.push({"title": data.Data.column_names.values[i]});     
        };
        //console.log(column_data);
        return column_data;
    }
    
    
    var table = $('#myTable').dataTable( {
        data: data.Data.map(e => e.values),
        "dom": state.layout,
        responsive: true,
        "columnDefs" : [{
            "targets": 0,
            "data": 0,
            "render": function ( data, type, row, meta ) {
                if (data.indexOf("//www.bild.de/") > -1){
                    var img_tag = '<img src="'+data+'" height="100" weight="100">';
                    return img_tag;
                }
                else {
                    return data;
                }
              },
        }],
        "pageLength":state.numberOfEntries,
        "order": [tranlsateSortingAlphaToNumber(state.sortingColumn), state.sortingOrder], 
        columns: c_names(),
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/German.json"
        }
    });

    

    $(document).ready( function () {
        //table.draw();
    } );
    
    
    // .map(function(d) { return comma_to_point(d.schlusskurs) })
}

export default update;