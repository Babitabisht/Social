(this["webpackJsonpsocial-app"]=this["webpackJsonpsocial-app"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(9),a=n.n(s),i=(n(38),n(39),n(10)),u=n(11),j=n.n(u),l=n(17),o=n(30),b=n.n(o),d={baseUrl:"https://jsonplaceholder.typicode.com"},h=n(19),x=n(13),O=Object(x.b)({name:"users",initialState:{users:[],totalUsers:0},reducers:{loadUsers:function(e,t){e.users=[].concat(Object(h.a)(e.users),Object(h.a)(t.payload))}}}),p=O.reducer,f=O.actions,m=n(69),g=n.p+"static/media/pro.8343c2bf.png",w=n(2),v=function(e){return Object(w.jsx)(m.a,{children:e.users.map((function(e){return Object(w.jsxs)(m.a.Item,{className:"text-center bg-dark",children:[Object(w.jsx)("img",{className:"text-center",width:"20%",height:"20%",src:g,alt:e.username}),Object(w.jsxs)(m.a.Caption,{className:"text-wa",children:[Object(w.jsx)("h3",{class:!0,children:e.username}),Object(w.jsxs)("p",{children:[e.email," | ",e.phone," | ",e.website]})]})]},e.id)}))})},y=function(){var e=Object(i.c)((function(e){return e.users.users})),t=Object(i.b)();return Object(r.useEffect)((function(){t(function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(d.baseUrl,"/users"));case 2:return t=e.sent,console.log(t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=3,n();case 3:r=e.sent,t(f.loadUsers(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]),Object(w.jsx)(r.Fragment,{children:Object(w.jsx)(v,{users:e})})},k=n(67),F=n(68),N=n(70),L=function(e){return Object(w.jsx)(r.Fragment,{children:Object(w.jsx)(N.a,{style:{width:"38rem"},className:"text-center ",children:Object(w.jsxs)(N.a.Body,{children:[Object(w.jsx)("img",{className:"text-center",width:"20%",height:"45%",src:g,alt:e.user.username}),Object(w.jsxs)(N.a.Title,{children:[" ",e.user.name]}),Object(w.jsxs)(N.a.Subtitle,{className:"mb-2 text-muted",children:["   ",e.user.email," | ",e.user.phone," | @",e.user.username,"      "]}),Object(w.jsx)(N.a.Text,{children:e.user.username}),Object(w.jsx)(N.a.Link,{href:"#",children:"Profile"}),Object(w.jsx)(N.a.Link,{href:"#",children:"Albums"}),Object(w.jsx)(N.a.Link,{href:"#",children:"Accomplishments"})]})})})},U=function(e){var t=Object(i.c)((function(e){return e.users.users}));return Object(w.jsx)(r.Fragment,{children:Object(w.jsx)("div",{style:{display:"flex","flex-wrap":"wrap"},children:t.map((function(e){return Object(w.jsx)(L,{user:e},e)}))})})};var C=function(){return Object(w.jsxs)(r.Fragment,{children:[Object(w.jsx)(k.a,{children:Object(w.jsx)(F.a,{children:Object(w.jsx)(y,{})})}),Object(w.jsx)(k.a,{children:Object(w.jsx)(F.a,{children:Object(w.jsx)(U,{})})})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))},T=Object(x.a)({reducer:{users:p}});a.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(i.a,{store:T,children:Object(w.jsx)(C,{})})}),document.getElementById("root")),S()}},[[65,1,2]]]);
//# sourceMappingURL=main.95501706.chunk.js.map