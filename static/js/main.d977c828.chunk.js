(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,n){},,function(e,n,t){e.exports=t(24)},,,,,function(e,n,t){},function(e,n,t){},,,,,,function(e,n){},function(e,n){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),c=t(8),r=t.n(c),i=(t(14),t(15),t(1)),o=t(4),u=t.n(o);t(23);function s(){var e=Object(a.useState)(""),n=Object(i.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)(),o=Object(i.a)(r,2),s=o[0],f=o[1],g=Object(a.useState)([]),d=Object(i.a)(g,2),m=d[0],h=d[1],p=Object(a.useState)([]),v=Object(i.a)(p,2),E=v[0],b=v[1],O=Object(a.useState)([]),j=Object(i.a)(O,2),N=j[0],S=j[1];String.prototype.splice=function(e,n,t){return this.slice(0,e)+t+this.slice(e+Math.abs(n))},Object(a.useEffect)(function(){!function(){if(!t)return;var e=t,n=(e.name,new FileReader);n.onload=function(e){var n=e.target.result,t=u.a.read(n,{type:"binary"}),a=t.SheetNames[0],l=t.Sheets[a],c=u.a.utils.sheet_to_csv(l,{header:1});f(function(e){for(var n=e.replaceAll(".00","").split("\n"),t=[],a=n[0].split(","),l=1;l<n.length;l++){for(var c={},r=n[l].split(","),i=0;i<a.length;i++)c[a[i]]=r[i];c.CARD_NUM=c.CARD_NUM,t.push(c)}return t}(c))},n.readAsBinaryString(e)}()},[t]),Object(a.useEffect)(function(){if(s){console.log(JSON.stringify(s));var e=0,n=0,t=[],a=[],l=[];s.forEach(function(c,r){var i=C(c.CARD_NUM);i?(++e,t.push(r+2),(i=A(c.CARD_NUM))||l.push(r+2)):(++n,a.push(r+2))}),console.log("valid",e),console.log("notValid",n),console.log("validAndNotClubs",0),console.log("validIndex",t),console.log("notValidIndex",a),console.log("validAndNotClubsIndex",l),h(t),b(a),S(l)}},[s]);var C=function(e){return e&&A(e)&&16==e.length&&(4==e[0]||5==e[0]&&e[1]>=1&&e[1]<=5||0==e.indexOf("6011")||0==e.indexOf("65"))||15==e.length&&(0==e.indexOf("34")||0==e.indexOf("37"))||13==e.length&&4==e[0]},A=function(e){for(var n=0,t=!1,a=e.length-1;a>=0;a--){var l=+e[a];t&&(l*=2)>9&&(l-=9),n+=l,t=!t}return n%10==0};return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:"file",onChange:function(e){e.stopPropagation(),e.preventDefault();var n=e.target.files[0];c(n)},onClick:function(e){e.target.value=null}}),m.length>0&&l.a.createElement("div",null,'\u05e1\u05d4"\u05db \u05d0\u05e9\u05e8\u05d0\u05d9 \u05ea\u05e7\u05d9\u05e0\u05d9\u05dd: ',m.length),m.length>0&&l.a.createElement("div",null,'\u05e1\u05d4"\u05db \u05d0\u05e9\u05e8\u05d0\u05d9 \u05ea\u05e7\u05d9\u05e0\u05d9\u05dd \u05d0\u05d1\u05dc \u05dc\u05dc\u05d0 \u05d4\u05ea\u05d0\u05de\u05d4 \u05dc\u05d7\u05d1\u05e8\u05ea \u05d0\u05e9\u05e8\u05d0\u05d9: ',N.length),E.length>0&&l.a.createElement("div",null,'\u05e1\u05d4"\u05db \u05d0\u05e9\u05e8\u05d0\u05d9 \u05dc\u05d0 \u05ea\u05e7\u05d9\u05e0\u05d9\u05dd: ',E.length),m.length>0&&l.a.createElement("div",{className:"conteinarResult"},l.a.createElement("div",null,"\u05de\u05e1\u05e4\u05e8\u05d9 \u05e9\u05d5\u05e8\u05d5\u05ea \u05e9\u05dc \u05d0\u05e9\u05e8\u05d0\u05d9 \u05ea\u05e7\u05d9\u05e0\u05d9\u05dd"),m.map(function(e){return l.a.createElement("span",null,e,", ")})),m.length>0&&l.a.createElement("div",{className:"conteinarResult"},l.a.createElement("div",null,"\u05de\u05e1\u05e4\u05e8\u05d9 \u05e9\u05d5\u05e8\u05d5\u05ea \u05e9\u05dc \u05d0\u05e9\u05e8\u05d0\u05d9 \u05ea\u05e7\u05d9\u05e0\u05d9\u05dd  \u05d0\u05d1\u05dc \u05dc\u05dc\u05d0 \u05d4\u05ea\u05d0\u05de\u05d4 \u05dc\u05d7\u05d1\u05e8\u05ea \u05d0\u05e9\u05e8\u05d0\u05d9"),N.map(function(e){return l.a.createElement("span",null,e,", ")})),E.length>0&&l.a.createElement("div",{className:"conteinarResult"},l.a.createElement("div",null,"\u05de\u05e1\u05e4\u05e8\u05d9 \u05e9\u05d5\u05e8\u05d5\u05ea \u05e9\u05dc \u05d0\u05e9\u05e8\u05d0\u05d9 \u05dc\u05d0 \u05ea\u05e7\u05d9\u05e0\u05d9\u05dd"),E.map(function(e){return l.a.createElement("span",null,e,", ")})))}var f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App"},l.a.createElement(s,null)))},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,25)).then(function(n){var t=n.getCLS,a=n.getFID,l=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),a(e),l(e),c(e),r(e)})};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),g()}],[[9,1,2]]]);
//# sourceMappingURL=main.d977c828.chunk.js.map