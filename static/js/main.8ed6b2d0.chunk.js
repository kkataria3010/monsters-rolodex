(this["webpackJsonpmonsters-rollodex"]=this["webpackJsonpmonsters-rollodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(4),o=n.n(r),a=(n(13),n(5)),i=n(6),h=n(2),l=n(8),u=n(7),d=(n(14),n(15),n(16),n(0)),j=function(e){return Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id+10),alt:"monster"}),Object(d.jsx)("h1",{children:e.monster.name})]})},m=function(e){return console.log(e),Object(d.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(d.jsx)(j,{monster:e},e.id)}))})},b=(n(18),function(e){var t=e.placeholder,n=e.handlechange;return Object(d.jsx)("input",{type:"search",placeholder:t,onChange:n,className:"search"})}),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e.handlechange=e.handlechange.bind(Object(h.a)(e)),e}return Object(i.a)(n,[{key:"handlechange",value:function(e){var t=this;this.setState({searchField:e.target.value},(function(){console.log(t.state)}))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Monsters Rolodex"}),Object(d.jsx)(b,{handlechange:this.handlechange,placeholder:"search monsters"}),Object(d.jsx)(m,{monsters:s,children:this.state.monsters.map((function(e){return Object(d.jsx)("h1",{children:e.name},e.id)}))})]})}}]),n}(s.Component);o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.8ed6b2d0.chunk.js.map