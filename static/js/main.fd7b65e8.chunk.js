(this["webpackJsonpauth-and-graph"]=this["webpackJsonpauth-and-graph"]||[]).push([[0],{110:function(e,t,a){},115:function(e,t,a){},272:function(e,t,a){},273:function(e,t,a){},274:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(2),c=a.n(r),s=a(34),l=a.n(s),u=(a(110),a(9)),o=a(23),i=a(7),d=a(76),j=a(99);function b(e){var t=e.children,a=e.className,r=Object(j.a)(e,["children","className"]),c="btn btn-primary ".concat(a," ");return Object(n.jsx)("button",Object(d.a)(Object(d.a)({className:c},r),{},{children:t}))}function h(e){var t=e.log,a=e.logOut;return t?Object(n.jsx)(b,{className:"d-block m-2",onClick:a,children:"\u0412\u044b\u0439\u0442\u0438"}):Object(n.jsx)(o.b,{to:"/auth",className:"btn btn-primary d-block m-2",children:"\u0412\u043e\u0439\u0442\u0438"})}function m(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o.b,{className:"btn btn-primary m-2",to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(n.jsx)(o.b,{className:"btn btn-primary m-2",to:"/graph",children:"\u0413\u0440\u0430\u0444\u0438\u043a"})]})}function O(e){var t=e.log,a=e.logOut;return Object(n.jsxs)("header",{className:"d-flex justify-content-between align-items-center line border-bottom",children:[Object(n.jsx)("nav",{className:"nav",children:Object(n.jsx)(m,{})}),Object(n.jsx)(h,{log:t,logOut:a})]})}var f=a(121),g=a(35),p=a(73),x=a.n(p);a(115),a(116);function v(e){var t=e.loading,a=e.checkDateForChangeURL,r=e.endDateHandler,c=e.startDateHandler,s=e.startDate,l=e.endDate;return Object(n.jsxs)("div",{className:"w-100 d-flex align-items-center",children:[Object(n.jsx)(x.a,{className:"form-control m-1",selected:s,onChange:function(e){return c(e)},selectsStart:!0,startDate:s,endDate:l,minDate:new Date(2010,10,10),maxDate:Object(f.default)(new Date,1),placeholderText:"\u041e\u0442",dateFormat:"dd/MM/yyyy",disabled:t}),Object(n.jsx)(x.a,{className:"form-control ml-3 ",selected:l,onChange:function(e){return r(e)},selectsEnd:!0,startDate:s,endDate:l,minDate:s,maxDate:Object(g.default)(s,15),placeholderText:"\u0414\u043e",dateFormat:"dd/MM/yyyy",disabled:t}),Object(n.jsx)(b,{onClick:function(){return a()},className:"ml-5",disabled:!(s&&l)||t,children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e"})]})}function y(e){var t=e.children;return Object(n.jsx)("h2",{className:"text-center",children:t})}function D(e){var t=e.error;return Object(n.jsx)(y,{children:t?"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u0441\u043d\u043e\u0432\u0430":"\u0414\u0430\u043d\u043d\u044b\u0445 \u0437\u0430 \u044d\u0442\u043e\u0442 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u043a \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})}var N=a(103);a(272);function w(e){var t=e.dataUSD,a=e.dataEUR,r=e.err,c=e.data,s=e.valuteArray,l=e.valuteHandler,u=e.valute;return 0===t.length||0===a.length||r?Object(n.jsx)(D,{error:r}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("select",{className:"custom-select",onChange:l,value:u,children:s.map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)}))}),Object(n.jsx)("div",{className:"custom-line",children:Object(n.jsx)(N.Line,{data:c})})]})}function S(e){var t=e.userName,a=void 0===t?"\u0432\u044b \u043d\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043b\u0438\u0441\u044c":t,c=Object(r.useState)([]),s=Object(u.a)(c,2),l=s[0],o=s[1],i=Object(r.useState)([]),d=Object(u.a)(i,2),j=d[0],b=d[1],h=Object(r.useState)("USD/RUB"),m=Object(u.a)(h,2),O=m[0],f=m[1],g=Object(r.useState)(new Date(2020,2,2)),p=Object(u.a)(g,2),x=p[0],D=p[1],N=Object(r.useState)(new Date(2020,2,14)),S=Object(u.a)(N,2),U=S[0],R=S[1],k=Object(r.useState)(!0),F=Object(u.a)(k,2),C=F[0],M=F[1],E=Object(r.useState)(!1),L=Object(u.a)(E,2),H=L[0],B=L[1],T=Object(r.useState)("https://cors-anywhere.herokuapp.com/http://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=02/03/2020&date_req2=14/03/2020&VAL_NM_RQ="),_=Object(u.a)(T,2),A=_[0],q=_[1],I=Object(r.useState)(!0),J=Object(u.a)(I,2),P=J[0],V=J[1],Q=function(e,t){return fetch(e).then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"application/xml")})).then((function(e){return e.getElementsByTagName("Record")})).then((function(e){for(var t=[],a=0;a<e.length;a++)t.push({date:e[a].getAttribute("Date"),value:e[a].getElementsByTagName("Value")[0].innerHTML.replace(",","."),nominal:e[a].getElementsByTagName("Nominal")[0].innerHTML});return t})).then((function(e){return t(e)})).catch((function(e){console.log(e),B(!0)}))};Object(r.useEffect)((function(){B(!1),V(!0),o([]),b([]),f("USD/RUB"),Promise.all([Q("".concat(A,"R01235"),o),Q("".concat(A,"R01239"),b)]).finally((function(){return V(!1)}))}),[A]),Object(r.useEffect)((function(){Y()}),[C]);var X=function(e){var t={};switch(e){case"USD/RUB":t={date:l.map((function(e){return e.date})),value:l.map((function(e){return e.value}))};break;case"EUR/RUB":t={date:j.map((function(e){return e.date})),value:j.map((function(e){return e.value}))};break;case"EUR/USD":t={date:l.map((function(e){return e.date})),value:j.map((function(e,t){return(e.value/l[t].value).toFixed(4)}))};break;default:t={date:l.map((function(e){return e.date})),value:l.map((function(e){return e.value}))}}return t},G=function(e){return{year:e.getFullYear(),month:e.getMonth()>=9?e.getMonth()+1:"0"+(e.getMonth()+1),day:e.getDate()>=10?e.getDate():"0"+e.getDate()}},Y=function(){var e=G(x),t=G(U);q("https://cors-anywhere.herokuapp.com/http://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=".concat(e.day,"/").concat(e.month,"/").concat(e.year,"&date_req2=").concat(t.day,"/").concat(t.month,"/").concat(t.year,"&VAL_NM_RQ="))},z={labels:X(O).date,datasets:[{label:O,data:X(O).value,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(y,{children:["\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c, ",a]}),Object(n.jsx)(v,{loading:P,checkDateForChangeURL:Y,endDateHandler:function(e){R(e),e&&M(!C)},startDateHandler:function(e){D(e),R(null)},startDate:x,endDate:U}),P?Object(n.jsx)("h3",{className:"text-center",children:"Loading..."}):Object(n.jsx)(w,{dataUSD:l,dataEUR:j,err:H,data:z,valuteArray:["USD/RUB","EUR/RUB","EUR/USD"],valuteHandler:function(e){f(e.target.value)},valute:O})]})}function U(e){var t=e.value,a=e.placeholder,r=e.id,c=e.handler,s=e.type,l=void 0===s?"text":s;return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:r,children:a}),Object(n.jsx)("input",{type:l,className:"form-control",id:r,placeholder:a,value:t,onChange:function(e){return c(e)}})]})}function R(e){var t=e.children;return Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:Object(n.jsx)("p",{className:"text-center mb-0",children:t})})}var k=a(104);function F(){var e=localStorage.getItem("user");return e?JSON.parse(e):[]}function C(e,t){var a=function(){var e=F();return[].concat(Object(k.a)(e),[{name:"Alex",password:"1234"},{name:"Dmitriy",password:"qwerty"},{name:"admin",password:"password"}])}().filter((function(t){return t.name===e}));return a.length>0&&!!a.find((function(e){return e.password===t}))}a(273);function M(e){var t=e.logHandler,a=e.nameHandler,c=Object(r.useState)(""),s=Object(u.a)(c,2),l=s[0],o=s[1],i=Object(r.useState)(""),d=Object(u.a)(i,2),j=d[0],h=d[1],m=Object(r.useState)(!1),O=Object(u.a)(m,2),f=O[0],g=O[1],p=function(e,t){!function(e,t){var a=F();a.push({name:e,password:t}),localStorage.setItem("user",JSON.stringify(a))}(e,t),y(),x()};Object(r.useEffect)((function(){var e;return f&&(e=setTimeout((function(){return g(!1)}),3500)),function(){return clearTimeout(e)}}),[f]);var x=function(){o(""),h("")},v=function(){return!(l.length>0&&j.length>0)},y=function(){C(l,j)?(t(),a(l),x()):g(!0)};return Object(n.jsxs)(n.Fragment,{children:[f?Object(n.jsx)(R,{children:" \u0418\u043c\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430"}):"",Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)(U,{value:l,placeholder:"\u0418\u043c\u044f",id:"nameLabel",handler:function(e){o(e.target.value)}}),Object(n.jsx)(U,{type:"password",value:j,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"passLabel",handler:function(e){h(e.target.value)}}),Object(n.jsx)(b,{type:"submit",className:"w-100 mb-2",onClick:y,disabled:v(),children:"\u0412\u043e\u0439\u0442\u0438"}),Object(n.jsx)(b,{type:"submit",className:"w-100",onClick:function(){return p(l,j)},disabled:v(),children:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})}function E(e){var t=e.name;return Object(n.jsxs)("h2",{className:"text-center pt-2 m-2",children:["\u041f\u0440\u0438\u0432\u0435\u0442",t?", ".concat(t):"","! \u043d\u0430 \u044d\u0442\u043e\u043c \u0441\u0430\u0439\u0442\u0435 \u0442\u044b \u0441\u043c\u043e\u0436\u0435\u0448\u044c \u043f\u0440\u043e\u0439\u0442\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e \u0438 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 \u0433\u0440\u0430\u0444\u0438\u043a \u0432\u0430\u043b\u044e\u0442 \u0437\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f"]})}var L=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(),l=Object(u.a)(s,2),d=l[0],j=l[1],b=function(){c((function(e){return!e})),j()};return Object(n.jsxs)(o.a,{basename:"/react-authAndGraph",children:[Object(n.jsx)(O,{logOut:b,log:a}),Object(n.jsxs)(i.d,{children:[a?Object(n.jsx)(i.a,{from:"/auth",to:"/graph"}):"",Object(n.jsx)(i.b,{exact:!0,path:"/",children:Object(n.jsx)(E,{name:d})}),Object(n.jsx)(i.b,{path:"/graph",children:Object(n.jsx)(S,{userName:d})}),Object(n.jsx)(i.b,{path:"/auth",children:Object(n.jsx)(M,{log:a,logHandler:b,nameHandler:function(e){j(e)},userName:d})})]})]})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,280)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root")),H()}},[[274,1,2]]]);
//# sourceMappingURL=main.fd7b65e8.chunk.js.map