(this.webpackJsonpmath01=this.webpackJsonpmath01||[]).push([[0],{21:function(e,a,t){e.exports=t(32)},26:function(e,a,t){},27:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(7),r=t.n(o),c=(t(26),t(12)),m=t(13),u=t(14),s=t(20),i=t(19),p=t(18),h=(t(27),t(28),t(34)),g=t(37),E=t(36),_=t(16),f=t(38),v=t(35);function d(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(e<a)return null;if(e===a)return e;var t=Math.floor(Math.random()*Math.floor(e)+1);return t<a&&(t=d(e,a)),t}var C=[{value:"1",label:"\u52a0\u6cd5"},{value:"2",label:"\u51cf\u6cd5"},{value:"3",label:"\u52a0\u51cf\u6df7\u5408"}],y=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).onClickPrint=function(){window.print()},n.changeInput=function(e,a){console.log("e.target.value",e.target.value),n.setState(Object(c.a)({},a,e.target.value))},n.getTableContent=function(){for(var e=n.state,a=e.howMany,t=e.scope,o=[],r=0;r<a/5;r++){var c=[],m=void 0;for(m=0;m<5;m++)c.push(n.getTd(t));o.push(l.a.createElement("tr",{className:"medium-font-2"},c))}n.setState({tableContent:o})},n.getTd=function(){var e=n.state.scope;if(!e)return null;var a=function e(a){var t=d(2),n=d(a,20),l=d(n-1),o=n-l;return o<10?e(a):1===t?{a:l,b:o,op1:t}:{a:n,b:o,op1:t}}(e);return l.a.createElement("td",null,a.a," ",1===a.op1?"+":"-"," ",a.b," =")},n.onClickCreate=function(){n.getTableContent()},n.onClickSaveParams=function(){var e=n.state,a=e.scope,t=e.howMany,l=e.type,o=e.class01,r=e.name,c=e.time,m=e.copy;localStorage.setItem("scope",a),localStorage.setItem("howMany",t),localStorage.setItem("type",JSON.stringify(l)),localStorage.setItem("class01",o),localStorage.setItem("name",r),localStorage.setItem("time",c),localStorage.setItem("copy",m)},n.handleOnChange=function(e){n.setState({type:e})},n.state={scope:localStorage.getItem("scope")||100,howMany:localStorage.getItem("howMany")||100,type:JSON.parse(localStorage.getItem("type"))||[C[0],C[1]],class01:localStorage.getItem("class01")||"",name:localStorage.getItem("name")||"",time:localStorage.getItem("time")||5,copy:localStorage.getItem("copy")||3,tableContent:[]},n}return Object(u.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.scope,n=a.howMany,o=a.type,r=a.class01,c=a.name,m=a.time,u=a.copy,s=a.tableContent;return l.a.createElement("div",{className:"App"},l.a.createElement(h.a,null,l.a.createElement(g.a,{className:"no-print"},l.a.createElement(g.a.Header,{className:"text-center large-font"},"\u52a0\u51cf\u6cd5\u53e3\u7b97\u7ec3\u4e60\u9898\u5728\u7ebf\u751f\u6210\u5de5\u5177"),l.a.createElement(g.a.Body,null,l.a.createElement(E.a,null,l.a.createElement(E.a.Row,null,l.a.createElement(E.a.Group,{as:_.a,controlId:"formScope"},l.a.createElement(E.a.Label,null,"\u8303\u56f4: ",t,"\u4ee5\u5185"),l.a.createElement(E.a.Control,{value:t,onChange:function(a){return e.changeInput(a,"scope")}})),l.a.createElement(E.a.Group,{as:_.a,controlId:"formHowMany"},l.a.createElement(E.a.Label,null,"\u9898\u6570"),l.a.createElement(E.a.Control,{placeholder:"100",value:n,onChange:function(a){return e.changeInput(a,"howMany")}})),l.a.createElement(E.a.Group,{as:_.a,controlId:"formtype"},l.a.createElement(E.a.Label,null,"\u9898\u578b"),l.a.createElement(p.a,{options:C,onChange:this.handleOnChange,name:"type",isMulti:!0,value:o}))),l.a.createElement(E.a.Row,null,l.a.createElement(E.a.Group,{as:_.a,controlId:"formName"},l.a.createElement(E.a.Label,null,"\u59d3\u540d"),l.a.createElement(E.a.Control,{value:c,onChange:function(a){return e.changeInput(a,"name")}})),l.a.createElement(E.a.Group,{as:_.a,controlId:"formClass"},l.a.createElement(E.a.Label,null,"\u73ed\u7ea7"),l.a.createElement(E.a.Control,{value:r,onChange:function(a){return e.changeInput(a,"class01")}})),l.a.createElement(E.a.Group,{as:_.a,controlId:"formTime"},l.a.createElement(E.a.Label,null,"\u65f6\u95f4\uff08\u5206\u949f\uff09"),l.a.createElement(E.a.Control,{value:m,onChange:function(a){return e.changeInput(a,"time")}})),l.a.createElement(E.a.Group,{as:_.a,controlId:"formCopy"},l.a.createElement(E.a.Label,null,"\u4efd\u6570"),l.a.createElement(E.a.Control,{placeholder:"3",value:u,onChange:function(a){return e.changeInput(a,"copy")}})))),l.a.createElement("div",{className:"mb-2"},l.a.createElement(f.a,{variant:"primary",size:"lg",onClick:this.onClickSaveParams},"\u4fdd\u5b58\u53c2\u6570")," ",l.a.createElement(f.a,{variant:"primary",size:"lg",onClick:this.onClickCreate},"\u751f\u6210\u4e60\u9898")," ",l.a.createElement(f.a,{variant:"primary",size:"lg",onClick:this.onClickPrint},"\u6253\u5370")))),l.a.createElement(g.a,{id:"printme"},l.a.createElement(g.a.Header,null),l.a.createElement(g.a.Body,null,l.a.createElement(v.a,{responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:5,className:"text-center large-font"},t,"\u4ee5\u5185\u52a0\u51cf\u6cd5\u53e3\u7b97\u7ec3\u4e60\u9898")),l.a.createElement("tr",{className:"medium-font"},l.a.createElement("th",null,"\u59d3\u540d\uff1a",c||"____________"),l.a.createElement("th",null,"\u73ed\u7ea7\uff1a",r||"____________"),l.a.createElement("th",null,"20___\u5e74___\u6708___\u65e5"),l.a.createElement("th",null,"\u7528\u65f6\uff1a",m||"______"," \u5206\u949f"),l.a.createElement("th",null,"\u505a\u5bf9\uff1a_____/",n," \u9898"))),l.a.createElement("tbody",null,s))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.4f6850f4.chunk.js.map