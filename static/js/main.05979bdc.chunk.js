(this.webpackJsonpappvelox=this.webpackJsonpappvelox||[]).push([[0],{19:function(e,a,t){e.exports=t(31)},24:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),l=t(16),s=t.n(l),r=t(4),i=(t(24),t(2)),m=t(7);var _=function(e){var a=e.text;return n.a.createElement("button",{className:"button"},a)};var o=function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("p",{className:"footer__text"},"\u041f\u043e\u043c\u043e\u0449\u044c"),n.a.createElement("img",{className:"footer__img",src:"footer-img.png"}))};var d=function(){var e=n.a.useState(!0),a=Object(m.a)(e,2),t=a[0],c=a[1],l=n.a.useState(!1),s=Object(m.a)(l,2),i=s[0],d=s[1],p=n.a.useState(!1),E=Object(m.a)(p,2),u=E[0],h=E[1],N=n.a.useState(!1),v=Object(m.a)(N,2),f=v[0],k=v[1],y=n.a.useState(!1),g=Object(m.a)(y,2),b=g[0],O=g[1];return n.a.createElement("aside",{className:"aside"},n.a.createElement("h2",{className:"aside__logo"},"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"),n.a.createElement("ul",{className:"aside__list"},n.a.createElement("li",{className:"aside__item aside__item_type_profile ".concat(t&&"aside__item_type_active")},n.a.createElement(r.b,{to:"/",className:"aside__link ".concat(t&&"aside__link_type_active"),onClick:function(){c(!0),d(!1),h(!1),k(!1),O(!1)}},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),n.a.createElement("li",{className:"aside__item aside__item_type_doc ".concat(i&&"aside__item_type_active")},n.a.createElement(r.b,{to:"/doc",className:"aside__link ".concat(i&&"aside__link_type_active"),onClick:function(){d(!0),c(!1),h(!1),k(!1),O(!1)}},"\u0412\u0440\u0430\u0447\u0438 \u0438 \u043a\u043b\u0438\u043d\u0438\u043a\u0438")),n.a.createElement("li",{className:"aside__item aside__item_type_message ".concat(u&&"aside__item_type_active")},n.a.createElement(r.b,{to:"/message",className:"aside__link ".concat(u&&"aside__link_type_active"),onClick:function(){h(!0),d(!1),c(!1),k(!1),O(!1)}},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")),n.a.createElement("li",{className:"aside__item aside__item_type_test ".concat(f&&"aside__item_type_active")},n.a.createElement(r.b,{to:"/test",className:"aside__link ".concat(f&&"aside__link_type_active"),onClick:function(){k(!0),h(!1),d(!1),c(!1),O(!1)}},"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435")),n.a.createElement("li",{className:"aside__item aside__item_type_info ".concat(b&&"aside__item_type_active")},n.a.createElement(r.b,{to:"/info",className:"aside__link ".concat(b&&"aside__link_type_active"),onClick:function(){O(!0),h(!1),d(!1),c(!1),k(!1)}},"\u041f\u043e\u043b\u0435\u0437\u043d\u043e \u0437\u043d\u0430\u0442\u044c"))),n.a.createElement(_,{text:"\u041f\u043e\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"}),n.a.createElement(o,null))};var p=function(){return n.a.createElement("header",{className:"header"},n.a.createElement("h1",{className:"header__title"},"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"),n.a.createElement("nav",{className:"header__navbar"},n.a.createElement("ul",{className:"header__list"},n.a.createElement("li",{className:"header__item"},n.a.createElement("a",{href:"#",className:"header__link header__link_type_search"})),n.a.createElement("li",{className:"header__item"},n.a.createElement("a",{href:"#",className:"header__link header__link_type_bell"})),n.a.createElement("li",{className:"header__item"},n.a.createElement("a",{href:"#",className:"header__link header__link_type_eye"})),n.a.createElement("li",{className:"header__item"},n.a.createElement("a",{href:"#",className:"header__link header__link_type_profile"})),n.a.createElement("li",{className:"header__item"},n.a.createElement("a",{href:"#",className:"header__link header__link_type_arrow"})))))};var E=function(e){var a=e.time,t=e.name,c=e.hospital,l=e.spec,s=e.src;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card__info"},n.a.createElement("h2",{className:"card__title"},a),n.a.createElement("p",{className:"card__text"},c),n.a.createElement("div",{className:"card__wrap"},n.a.createElement("img",{className:"card__image",src:s}),n.a.createElement("div",{className:"card__doc-info"},n.a.createElement("h3",{className:"card__name"},t),n.a.createElement("p",{className:"card__speciality"},l)))),n.a.createElement(_,{text:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"}))};var u=function(e){var a=e.data;return n.a.createElement("div",{className:"profile-card"},n.a.createElement("h2",{className:"profile-card__title"},"\u0417\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u043f\u0440\u0438\u0435\u043c"),n.a.createElement("div",{className:"profile-card__wrap"},n.a.createElement(E,{time:a[0].time,name:a[0].name,hospital:a[0].hospital,spec:a[0].speciality,src:a[0].url}),n.a.createElement(E,{time:a[1].time,name:a[1].name,hospital:a[1].hospital,spec:a[1].speciality,src:a[1].url}),n.a.createElement("p",{className:"appointment__count"},"\u0415\u0449\u0435 ",a.length-2," \u0437\u0430\u043f\u0438\u0441\u0438 ",n.a.createElement(r.b,{to:"/all-sign",className:"appointment__link"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))))};var h=function(e){var a=e.title,t=e.text,c=e.name,l=e.isOn,s=e.handleMouseEnter,r=e.handleMouseLeave;return n.a.createElement("div",{className:"e-card",onMouseOver:s,onMouseLeave:r},n.a.createElement("div",{className:"e-card__image e-card__image_type_".concat(c," ").concat(l&&"e-card__image_type_active")}),n.a.createElement("div",{className:"e-card__info ".concat(l&&"e-card__info_type_active")},n.a.createElement("h2",{className:"e-card__title ".concat(l&&"e-card__title_type_active")},a),"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0435"===a?n.a.createElement("ul",{className:"e-card__list"},n.a.createElement("li",{className:"e-card__list-item e-card__text"},"\u0412\u0430\u0448\u0438 \u043b\u0438\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"),n.a.createElement("li",{className:"e-card__list-item e-card__text"},"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438 \u0432\u0440\u0430\u0447\u0435\u0439"),n.a.createElement("li",{className:"e-card__list-item e-card__text"},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0431\u043e\u043b\u0435\u0437\u043d\u0435\u0439")):n.a.createElement("p",{className:"e-card__text"},t)))};var N=function(){var e=n.a.useState(!1),a=Object(m.a)(e,2),t=a[0],c=a[1],l=n.a.useState(!1),s=Object(m.a)(l,2),r=s[0],i=s[1],_=n.a.useState(!1),o=Object(m.a)(_,2),d=o[0],p=o[1],E=n.a.useState(!1),u=Object(m.a)(E,2),N=u[0],v=u[1];function f(){c(!1),i(!1),p(!1),v(!1)}return n.a.createElement("div",{className:"profile-card patient-card"},n.a.createElement("h2",{className:"profile-card__title"},"\u0417\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u043f\u0440\u0438\u0435\u043c"),n.a.createElement("div",{className:"profile-card__wrap patient-card__wrap"},n.a.createElement(h,{title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0435",name:"info",isOn:t,handleMouseEnter:function(){c(!0)},handleMouseLeave:f}),n.a.createElement(h,{title:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0430\u043d\u0430\u043b\u0438\u0437\u043e\u0432",text:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0437\u043d\u0430\u0442\u044c \u0437\u0434\u0435\u0441\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0441\u0432\u043e\u0438\u0445 \u0430\u043d\u0430\u043b\u0438\u0437\u043e\u0432",name:"test",isOn:r,handleMouseEnter:function(){i(!0)},handleMouseLeave:f}),n.a.createElement(h,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e",text:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u0432 \u0441\u0432\u043e\u044e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443\u044e \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0443\u044e \u043a\u0430\u0440\u0442\u0443 \u043d\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",name:"add",isOn:d,handleMouseEnter:function(){p(!0)},handleMouseLeave:f}),n.a.createElement(h,{title:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u0440\u0438\u0435\u043c\u043e\u0432",text:"\u0412\u0441\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u0443\u0441\u043b\u0443\u0433\u0430\u0445 \u0437\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043c\u044f \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0437\u0434\u0435\u0441\u044c",name:"history",isOn:N,handleMouseEnter:function(){v(!0)},handleMouseLeave:f})))},v=[{name:"\u041c\u0430\u043b\u0443\u0448\u043a\u043e \u0422. \u041d.",speciality:"\u0425\u0438\u0440\u0443\u0440\u0433\u0438\u044f",hospital:'\u0421\u041f\u0411 \u0413\u0411\u0423\u0417 "\u0413\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043f\u043e\u043b\u0438\u043a\u043b\u0438\u043d\u0438\u043a\u0430 \u211625", \u043f\u0440. \u0421\u043e\u043b\u0438\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u0438, \u0434. 1, \u043a. 1, \u043b\u0438\u0442. \u0410',time:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a 15.06.20 | 15:30",url:"https://lh3.googleusercontent.com/proxy/ImqF_4qa_WqMyHI98PQk-pnrSbnocOckZbYZht4OWdaWmLdTYa3EZLmHsskJOAnEuL5ZTrsrTd5W_E5ok32NJWAzXLX5"},{name:"\u0425\u0430\u0440\u044c\u043a\u043e\u0432 \u0412. \u0421.",speciality:"\u0422\u0435\u0440\u0430\u043f\u0435\u0432\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0435",hospital:'\u0421\u041f\u0411 \u0413\u0411\u0423\u0417 "\u0413\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043f\u043e\u043b\u0438\u043a\u043b\u0438\u043d\u0438\u043a\u0430 \u211625", \u043f\u0440. \u0421\u043e\u043b\u0438\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u0438, \u0434. 1, \u043a. 1, \u043b\u0438\u0442. \u0410',time:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a 15.06.20 | 18:30",url:"https://zentromed.com/tmp/img/03uro16_1.jpg"},{name:"\u041c\u0430\u043b\u0443\u0448\u043a\u043e \u0422. \u041d.",speciality:"\u0425\u0438\u0440\u0443\u0440\u0433\u0438\u044f",hospital:'\u0421\u041f\u0411 \u0413\u0411\u0423\u0417 "\u0413\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043f\u043e\u043b\u0438\u043a\u043b\u0438\u043d\u0438\u043a\u0430 \u211625", \u043f\u0440. \u0421\u043e\u043b\u0438\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u0438, \u0434. 1, \u043a. 1, \u043b\u0438\u0442. \u0410',time:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a 15.06.20 | 15:30",url:"https://lh3.googleusercontent.com/proxy/ImqF_4qa_WqMyHI98PQk-pnrSbnocOckZbYZht4OWdaWmLdTYa3EZLmHsskJOAnEuL5ZTrsrTd5W_E5ok32NJWAzXLX5"},{name:"\u0425\u0430\u0440\u044c\u043a\u043e\u0432 \u0412. \u0421.",speciality:"\u0422\u0435\u0440\u0430\u043f\u0435\u0432\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0435",hospital:'\u0421\u041f\u0411 \u0413\u0411\u0423\u0417 "\u0413\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043f\u043e\u043b\u0438\u043a\u043b\u0438\u043d\u0438\u043a\u0430 \u211625", \u043f\u0440. \u0421\u043e\u043b\u0438\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u0438, \u0434. 1, \u043a. 1, \u043b\u0438\u0442. \u0410',time:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a 15.06.20 | 18:30",url:"https://zentromed.com/tmp/img/03uro16_1.jpg"},{name:"\u041c\u0430\u043b\u0443\u0448\u043a\u043e \u0422. \u041d.",speciality:"\u0425\u0438\u0440\u0443\u0440\u0433\u0438\u044f",hospital:'\u0421\u041f\u0411 \u0413\u0411\u0423\u0417 "\u0413\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043f\u043e\u043b\u0438\u043a\u043b\u0438\u043d\u0438\u043a\u0430 \u211625", \u043f\u0440. \u0421\u043e\u043b\u0438\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u0438, \u0434. 1, \u043a. 1, \u043b\u0438\u0442. \u0410',time:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a 15.06.20 | 15:30",url:"https://lh3.googleusercontent.com/proxy/ImqF_4qa_WqMyHI98PQk-pnrSbnocOckZbYZht4OWdaWmLdTYa3EZLmHsskJOAnEuL5ZTrsrTd5W_E5ok32NJWAzXLX5"}],f=t(18);t(30);var k=function(e){var a=e.data,t=Object(c.useState)(new Date),l=Object(m.a)(t,2),s=l[0],i=l[1];return n.a.createElement("div",{className:"all-sign"},n.a.createElement("h2",{className:"all-sign__title"},n.a.createElement(r.b,{to:"/",className:"all-sign__link"},"\u041c\u043e\u0438 \u0437\u0430\u043f\u0438\u0441\u0438")),n.a.createElement("div",{className:"all-sign__wrap"},n.a.createElement("div",{className:"all-sign__cards"},a.map((function(e,a){return n.a.createElement(E,{key:a,time:e.time,name:e.name,hospital:e.hospital,spec:e.spec,src:e.url})}))),n.a.createElement("div",{className:"all-sign__calendar"},n.a.createElement(f.a,{onChange:function(e){i(e)},prev2Label:"",next2Label:"",className:"react-calendar",value:s}))))};var y=function(){return n.a.createElement("div",{className:"not-found"},n.a.createElement("h2",{className:"not-found__title"},"404 not found"))};var g=function(){return n.a.createElement("div",{className:"page"},n.a.createElement(d,null),n.a.createElement("div",{className:"wrap"},n.a.createElement(p,null),n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/"},n.a.createElement(u,{data:v}),n.a.createElement(N,null)),n.a.createElement(i.a,{path:"/all-sign"},n.a.createElement(k,{data:v})),n.a.createElement(i.a,{path:"*"},n.a.createElement(y,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(r.a,null,n.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.05979bdc.chunk.js.map