var template=function(e){"use strict";var n={zeilenOn:"Zeilen an",hauptzeile:"Hauptzeile",unterzeile:"Unterzeile",hauptzeilen_font_size:"2.625rem",unterzeilen_font_size:"1.5rem",hauptzeilen_height:"2.800rem",unterzeilen_height:"1.850rem",sortingColumn:"A",sortingOrder:"asc",numberOfEntries:10,reload:1,layout:"pitr",yscroll:"500px",headerColor:"#dadada",headerSortingColor:"#000000",Haupt_Farbe:"green",Green:"#6CBA6C",darkGreen:"#45891B",Blue:"#42A8CC",darkBlue:"#036E93",Background_Transparent:"transparent",Background_Color_Haupt_opacity:"rgba(211, 45, 32, 0.5)",cdu_csu_farbe:"#143d4b",cdu_farbe:"#162129",csu_farbe:"#1782d1",spd_farbe:"#e0341f",afd_farbe:"#00b8e3",fdp_farbe:"#f4d50b",gruene_farbe:"#3bae53",dielinke_farbe:"#a00163",sonstige_parteien_farbe:"#c5cad0",nichtwahler_farbe:"#dce1e0",suchfeld:"pitr",quelle:"| Quelle: ",imgsize:[100,150],bar_switch:!1,bar_column:""},r={};function t(){let e=r.Data;function t(e){let n,r=[],t=[{number:1,string:"A"},{number:2,string:"B"},{number:3,string:"C"},{number:4,string:"D"},{number:5,string:"E"},{number:6,string:"F"},{number:7,string:"G"},{number:8,string:"H"},{number:9,string:"I"},{number:10,string:"J"},{number:11,string:"K"},{number:12,string:"L"},{number:13,string:"M"},{number:14,string:"N"},{number:15,string:"O"},{number:16,string:"P"},{number:17,string:"Q"},{number:18,string:"R"},{number:19,string:"S"},{number:20,string:"T"},{number:21,string:"U"},{number:22,string:"V"},{number:23,string:"W"},{number:24,string:"X"},{number:25,string:"Y"},{number:26,string:"Z"}];if(!isNaN(e))return console.log(e),e;if(e.length>1){let n=e.split(","),r=[];for(let e=0;e<n.length;e++)for(let a=0;a<t.length;a++)n[e]==t[a].string&&r.push(t[a].number-1);return r}if("object"==typeof e){for(let n in e){let a;for(a=0;a<t.length;a++)t[a].string==e[n]&&r.push(t[a].number-1)}return r}{let r;for(r=0;r<t.length;r++)if(t[r].string==e)return n=t[r].number-1}}$("#myTable").dataTable({data:r.Data.map(e=>e.values),responsive:{details:{type:"inline",target:0}},colReorder:{enable:!0},dom:n.layout,columnDefs:[{targets:0,data:0,render:function(e,r,t,a){return e.indexOf("https://")>-1?'<img src="'+e+'"height="'+n.imgsize[0]+'"width="'+n.imgsize[1]+'">':e}},{targets:t(n.bar_column),render:function(r,t,a,i){let l=function(n){let r=n,t=e,a=new Array;return t.forEach(function(e,n,t){let i=e.values.slice(r)[0];a.push(i)}),Math.max.apply(Math,a)}(i.col),u=function(n){let r=n,t=e,a=new Array;return t.forEach(function(e,n,t){let i=e.values.slice(r)[0];a.push(i)}),Math.min.apply(Math,a)}(i.col),s=(r-u+1)/(l-u)*90;if(n.bar_switch||n.bar_column>0){if(isNaN(r))return r;{let e='<div class="barcont">',n='<div class="bartext"><p style="color:#000000">'+Math.round(r)+"</p></div>";return e+('<div class="bardiv"> <span class="bar" style="height:20px;width:'+s+"%; background:"+function(e,n,r){return d3.scaleLinear().domain([n,r]).interpolate(d3.interpolateHsl).range(["white","#D82217"])(e)}(r,u,l)+';"></span></div>')+n+"</div>"}}return r}}],paging:!1,scrollY:n.yscroll,pageLength:n.numberOfEntries,order:[t(n.sortingColumn),n.sortingOrder],columns:function(){let e=[];for(var n=0;n<r.Data.column_names.values.length;n++)e.push({title:r.Data.column_names.values[n]});return e}(),language:{url:"//cdn.datatables.net/plug-ins/1.10.19/i18n/German.json"},drawCallback:function(e){$(".dataTables_scrollHead").css("background",n.headerColor)}});$("#mySearch").on("keyup",function(){$("#myTable").DataTable().search(this.value).draw()}),"t"==n.layout&&$("#mySearch").remove(),"Zeilen an"==n.zeilenOn?n.zeilenOn=!0:n.zeilenOn=!1,1==n.zeilenOn&&($("#hauptzeile").text(n.hauptzeile),$("#unterzeile").text(n.unterzeile),$("#hauptzeile").css("font-size",n.hauptzeilen_font_size),$("#unterzeile").css("font-size",n.unterzeilen_font_size),$("#hauptzeile").css("line-height",n.hauptzeilen_height),$("#unterzeile").css("line-height",n.unterzeilen_height)),n.quelle&&$("#quelle").text(n.quelle),$("iframe[name='preview']").each(function(){this.sandbox+=" allow-modals"})}return e.state=n,e.data=r,e.draw=function(){t()},e.update=t,e}({});
//# sourceMappingURL=template.js.map
