(this["webpackJsonpunilanding-meta"]=this["webpackJsonpunilanding-meta"]||[]).push([[0],{11:function(e,t,a){e.exports=a(28)},16:function(e,t,a){},17:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),s=a.n(c),r=(a(16),a(4)),i=a(5),m=a(9),u=a(6),o=a(10),E=(a(17),a(7)),p=a.n(E),d=(a(25),function(e){var t=e.funnels,a=e.handleClick,n=e.input;return l.a.createElement("div",{className:"list-wrapper light",style:{height:"90vh",overflow:"hidden",direction:"rtl"}},l.a.createElement(p.a,null,l.a.createElement("ul",{className:"list"},n.length?n.map((function(e,t){return l.a.createElement("li",{onClick:a,className:"funnel-li",key:t},e.site)})):t.map((function(e,t){return l.a.createElement("li",{onClick:a,className:"funnel-li",key:t},e.site)})))))}),h=a(8),f=(a(26),function(e){var t=e.activeFunnel,a=e.configs;return l.a.createElement("div",{className:"funnel-data-wrapper"},l.a.createElement("div",{className:"bar"},t.is_active?l.a.createElement("div",{className:"status-wrapper"},l.a.createElement("span",{className:"status"},"Active "),l.a.createElement("div",{className:"dot green"})," "):l.a.createElement("div",{className:"status-wrapper"},l.a.createElement("span",{className:"status"},l.a.createElement("a",{href:"https://youtu.be/3fHLQmwZiSk?t=14"},"Ooops"),"  "),l.a.createElement("div",{className:"dot red"}))),l.a.createElement("div",{className:"screenshot-wrapper meta"},l.a.createElement("img",{src:t?"http://".concat(t.domain,"/assets/img/screenshot.png"):"https://cdn-st1.rtr-vesti.ru/p/xw_1004150.jpg",alt:"\xa0 Ooops https://www.youtube.com/watch?v=dQw4w9WgXcQ"})),l.a.createElement("div",{className:"meta-wrapper"},l.a.createElement("div",{className:"funnel-meta light meta"},l.a.createElement("p",{className:"tag"},l.a.createElement("b",null,"domain:")," ",t.domain),l.a.createElement("p",{className:"tag"},l.a.createElement("b",null,"active:")," ",t.is_active?"true":"false")),l.a.createElement("div",{className:"configs light meta"},l.a.createElement("div",{className:"tag"},"Title: ",a.PAGE_TITLE),l.a.createElement("div",{className:"tag"},"Template name: ",a.TEMPLATE_NAME),l.a.createElement("div",{className:"tag"},"Translation type: ",a.TRANSLATIONS_TYPE),l.a.createElement("div",{className:"tag"},"Templation mode: ",a.TRANSLATIONS_MODE),l.a.createElement("div",{className:"tag"},"Supported languages: ",l.a.createElement("ul",{className:"custom_map"},a.SUPPORTED_LANGUAGES.split(",").map((function(e,t){return l.a.createElement("li",{key:t,className:"custom_language"},e)})))),l.a.createElement("div",{className:"tag"},"Custom map languages: ",l.a.createElement("ul",{className:"custom_map"}," ",Object.entries(a.CUSTOM_MAP_LANGUAGES).map((function(e){var t=Object(h.a)(e,2),a=t[0],n=t[1];return l.a.createElement("li",{key:a,className:"custom_language"},a,":",n,"|")})))))))}),N=(a(27),function(e){var t=e.handleChange;return l.a.createElement("div",{className:"filter-wrapper"},l.a.createElement("input",{onChange:t,placeholder:"Enter funnel name",type:"text"}))}),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){fetch("https://bitcoin-blueprint-app.com/funnels").then((function(e){return e.json()})).then((function(e){return a.setState({funnels:e,activeFunnel:e[0]})}))},a.handleClick=function(e){var t=a.state.funnels.filter((function(t){return t.site===e.target.innerText}));a.setState({activeFunnel:t[0]})},a.handleChange=function(e){var t=a.state.funnels.filter((function(t){return t.site.includes(e.target.value)}));a.setState({input:t})},a.state={funnels:[],activeFunnel:{},input:[],configs:{PAGE_TITLE:"btc-traderapp.com",TEMPLATE_NAME:"btc-traderapp.com",TRANSLATIONS_TYPE:"JSON",TRANSLATIONS_MODE:"COUNTRY",SUPPORTED_LANGUAGES:"DA,DE-AT,DE-CH,DE,EN,ES,ET,FI,FO,FR,IT,LT,LV,NL,NO,PL,PT,RU,SK,SL,SV",CUSTOM_MAP_LANGUAGES:{MD:"RU",UA:"RU",GE:"RU",AT:"DE",CL:"ES",AR:"ES",BR:"PT",CO:"ES",CR:"ES",DO:"ES",EC:"ES",SV:"ES",MX:"ES",PA:"ES",PE:"ES",PR:"ES",VE:"ES",DK:"DA",CH:"DE",SE:"SV",BE:"FR"},CUSTOMER_ID:[3]}},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.funnels,a=e.activeFunnel,n=e.input,c=e.configs;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"total total_mob"},l.a.createElement("b",null,"Total:")," ",n.length?n.length:t.length),l.a.createElement("div",{className:"search-field"},l.a.createElement(N,{handleChange:this.handleChange}),l.a.createElement(d,{funnels:t,input:n,handleClick:this.handleClick}),l.a.createElement("div",{className:"total"},l.a.createElement("b",null,"Total:")," ",n.length?n.length:t.length)),l.a.createElement(f,{activeFunnel:a,configs:c}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.3f3d4c39.chunk.js.map