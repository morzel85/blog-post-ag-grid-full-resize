(this["webpackJsonpblog-post-ag-grid-full-resize"]=this["webpackJsonpblog-post-ag-grid-full-resize"]||[]).push([[0],{14:function(e,t,a){},26:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),l=a.n(r),c=(a(14),a(1)),i=a(7),u=function(e){var t=Math.random();switch(e){case 0:return t;case 1:return Math.floor(1e3*t);case 2:return"Lorem ipsum! ".repeat(Math.floor(3*t));case 3:return t>.5?"ON":"OFF";case 4:return Math.floor(1e6*t);case 5:return"!@#$%^&*".charAt(Math.floor(8*t)).repeat(5*t);case 6:return"Lorem ipsum! ".repeat(Math.ceil(5*t));case 7:return["AA","BBB","CCCC","DDDDD"][Math.floor(4*t)];case 8:return["X-Y-Z","asdf","qaz"][Math.floor(3*t)].repeat(5*t);default:return"?"}},s=function(e,t){for(var a=[],n=[],o=0;o<e;o++)a.push({headerName:"Column "+o,field:"field_"+o});for(var r=0;r<t;r++){for(var l={id:r},c=0;c<e;c++){var i=u(c%10);l["field_"+c]=i}n.push(l)}return{columnDefs:a,rowData:n}},m=a(8),d=document.createElement("canvas").getContext("2d"),f=function(e,t,a){var n=d.measureText(e).width,o=a.get(t);(void 0===o||n>o)&&a.set(t,n)},h=function(e){console.time("Column widths calculation");var t=new Map;e.measureHeaders&&(d.font=e.headerFont,e.columnDefs.forEach((function(e){f(e.headerName,e.field,t)}))),d.font=e.rowFont,e.rowData.forEach((function(a){e.columnDefs.forEach((function(n){e.cache?function(e,t,a,n){var o,r=n.get(e);void 0===r?(o=d.measureText(e).width,n.set(e,o)):o=r;var l=a.get(t);(void 0===l||o>l)&&a.set(t,o)}(a[n.field],n.field,t,e.cache):f(a[n.field],n.field,t)}))}));var a=e.columnDefs.map((function(a){return Object(m.a)({},a,{width:Math.ceil(t.get(a.field)+e.padding)})}));return console.timeEnd("Column widths calculation"),a},p=(a(26),a(27),a(28),new Map),w=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(null),u=Object(c.a)(l,2),m=u[0],d=u[1],f=Object(n.useState)(!0),w=Object(c.a)(f,2),b=w[0],v=w[1],g=Object(n.useState)(!0),E=Object(c.a)(g,2),C=E[0],D=E[1],z=Object(n.useState)([]),O=Object(c.a)(z,2),j=O[0],k=O[1],M=Object(n.useState)([]),x=Object(c.a)(M,2),A=x[0],R=x[1];return o.a.createElement("div",{className:"App"},o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){var e=s(300,100),t=e.columnDefs,a=e.rowData;k(t),R(a)}},"Generate data (100 rows with 300 columns)")),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){if(m){console.time("Resize with autoSizeColumns");var e=m.getAllColumns().map((function(e){return e.colId}));m.autoSizeColumns(e),console.timeEnd("Resize with autoSizeColumns")}}},"Resize columns with columnApi.autoSizeColumns")),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){if(console.time("Resize all columns (including widths calculation)"),a&&m){var e=h({columnDefs:j,rowData:A,measureHeaders:!0,headerFont:"bold 12px Arial",rowFont:"normal 12px Arial",padding:30,cache:b?p:null});C?e.forEach((function(e){return m.setColumnWidth(e.field,e.width)})):a.setColumnDefs(e)}console.timeEnd("Resize all columns (including widths calculation)")}},"Resize columns with custom text measure"),o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",checked:b,onChange:function(){return v(!b)}}),"Use widths cache"),o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",checked:C,onChange:function(){return D(!C)}}),"Keep column settings"))),o.a.createElement("div",{className:"ag-theme-balham"},o.a.createElement(i.AgGridReact,{defaultColDef:{width:300,resizable:!0,sortable:!0},columnDefs:j,rowData:A,getRowNodeId:function(e){return e.id},deltaRowDataMode:!0,onGridReady:function(e){r(e.api),d(e.columnApi)}})),o.a.createElement("div",{class:"about"},"Example app for ",o.a.createElement("a",{href:"https://morzel.net",target:"_blank"},"morzel.net")," blog post"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(29)}},[[9,1,2]]]);
//# sourceMappingURL=main.0f8e0920.chunk.js.map