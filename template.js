var template=function(r){"use strict";let e={sortingColumn:"A",sortingOrder:"desc",numberOfEntries:10,reload:1,layout:"pitr",yscroll:"500px",headerColor:"#dadada",Haupt_Farbe:"rgba(211, 45, 32, 1)",Green:"#6CBA6C",darkGreen:"#45891B",Blue:"#42A8CC",darkBlue:"#036E93",Background_Transparent:"transparent",Background_Color_Haupt_opacity:"rgba(211, 45, 32, 0.5)",cdu_csu_farbe:"#143d4b",cdu_farbe:"#162129",csu_farbe:"#1782d1",spd_farbe:"#e0341f",afd_farbe:"#00b8e3",fdp_farbe:"#f4d50b",gruene_farbe:"#3bae53",dielinke_farbe:"#a00163",sonstige_parteien_farbe:"#c5cad0",nichtwahler_farbe:"#dce1e0",imgsize:[100,150],bar_switch:!1,bar_column:0};var n={};function t(){let r=n.Data;function t(r){let e,n=[],t=[{number:1,string:"A"},{number:2,string:"B"},{number:3,string:"C"},{number:4,string:"D"},{number:5,string:"E"},{number:6,string:"F"},{number:7,string:"G"},{number:8,string:"H"},{number:9,string:"I"},{number:10,string:"J"},{number:11,string:"K"},{number:12,string:"L"},{number:13,string:"M"},{number:14,string:"N"},{number:15,string:"O"},{number:16,string:"P"},{number:17,string:"Q"},{number:18,string:"R"},{number:19,string:"S"},{number:20,string:"T"},{number:21,string:"U"},{number:22,string:"V"},{number:23,string:"W"},{number:24,string:"X"},{number:25,string:"Y"},{number:26,string:"Z"}];if(!isNaN(r))return console.log(r),r;if("object"==typeof r){for(let e in r){let a;for(a=0;a<t.length;a++)t[a].string==r[e]&&n.push(t[a].number-1)}return n}{let n;for(n=0;n<t.length;n++)if(t[n].string==r)return e=t[n].number-1}}$("#myTable").dataTable({data:n.Data.map(r=>r.values),responsive:!0,colReorder:{enable:!0},dom:e.layout,columnDefs:[{targets:0,data:0,render:function(r,n,t,a){return r.indexOf("https://")>-1?'<img src="'+r+'"height="'+e.imgsize[0]+'"width="'+e.imgsize[1]+'">':r}},{targets:t(e.bar_column),render:function(n,t,a,i){let s=function(e){let n=e,t=r,a=new Array;return t.forEach(function(r,e,t){let i=r.values.slice(n)[0];a.push(i)}),Math.max.apply(Math,a)}(i.col),u=function(e){let n=e,t=r,a=new Array;return t.forEach(function(r,e,t){let i=r.values.slice(n)[0];a.push(i)}),Math.min.apply(Math,a)}(i.col),l=(n-u+1)/(s-u)*90;if(e.bar_switch||e.bar_column>0){if(isNaN(n))return n;return'<div class="barcont">'+('<div class="bardiv"> <div class="bar" style="height:20px;width:'+l+'%; background:#D82217;"></div></div>')+('<div class="bartext"><p style="color:#000000">'+Math.round(n)+"</p></div>")+"</div>"}return n}}],paging:!1,scrollY:e.yscroll,pageLength:e.numberOfEntries,order:[t(e.sortingColumn),e.sortingOrder],columns:function(){let r=[];for(var e=0;e<n.Data.column_names.values.length;e++)r.push({title:n.Data.column_names.values[e]});return r}(),language:{url:"//cdn.datatables.net/plug-ins/1.10.19/i18n/German.json"},drawCallback:function(r){$(".dataTables_scrollHead").css("background",e.headerColor)}});$("#mySearch").on("keyup",function(){$("#myTable").DataTable().search(this.value).draw()}),"t"==e.layout&&$("#mySearch").remove(),$("iframe[name='preview']").each(function(){this.sandbox+=" allow-modals"})}return r.state=e,r.data=n,r.draw=function(){t()},r.update=t,r}({});
//# sourceMappingURL=template.js.map
