(this.webpackJsonptodolistapp=this.webpackJsonptodolistapp||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var i=n(2),a=n.n(i),s=n(5),c=n.n(s),r=(n(20),n(13)),d=n(8),u=n(9),o=n(3),l=n(15),h=n(14),j=(n(21),n(22),n(10)),b=n(11),m=n(1);var p=function(t){var e=t.items.map((function(e){return Object(m.jsx)("div",{className:"list",children:Object(m.jsxs)("p",{children:[Object(m.jsx)("input",{type:"text",id:e.key,value:e.text,onChange:function(n){t.setUpdate(n.target.value,e.key)}}),Object(m.jsx)("span",{children:Object(m.jsx)(j.a,{className:"faicons",icon:"trash",onClick:function(){return t.deleteItem(e.key)}})})]})},e.key)}));return Object(m.jsx)("div",{children:Object(m.jsx)(b.a,{duration:500,easing:"ease-in-out",children:e})})},f=n(4),O=n(12);f.b.add(O.a);var x=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(d.a)(this,n),(i=e.call(this,t)).state={items:[],currentItem:{text:"",key:""}},i.handleInput=i.handleInput.bind(Object(o.a)(i)),i.addItem=i.addItem.bind(Object(o.a)(i)),i.deleteItem=i.deleteItem.bind(Object(o.a)(i)),i.setUpdate=i.setUpdate.bind(Object(o.a)(i)),i}return Object(u.a)(n,[{key:"handleInput",value:function(t){this.setState({currentItem:{text:t.target.value,key:Date.now()}})}},{key:"addItem",value:function(t){t.preventDefault();var e=this.state.currentItem;if(""!==e.text){var n=[].concat(Object(r.a)(this.state.items),[e]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(t){var e=this.state.items.filter((function(e){return e.key!==t}));this.setState({items:e})}},{key:"setUpdate",value:function(t,e){var n=this.state.items;n.map((function(n){if(n.key===e)return n.text=t})),this.setState({items:n})}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)("h2",{children:"To Do List Aplikasi"}),Object(m.jsx)("p",{children:"Create by: Oliz Yusuf @2021"}),Object(m.jsx)("header",{children:Object(m.jsxs)("form",{id:"to-do-form",onSubmit:this.addItem,children:[Object(m.jsx)("input",{type:"text",placeholder:"Tulis Disini",value:this.state.currentItem.text,onChange:this.handleInput}),Object(m.jsx)("button",{type:"submit",children:"Add"})]})}),Object(m.jsx)(p,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})]})}}]),n}(a.a.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),s(t),c(t)}))};c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),v()}},[[29,1,2]]]);
//# sourceMappingURL=main.fa3ad69b.chunk.js.map