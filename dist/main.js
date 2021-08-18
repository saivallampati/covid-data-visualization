"use strict";(self.webpackChunkcoviddata=self.webpackChunkcoviddata||[]).push([[179],{977:(e,t,r)=>{var n=r(3935),o=r(7294),a=r(8222),i=r(3860),l=r(5376),c=[{title:"Country",dataIndex:"Country",key:"ID",sorter:function(e,t){return e.Country.localeCompare(t.Country)},width:300},{title:"Confirmed",children:[{title:"New",dataIndex:"NewConfirmed",key:"ID",sorter:function(e,t){return e.NewConfirmed-t.NewConfirmed},width:150},{title:"Total",dataIndex:"TotalConfirmed",key:"ID",sorter:function(e,t){return e.TotalConfirmed-t.TotalConfirmed},width:150}]},{title:"Deaths",children:[{title:"New",dataIndex:"NewDeaths",key:"ID",sorter:function(e,t){return e.NewDeaths-t.NewDeaths},width:150},{title:"Total",dataIndex:"TotalDeaths",key:"ID",sorter:function(e,t){return e.TotalDeaths-t.TotalDeaths},width:150}]},{title:"Recovered",children:[{title:"New",dataIndex:"NewRecovered",key:"ID",sorter:function(e,t){return e.NewRecovered-t.NewRecovered},width:150},{title:"Total",dataIndex:"TotalRecovered",key:"ID",sorter:function(e,t){return e.TotalRecovered-t.TotalRecovered},width:150}]}],s=r(5893);const u=function(e){var t=e.countriesData;return(0,s.jsxs)("div",{className:"countries-data",children:[(0,s.jsx)("h2",{children:"Country wise Summary"}),(0,s.jsx)(l.Z,{dataSource:t,columns:c,bordered:!0})]})};var d={"New Confirmed Cases":"NewConfirmed","Total Confirmed Cases":"TotalConfirmed","New Deaths":"NewDeaths","Total Deaths":"TotalDeaths","New Recovered Cases":"NewRecovered","Total Recovered Cases":"TotalRecovered"};const f=function(e){var t=e.global;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{children:"Global Summary"}),(0,s.jsx)("div",{className:"global-data",children:Object.keys(d).map((function(e,r){return(0,s.jsxs)("div",{className:"global-data__row",children:[(0,s.jsx)("p",{children:e}),(0,s.jsx)("p",{children:t[d[e]]})]},r)}))})]})};function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const v=function(){var e,t,r=(e=(0,o.useState)(!0),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],l=r[1],c=function(e,t){var r=h((0,o.useState)(),2),n=r[0],a=r[1],i=h((0,o.useState)(!1),2),l=i[0],c=i[1];return(0,o.useEffect)((function(){e&&(c(!0),fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(e){a(e),c(!1),t(!1)})).catch((function(e){console.log(e),c(!1),t(!1)})))}),[e]),{data:n,isLoading:l}}(n,l),d=c.data,m=c.isLoading;return(0,s.jsxs)("div",{className:"home-container",children:[(0,s.jsxs)("div",{className:"home-container__header",children:[(0,s.jsx)("h1",{children:"Covid Data Visualization"}),(0,s.jsx)(a.Z,{onClick:function(){return l(!n)},children:"Refresh Data"})]}),!d||m?(0,s.jsx)(i.Z,{loading:!0,active:!0,paragraph:!0}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{global:null==d?void 0:d.Global}),(0,s.jsx)(u,{countriesData:null==d?void 0:d.Countries})]})]})},w=function(){return(0,s.jsx)(v,{})};r(63),n.render((0,s.jsx)(w,{}),document.getElementById("root"))}},e=>{e.O(0,[293,387,19,379,670,279,612,172,532,716,23],(()=>(977,e(e.s=977)))),e.O()}]);