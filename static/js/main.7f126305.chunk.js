(this["webpackJsonphello-word-mern"]=this["webpackJsonphello-word-mern"]||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(65),o=n.n(i),s=(n(82),n(49),n(66),n(18)),a=n(16),l=(n(84),n(28)),j=n(8),d=n(1),b=function(){return Object(d.jsxs)("nav",{className:"navbar bg-primary",children:[Object(d.jsx)("h1",{children:"Hello Word"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/hello-word-mern",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/list",children:"List"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/about",children:"About"})})]})]})},u=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Hello Word"}),Object(d.jsx)("p",{children:"App to study words"}),Object(d.jsx)("p",{children:"Version 1.0.0"}),Object(d.jsxs)("p",{children:[(new Date).getFullYear()," Haeun Grace Jeong - All rights reserved"]})]})},h=(n(70),n(130)),x=n(133),O=function(e){var t=e.onAdd,n=r.a.createRef(),c=r.a.createRef(),i=r.a.createRef(),o=r.a.createRef();return Object(d.jsxs)(x.a,{component:"form",ref:n,children:[Object(d.jsxs)("div",{className:"word__add__form",children:[Object(d.jsx)("input",{ref:c,type:"text",placeholder:"Enter a form...",required:!0}),Object(d.jsxs)("select",{ref:i,children:[Object(d.jsx)("option",{value:"form",children:"select the form"}),Object(d.jsx)("option",{value:"none",children:"none"}),Object(d.jsx)("option",{value:"verb",children:"verb"}),Object(d.jsx)("option",{value:"adjective",children:"adjective"}),Object(d.jsx)("option",{value:"none",children:"adverb"})]}),Object(d.jsx)("input",{ref:o,type:"text",placeholder:"Enter a meaning..."})]}),Object(d.jsx)(h.a,{onClick:function(e){console.log("submitted"),e.preventDefault();var r=c.current.value,s=i.current.value,a=o.current.value;r&&t(r,s,a),console.log(r),n.current.reset()},variant:"contained",children:"Save"})]})},f=n(132),v=n(134),m=n(135),p=n(136),g=n(73),w=n.n(g),y=function(e){var t=e.word,n=e.onDelete;return Object(d.jsxs)(f.a,{variant:"outlined",sx:{minWidth:275},children:[Object(d.jsxs)(v.a,{children:[Object(d.jsx)(m.a,{variant:"h5",component:"div",children:t.title}),Object(d.jsx)(m.a,{sx:{mb:1.5},color:"text.secondary",children:t.form}),Object(d.jsx)(m.a,{variant:"body2",children:t.meaning})]}),Object(d.jsx)(p.a,{children:Object(d.jsx)(h.a,{children:Object(d.jsx)(w.a,{size:"small",onClick:function(){n(t)}})})})]})},A=function(e){var t=e.words,n=e.onAdd,c=e.onDelete;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{onAdd:n}),Object(d.jsx)("div",{className:"word__list",children:t.map((function(e){return Object(d.jsx)(y,{word:e,onDelete:c},e.id)}))})]})};var D=function(){var e=Object(c.useState)([{id:1,title:"persistence",form:"none",meaning:"firm or obstinate continuance in a course of action in spite of difficulty or opposition."},{id:2,title:"achieve",form:"verb",meaning:"successfully bring about or reach (a desired objective, level, or result) by effort, skill, or courage."}]),t=Object(a.a)(e,2),n=t[0],r=t[1],i=function(e,t,c){var i=[].concat(Object(s.a)(n),[{id:Date.now(),title:e,form:t,meaning:c}]);r(i)},o=function(e){var t=n.filter((function(t){return t.id!==e.id}));r(t)};return Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/hello-word-mern",render:function(){return Object(d.jsx)(c.Fragment,{children:Object(d.jsx)(A,{words:n,onAdd:i,onDelete:o})})}}),Object(d.jsx)(j.a,{path:"/about",component:u}),Object(d.jsx)(j.a,{path:"/list"})]})})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root")),F()},82:function(e,t,n){},84:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.7f126305.chunk.js.map