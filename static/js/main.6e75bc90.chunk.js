(this["webpackJsonpauth-and-graph"]=this["webpackJsonpauth-and-graph"]||[]).push([[0],{108:function(e,t,n){},269:function(e,t,n){},270:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(2),r=n.n(c),s=n(34),l=n.n(s),o=(n(108),n(9)),u=n(29),i=n(7);function d(e){var t=e.log,n=e.logOut;return Object(a.jsxs)("header",{className:"d-flex justify-content-between align-items-center line",children:[Object(a.jsxs)("nav",{className:"nav",children:[Object(a.jsx)(u.b,{className:"btn btn-primary",to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(a.jsx)(u.b,{className:"btn btn-primary",to:"/graph",children:"\u0413\u0440\u0430\u0444\u0438\u043a"})]}),t?Object(a.jsx)("button",{className:"btn btn-primary d-block",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"}):Object(a.jsx)(u.b,{to:"/",className:"btn btn-primary d-block",children:"\u0412\u043e\u0439\u0442\u0438"})]})}var b=n(50),j=n(100),m=n(213),h=n(35),f=n(74),O=n.n(f);n(208);function p(e){var t=e.userName,n=void 0===t?"\u0432\u044b \u043d\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043b\u0438\u0441\u044c":t,r=Object(c.useState)([]),s=Object(o.a)(r,2),l=s[0],u=s[1],i=Object(c.useState)([]),d=Object(o.a)(i,2),f=d[0],p=d[1],g=Object(c.useState)("USD/RUB"),x=Object(o.a)(g,2),v=x[0],y=x[1],N=Object(c.useState)(new Date(2020,2,2)),w=Object(o.a)(N,2),S=w[0],D=w[1],M=Object(c.useState)(new Date(2020,2,14)),k=Object(o.a)(M,2),R=k[0],U=k[1],C=Object(c.useState)("https://cors-anywhere.herokuapp.com/http://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=02/03/2020&date_req2=14/03/2020&VAL_NM_RQ="),F=Object(o.a)(C,2),L=F[0],E=F[1],B=Object(c.useState)(!0),T=Object(o.a)(B,2),_=T[0],A=T[1],H=function(e,t){return fetch(e).then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"application/xml")})).then((function(e){return e.getElementsByTagName("Record")})).then((function(e){for(var n=function(n){t((function(t){return[].concat(Object(b.a)(t),[{date:e[n].getAttribute("Date"),value:e[n].getElementsByTagName("Value")[0].innerHTML.replace(",","."),nominal:e[n].getElementsByTagName("Nominal")[0].innerHTML}])}))},a=0;a<e.length;a++)n(a)})).catch((function(e){return console.log(e)}))};Object(c.useEffect)((function(){A(!0),u([]),p([]),H("".concat(L,"R01235"),u),H("".concat(L,"R01239"),p).finally((function(){return A(!1)}))}),[L]);var q=function(e){var t={};switch(e){case"USD/RUB":t={date:l.map((function(e){return e.date})),value:l.map((function(e){return e.value}))};break;case"EUR/RUB":t={date:f.map((function(e){return e.date})),value:f.map((function(e){return e.value}))};break;case"EUR/USD":t={date:l.map((function(e){return e.date})),value:f.map((function(e,t){return(e.value/l[t].value).toFixed(4)}))};break;default:t={date:l.map((function(e){return e.date})),value:l.map((function(e){return e.value}))}}return t},I=function(e){return{year:e.getFullYear(),month:e.getMonth()>=9?e.getMonth()+1:"0"+(e.getMonth()+1),day:e.getDate()>=10?e.getDate():"0"+e.getDate()}},J={labels:q(v).date,datasets:[{label:v,data:q(v).value,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h2",{className:"text-center pt-2",children:["\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c, ",n]}),Object(a.jsxs)("div",{className:"w-100 d-flex align-items-center",children:[Object(a.jsx)(O.a,{className:"form-control ml-3",selected:S,onChange:function(e){return function(e){D(e),U(null)}(e)},selectsStart:!0,startDate:S,endDate:R,minDate:new Date(2010,10,10),maxDate:Object(m.default)(new Date,1),placeholderText:"\u041e\u0442",dateFormat:"dd/MM/yyyy"}),Object(a.jsx)(O.a,{className:"form-control ml-3 ",selected:R,onChange:function(e){return U(e)},selectsEnd:!0,startDate:S,endDate:R,minDate:S,maxDate:Object(h.default)(S,15),placeholderText:"\u0414\u043e",dateFormat:"dd/MM/yyyy"}),Object(a.jsx)("button",{onClick:function(){if(S&&R){var e=I(S),t=I(R);E("https://cors-anywhere.herokuapp.com/http://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=".concat(e.day,"/").concat(e.month,"/").concat(e.year,"&date_req2=").concat(t.day,"/").concat(t.month,"/").concat(t.year,"&VAL_NM_RQ="))}},className:"btn btn-primary ml-5",disabled:!(S&&R),children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e"})]}),_?Object(a.jsx)("h3",{className:"text-center",children:"Loading..."}):l.length>1||f.length>1?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("select",{value:v,onChange:function(e){y(e.target.value)},className:"custom-select",children:["USD/RUB","EUR/RUB","EUR/USD"].map((function(e){return Object(a.jsx)("option",{value:e,children:e},e)}))}),Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsx)(j.Line,{data:J})})]}):Object(a.jsx)("h2",{className:"text-center",children:"\u0414\u0430\u043d\u043d\u044b\u0445 \u0437\u0430 \u044d\u0442\u043e\u0442 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u043a \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})}function g(e){var t=e.value,n=e.placeholder,c=e.id,r=e.handler;return Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:c,children:n}),Object(a.jsx)("input",{type:"text",className:"form-control",id:c,placeholder:n,value:t,onChange:function(e){return r(e)}})]})}function x(){var e=localStorage.getItem("user");return e?JSON.parse(e):[]}function v(e,t){var n=function(){var e=x();return[].concat(Object(b.a)(e),[{name:"Alex",password:"1234"},{name:"Dmitriy",password:"qwerty"},{name:"admin",password:"password"}])}().filter((function(t){return t.name===e}));return n.length>0&&!!n.find((function(e){return e.password===t}))}function y(e){var t=e.log,n=e.logHandler,r=e.nameHandler,s=e.userName,l=Object(c.useState)(""),u=Object(o.a)(l,2),i=u[0],d=u[1],b=Object(c.useState)(""),j=Object(o.a)(b,2),m=j[0],h=j[1],f=Object(c.useState)(!1),O=Object(o.a)(f,2),p=O[0],y=O[1],N=function(e,t){!function(e,t){var n=x();console.log(n),n.push({name:e,password:t}),localStorage.setItem("user",JSON.stringify(n))}(e,t),D(),w()};Object(c.useEffect)((function(){p&&setTimeout((function(){return y(!1)}),3500)}),[p]);var w=function(){d(""),h("")},S=function(){return!(i.length>0&&m.length>0)},D=function(){v(i,m)?(n(),r(i),w()):y(!0)};return t?Object(a.jsxs)("h2",{className:"text-center pt-2",children:["\u0412\u044b \u0443\u0436\u0435 \u0432\u043e\u0448\u043b\u0438, ",s,"!"]}):Object(a.jsxs)(a.Fragment,{children:[p?Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:Object(a.jsx)("p",{className:"text-center mb-0",children:"\u0418\u043c\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430"})}):"",Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)(g,{value:i,placeholder:"\u0418\u043c\u044f",id:"nameLabel",handler:function(e){d(e.target.value)}}),Object(a.jsx)(g,{value:m,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"passLabel",handler:function(e){h(e.target.value)}}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary login-btn",onClick:D,disabled:S(),children:"\u0412\u043e\u0439\u0442\u0438"}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary login-btn",onClick:function(){return N(i,m)},disabled:S(),children:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})}n(269);var N=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(),l=Object(o.a)(s,2),b=l[0],j=l[1],m=function(){r((function(e){return!e})),j()};return Object(a.jsx)(u.a,{basename:"/react-authAndGraph",children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(d,{logOut:m,log:n}),Object(a.jsxs)(i.c,{children:[Object(a.jsx)(i.a,{exact:!0,path:"/",children:Object(a.jsx)(y,{log:n,logHandler:m,nameHandler:function(e){j(e)},userName:b})}),Object(a.jsx)(i.a,{path:"/graph",children:Object(a.jsx)(p,{userName:b})})]})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,276)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};l.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),w()}},[[270,1,2]]]);
//# sourceMappingURL=main.6e75bc90.chunk.js.map