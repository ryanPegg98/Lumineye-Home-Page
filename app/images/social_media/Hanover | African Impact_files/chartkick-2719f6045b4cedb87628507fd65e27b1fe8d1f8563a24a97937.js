!function(t){"use strict";function e(t){return"[object Array]"===Object.prototype.toString.call(t)}function n(t){return t instanceof Function}function a(t){return!n(t)&&t instanceof Object}function r(t,n){var i;for(i in n)a(n[i])||e(n[i])?(a(n[i])&&!a(t[i])&&(t[i]={}),e(n[i])&&!e(t[i])&&(t[i]=[]),r(t[i],n[i])):n[i]!==undefined&&(t[i]=n[i])}function i(t,e){var n={};return r(n,t),r(n,e),n}function o(t){var e,n,a,r,i,o,s,c,l,d,u;return"[object Date]"===(d=Object.prototype.toString.call(t))?t:"[object String]"===d&&(a=t.match(V))?(u=parseInt(a[1],10),o=parseInt(a[3],10)-1,e=parseInt(a[5],10),n=parseInt(a[7],10),i=a[9]?parseInt(a[9],10):0,l=a[11]?parseInt(a[11],10):0,r=a[12]?1e3*parseFloat(G+a[12].slice(1)):0,c=Date.UTC(u,o,e,n,i,l,r),a[13]&&a[14]&&(s=60*a[15],a[17]&&(s+=parseInt(a[17],10)),s*="-"===a[14]?-1:1,c-=60*s*1e3),new Date(c)):void 0}function s(t){var e,n,a;for(e=0;e<t.length;e++)for(a=t[e].data,n=0;n<a.length;n++)if(a[n][1]<0)return!0;return!1}function c(t,e,n,a,r,o,c){return function(l,d,u){var h=i({},t);return h=i(h,u||{}),d.hideLegend&&e(h),"min"in d?n(h,d.min):s(l)||n(h,0),d.max&&a(h,d.max),"stacked"in d&&r(h,d.stacked),d.colors&&(h.colors=d.colors),d.xtitle&&o(h,d.xtitle),d.ytitle&&c(h,d.ytitle),h=i(h,d.library||{})}}function l(t,e){document.body.innerText?t.innerText=e:t.textContent=e}function d(t,e){l(t,"Error Loading Chart: "+e),t.style.color="#ff0000"}function u(e,n,a){(t.jQuery||t.Zepto||t.$).ajax({dataType:"json",url:n,success:a,error:function(t,n,a){var r="string"==typeof a?a:a.message;d(e,r)}})}function h(t,e){try{e(t)}catch(e){throw d(t.element,e.message),e}}function f(t,e){"string"==typeof t.dataSource?u(t.element,t.dataSource,function(n){t.data=n,h(t,e)}):(t.data=t.dataSource,h(t,e))}function p(t){return""+t}function m(t){return parseFloat(t)}function g(t){var e,n,a,r;if("object"!=typeof t)if("number"==typeof t)t=new Date(1e3*t);else{if(R.smarterDates&&(e=t.match(U)))return n=parseInt(e[1],10),a=parseInt(e[3],10)-1,r=parseInt(e[5],10),new Date(n,a,r);var i=t.replace(/ /,"T").replace(" ","").replace("UTC","Z");t=o(i)||new Date(t)}return t}function v(t){if(!e(t)){var n,a=[];for(n in t)t.hasOwnProperty(n)&&a.push([n,t[n]]);t=a}return t}function C(t,e){return t[0].getTime()-e[0].getTime()}function x(t,e){return t-e}function y(){if(!e&&"Highcharts"in t){var e=new function(){var e=t.Highcharts;this.name="highcharts";var n={chart:{},xAxis:{title:{text:null},labels:{style:{fontSize:"12px"}}},yAxis:{title:{text:null},labels:{style:{fontSize:"12px"}}},title:{text:null},credits:{enabled:!1},legend:{borderWidth:0},tooltip:{style:{fontSize:"12px"}},plotOptions:{areaspline:{},series:{marker:{}}}},a=function(t){t.legend.enabled=!1},r=function(t,e){t.yAxis.min=e},o=function(t,e){t.yAxis.max=e},s=function(t,e){t.plotOptions.series.stacking=e?"normal":null},l=function(t,e){t.xAxis.title.text=e},d=function(t,e){t.yAxis.title.text=e},u=c(n,a,r,o,s,l,d);this.renderLineChart=function(t,n){n=n||"spline";var a={};"areaspline"===n&&(a={plotOptions:{areaspline:{stacking:"normal"},series:{marker:{enabled:!1}}}});var r,i,o,s=u(t.data,t.options,a);s.xAxis.type=t.options.discrete?"category":"datetime",s.chart.type=n,s.chart.renderTo=t.element.id;var c=t.data;for(i=0;i<c.length;i++){if(r=c[i].data,!t.options.discrete)for(o=0;o<r.length;o++)r[o][0]=r[o][0].getTime();c[i].marker={symbol:"circle"}}s.series=c,new e.Chart(s)},this.renderScatterChart=function(t){var n={},a=u(t.data,t.options,n);a.chart.type="scatter",a.chart.renderTo=t.element.id,a.series=t.data,new e.Chart(a)},this.renderPieChart=function(t){var a={};t.options.colors&&(a.colors=t.options.colors);var r=i(i(n,a),t.options.library||{});r.chart.renderTo=t.element.id,r.series=[{type:"pie",name:t.options.label||"Value",data:t.data}],new e.Chart(r)},this.renderColumnChart=function(t,n){var a,r,i,o,n=n||"column",s=t.data,c=u(s,t.options),l=[];for(c.chart.type=n,c.chart.renderTo=t.element.id,a=0;a<s.length;a++)for(i=s[a],r=0;r<i.data.length;r++)o=i.data[r],l[o[0]]||(l[o[0]]=new Array(s.length)),l[o[0]][a]=o[1];var d=[];for(a in l)l.hasOwnProperty(a)&&d.push(a);c.xAxis.categories=d;var h=[];for(a=0;a<s.length;a++){for(o=[],r=0;r<d.length;r++)o.push(l[d[r]][a]||0);h.push({name:s[a].name,data:o})}c.series=h,new e.Chart(c)};var h=this;this.renderBarChart=function(t){h.renderColumnChart(t,"bar")},this.renderAreaChart=function(t){h.renderLineChart(t,"areaspline")}};$.push(e)}if(!n&&t.google&&t.google.setOnLoadCallback){var n=new function(){var e=t.google;this.name="google";var n={},a=[],r=function(){for(var t,n=0;n<a.length;n++)t=a[n],e.visualization&&("corechart"===t.pack&&e.visualization.LineChart||"timeline"===t.pack&&e.visualization.Timeline)&&(t.callback(),a.splice(n,1),n--)},o=function(t,i){if(i||(i=t,t="corechart"),a.push({pack:t,callback:i}),n[t])r();else{n[t]=!0;var o={packages:[t],callback:r};R.language&&(o.language=R.language),e.load("visualization","1",o)}},s={chartArea:{},fontName:"'Lucida Grande', 'Lucida Sans Unicode', Verdana, Arial, Helvetica, sans-serif",pointSize:6,legend:{textStyle:{fontSize:12,color:"#444"},alignment:"center",position:"right"},curveType:"function",hAxis:{textStyle:{color:"#666",fontSize:12},titleTextStyle:{},gridlines:{color:"transparent"},baselineColor:"#ccc",viewWindow:{}},vAxis:{textStyle:{color:"#666",fontSize:12},titleTextStyle:{},baselineColor:"#ccc",viewWindow:{}},tooltip:{textStyle:{color:"#666",fontSize:12}}},l=function(t){t.legend.position="none"},d=function(t,e){t.vAxis.viewWindow.min=e},u=function(t,e){t.vAxis.viewWindow.max=e},h=function(t,e){t.hAxis.viewWindow.min=e},f=function(t,e){t.hAxis.viewWindow.max=e},p=function(t,e){t.isStacked=!!e},g=function(t,e){t.hAxis.title=e,t.hAxis.titleTextStyle.italic=!1},v=function(t,e){t.vAxis.title=e,t.vAxis.titleTextStyle.italic=!1},x=c(s,l,d,u,p,g,v),y=function(t,n){var a,r,i,o,s,c=[];for(a=0;a<t.length;a++)for(i=t[a],r=0;r<i.data.length;r++)o=i.data[r],s="datetime"===n?o[0].getTime():o[0],c[s]||(c[s]=new Array(t.length)),c[s][a]=m(o[1]);var l,d=[],u=!0;for(a in c)c.hasOwnProperty(a)&&("datetime"===n?(l=new Date(m(a)),u=u&&A(l)):l="number"===n?m(a):a,d.push([l].concat(c[a])));"datetime"===n&&d.sort(C);var h=new e.visualization.DataTable;for(n="datetime"===n&&u?"date":n,h.addColumn(n,""),a=0;a<t.length;a++)h.addColumn("number",t[a].name);return h.addRows(d),h},b=function(e){t.attachEvent?t.attachEvent("onresize",e):t.addEventListener&&t.addEventListener("resize",e,!0),e()};this.renderLineChart=function(t){o(function(){var n=x(t.data,t.options),a=y(t.data,t.options.discrete?"string":"datetime");t.chart=new e.visualization.LineChart(t.element),b(function(){t.chart.draw(a,n)})})},this.renderPieChart=function(t){o(function(){var n={chartArea:{top:"10%",height:"80%"}};t.options.colors&&(n.colors=t.options.colors);var a=i(i(s,n),t.options.library||{}),r=new e.visualization.DataTable;r.addColumn("string",""),r.addColumn("number","Value"),r.addRows(t.data),t.chart=new e.visualization.PieChart(t.element),b(function(){t.chart.draw(r,a)})})},this.renderColumnChart=function(t){o(function(){var n=x(t.data,t.options),a=y(t.data,"string");t.chart=new e.visualization.ColumnChart(t.element),b(function(){t.chart.draw(a,n)})})},this.renderBarChart=function(t){o(function(){var n={hAxis:{gridlines:{color:"#ccc"}}},a=c(s,l,h,f,p)(t.data,t.options,n),r=y(t.data,"string");t.chart=new e.visualization.BarChart(t.element),b(function(){t.chart.draw(r,a)})})},this.renderAreaChart=function(t){o(function(){var n={isStacked:!0,pointSize:0,areaOpacity:.5},a=x(t.data,t.options,n),r=y(t.data,t.options.discrete?"string":"datetime");t.chart=new e.visualization.AreaChart(t.element),b(function(){t.chart.draw(r,a)})})},this.renderGeoChart=function(t){o(function(){var n={legend:"none",colorAxis:{colors:t.options.colors||["#f6c7b6","#ce502d"]}},a=i(i(s,n),t.options.library||{}),r=new e.visualization.DataTable;r.addColumn("string",""),r.addColumn("number",t.options.label||"Value"),r.addRows(t.data),t.chart=new e.visualization.GeoChart(t.element),b(function(){t.chart.draw(r,a)})})},this.renderScatterChart=function(t){o(function(){var n={},a=x(t.data,t.options,n),r=y(t.data,"number");t.chart=new e.visualization.ScatterChart(t.element),b(function(){t.chart.draw(r,a)})})},this.renderTimeline=function(t){o("timeline",function(){var n={legend:"none"};t.options.colors&&(n.colors=t.options.colors);var a=i(i(s,n),t.options.library||{}),r=new e.visualization.DataTable;r.addColumn({type:"string",id:"Name"}),r.addColumn({type:"date",id:"Start"}),r.addColumn({type:"date",id:"End"}),r.addRows(t.data),t.element.style.lineHeight="normal",t.chart=new e.visualization.Timeline(t.element),b(function(){t.chart.draw(r,a)})})}};$.push(n)}if(!a&&"Chart"in t){var a=new function(){var e=t.Chart;this.name="chartjs";var n={maintainAspectRatio:!1,animation:!1},a={scales:{yAxes:[{ticks:{maxTicksLimit:4},scaleLabel:{fontSize:16,fontColor:"#333"}}],xAxes:[{gridLines:{drawOnChartArea:!1},scaleLabel:{fontSize:16,fontColor:"#333"},time:{},ticks:{}}]},legend:{}},r=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],o=function(t){t.legend.display=!1},s=function(t,e){null!==e&&(t.scales.yAxes[0].ticks.min=e)},l=function(t,e){t.scales.yAxes[0].ticks.max=e},d=function(t,e){t.scales.xAxes[0].stacked=!!e,t.scales.yAxes[0].stacked=!!e},u=function(t,e){t.scales.xAxes[0].scaleLabel.display=!0,t.scales.xAxes[0].scaleLabel.labelString=e},h=function(t,e){t.scales.yAxes[0].scaleLabel.display=!0,t.scales.yAxes[0].scaleLabel.labelString=e},f=function(t,n,a,r){t.element.innerHTML="<canvas></canvas>";var i=t.element.getElementsByTagName("CANVAS")[0];t.chart=new e(i,{type:n,data:a,options:r})},g=function(t,e){var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?"rgba("+parseInt(n[1],16)+", "+parseInt(n[2],16)+", "+parseInt(n[3],16)+", "+e+")":t},v=function(t,e,n){var a=Math.ceil(t.element.offsetWidth/4/e.labels.length);n.scales.xAxes[0].ticks.callback=function(t){return t=p(t),t.length>a?t.substring(0,a-2)+"...":t}},C=c(i(n,a),o,s,l,d,u,h),y=function(t,e,n){var a,o,s,c,l,d,u=[],h=[],f=t.options.colors||r,p=!0,v=!0,C=!0,y=!0,b=("line"===n||"area"===n)&&!t.options.discrete,k=t.data,z=[],L=[];for(o=0;o<k.length;o++)for(c=k[o],s=0;s<c.data.length;s++)l=c.data[s],d=b?l[0].getTime():l[0],L[d]||(L[d]=new Array(k.length)),L[d][o]=m(l[1]),-1===z.indexOf(d)&&z.push(d);b&&z.sort(x);for(var D=[],s=0;s<k.length;s++)D.push([]);var B,E,p=!0;for(E=0;E<z.length;E++){o=z[E],b?(B=new Date(m(o)),p=p&&A(B),a||(a=B.getDay()),v=v&&w(B,a),C=C&&S(B),y=y&&T(B)):B=o,h.push(B);for(var s=0;s<k.length;s++)D[s].push(L[o][s])}for(var o=0;o<k.length;o++){var c=k[o],I="line"!==n?g(f[o],.5):f[o],O={label:c.name,data:D[o],fill:"area"===n,borderColor:f[o],backgroundColor:I,pointBackgroundColor:f[o],borderWidth:2};u.push(i(O,c.library||{}))}if(b&&h.length>0){var j=h[0].getTime(),W=h[0].getTime();for(o=1;o<h.length;o++)B=h[o].getTime(),B<j&&(j=B),B>W&&(W=B);var P=(W-j)/864e5;if(!e.scales.xAxes[0].time.unit){var F;if(y||P>3650?(e.scales.xAxes[0].time.unit="year",F=365):C||P>300?(e.scales.xAxes[0].time.unit="month",F=30):(p||P>10)&&(e.scales.xAxes[0].time.unit="day",F=1),F&&P>0){var M=Math.ceil(P/F/(t.element.offsetWidth/100));v&&(M=7*Math.ceil(M/7)),e.scales.xAxes[0].time.unitStepSize=M}}!e.scales.xAxes[0].time.tooltipFormat&&p&&(e.scales.xAxes[0].time.tooltipFormat="ll")}return{labels:h,datasets:u}};this.renderLineChart=function(t,e){var n={},a=C(t.data,i(n,t.options)),r=y(t,a,e||"line");a.scales.xAxes[0].type=t.options.discrete?"category":"time",f(t,"line",r,a)},this.renderPieChart=function(t){for(var e=i(n,t.options.library||{}),a=[],o=[],s=0;s<t.data.length;s++){var c=t.data[s];a.push(c[0]),o.push(c[1])}var l={labels:a,datasets:[{data:o,backgroundColor:t.options.colors||r}]};f(t,"pie",l,e)},this.renderColumnChart=function(t,e){var n=C(t.data,t.options),a=y(t,n,"column");v(t,a,n),f(t,"bar"===e?"horizontalBar":"bar",a,n)};var b=this;this.renderAreaChart=function(t){b.renderLineChart(t,"area")},this.renderBarChart=function(t){b.renderColumnChart(t,"bar")}};$.push(a)}}function b(t,e){var a,r,i,o;for(i="render"+t,o=e.options.adapter,0==$.length&&y(),a=0;a<$.length;a++)if(r=$[a],(!o||o===r.name)&&n(r[i]))return r[i](e);throw new Error("No adapter found")}function A(t){return t.getMilliseconds()+t.getSeconds()+t.getMinutes()+t.getHours()===0}function w(t,e){return A(t)&&t.getDay()===e}function S(t){return A(t)&&1===t.getDate()}function T(t){return S(t)&&0===t.getMonth()}function k(t){return!isNaN(g(t))&&p(t).length>=6}function z(t){var e,n,a;for(e=0;e<t.length;e++)for(a=v(t[e].data),n=0;n<a.length;n++)if(!k(a[n][0]))return!0;return!1}function L(t,n,a){var r;for(!e(t)||"object"!=typeof t[0]||e(t[0])?(t=[{name:n.label||"Value",data:t}],n.hideLegend=!0):n.hideLegend=!1,!R.smarterDiscrete||null!==n.discrete&&n.discrete!==undefined||(n.discrete=z(t)),n.discrete&&(a="string"),r=0;r<t.length;r++)t[r].data=Q(v(t[r].data),a);return t}function D(t){var e,n=v(t);for(e=0;e<n.length;e++)n[e]=[p(n[e][0]),m(n[e][1])];return n}function B(t){var e;for(e=0;e<t.length;e++)t[e][1]=g(t[e][1]),t[e][2]=g(t[e][2]);return t}function E(t){t.data=L(t.data,t.options,"datetime"),b("LineChart",t)}function I(t){t.data=L(t.data,t.options,"string"),b("ColumnChart",t)}function O(t){t.data=D(t.data),b("PieChart",t)}function j(t){t.data=L(t.data,t.options,"string"),b("BarChart",t)}function W(t){t.data=L(t.data,t.options,"datetime"),b("AreaChart",t)}function P(t){t.data=D(t.data),b("GeoChart",t)}function F(t){t.data=L(t.data,t.options,"number"),b("ScatterChart",t)}function M(t){t.data=B(t.data),b("Timeline",t)}function N(t,e,n,a,r){"string"==typeof e&&(e=document.getElementById(e)),t.element=e,t.options=a||{},t.dataSource=n,H.charts[e.id]=t,f(t,r)}var H,V,G,R=t.Chartkick||{},$=[],U=/^(\d\d\d\d)(\-)?(\d\d)(\-)?(\d\d)$/i,$=[];V=/(\d\d\d\d)(\-)?(\d\d)(\-)?(\d\d)(T)?(\d\d)(:)?(\d\d)?(:)?(\d\d)?([\.,]\d+)?($|Z|([\+\-])(\d\d)(:)?(\d\d)?)/i,G=String(1.5).charAt(1);var Z=function(t,e){return t="number"===e?m(t):"datetime"===e?g(t):p(t)},Q=function(t,e){var n,a,r=[];for(a=0;a<t.length;a++)n=Z(t[a][0],e),r.push([n,m(t[a][1])]);return"datetime"===e&&r.sort(C),r};H={LineChart:function(t,e,n){N(this,t,e,n,E)},PieChart:function(t,e,n){N(this,t,e,n,O)},ColumnChart:function(t,e,n){N(this,t,e,n,I)},BarChart:function(t,e,n){N(this,t,e,n,j)},AreaChart:function(t,e,n){N(this,t,e,n,W)},GeoChart:function(t,e,n){N(this,t,e,n,P)},ScatterChart:function(t,e,n){N(this,t,e,n,F)},Timeline:function(t,e,n){N(this,t,e,n,M)},charts:{}},t.Chartkick=H}(window);