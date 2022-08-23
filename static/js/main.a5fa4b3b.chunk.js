(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),i=(c(9),c(10),c(0)),d=function(e){var t=e.todos,c=e.selectTodo,s=e.selectedId,a=function(e){return e===s};return Object(i.jsx)(i.Fragment,{children:0===t.length?"No todos yet":Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:" "})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"todo",className:a(e.id)?"has-background-info-light":"",children:[Object(i.jsx)("td",{className:"is-vcentered",children:e.id}),Object(i.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(i.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{className:"has-text-".concat(e.completed?"success":"danger"),children:e.title})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"far fa-eye".concat(a(e.id)?"-slash":"")})})})})]},e.id)}))})]})})},o=function(e){var t=e.query,c=e.onSearch,s=e.filterType,a=e.onSelect;return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){return a(e.target.value)},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"active",children:"Active"}),Object(i.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),t.length>0&&Object(i.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(i.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})};function r(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(12);var j=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},b=function(e){var t=e.onClose,c=e.selectedTodo,s=c.id,a=c.title,d=c.completed,o=c.userId,b=Object(l.useState)(!1),u=Object(n.a)(b,2),h=u[0],m=u[1],O=Object(l.useState)(null),x=Object(n.a)(O,2),f=x[0],p=x[1];return Object(l.useEffect)((function(){m(!0),function(e){return r("/users/".concat(e))}(o).then((function(e){p(e),m(!1)}))}),[]),Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(i.jsx)("div",{className:"modal-background"}),h?Object(i.jsx)(j,{}):Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(s)}),Object(i.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return t(null)}})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:a}),Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[d?Object(i.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(i.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(i.jsx)("a",{href:"mailto:".concat(null===f||void 0===f?void 0:f.email),children:null===f||void 0===f?void 0:f.name})]})]})]})]})},u=function(){var e=Object(l.useState)(!0),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(null),u=Object(n.a)(a,2),h=u[0],m=u[1],O=Object(l.useState)([]),x=Object(n.a)(O,2),f=x[0],p=x[1],v=Object(l.useState)(""),N=Object(n.a)(v,2),y=N[0],g=N[1],S=Object(l.useState)("all"),k=Object(n.a)(S,2),C=k[0],T=k[1];Object(l.useEffect)((function(){r("/todos").then((function(e){p(e),s(!1)}))}),[]);var w=Object(l.useMemo)((function(){return f.filter((function(e){var t=e.title.toLowerCase().includes(y.toLocaleLowerCase());return"all"===C?t:"active"===C?t&&!e.completed:"completed"!==C||t&&e.completed}))}),[f,y,C]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(o,{query:y,onSearch:g,filterType:C,onSelect:T})}),Object(i.jsx)("div",{className:"block",children:c?Object(i.jsx)(j,{}):Object(i.jsx)(d,{todos:w,selectTodo:m,selectedId:(null===h||void 0===h?void 0:h.id)||null})})]})})}),h&&Object(i.jsx)(b,{onClose:m,selectedTodo:h})]})};a.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a5fa4b3b.chunk.js.map