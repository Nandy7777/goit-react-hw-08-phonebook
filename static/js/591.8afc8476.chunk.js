"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[591],{6591:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,o,u=t(2791),i=t(9434),a=t(4270),c=t(1413),l=t(168),s=t(6444),f=s.ZP.li(r||(r=(0,l.Z)(["\n  display: flex;\n  border: 2px solid lightgray;\n  border-radius: 4px;\n  justify-content: space-between;\n  padding: 5px;\n  width: 300px;\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),p=s.ZP.button(o||(o=(0,l.Z)(["\n  cursor: pointer;\n  margin-left: 10px;\n  background-color: white;\n  border: 1px solid lightgray;\n  &:hover {\n    background-color: lightblue;\n  }\n"]))),d=t(208),h=t(3329),v=function(n){var e=n.name,t=n.number,r=n.id,o=(0,i.I0)();return(0,h.jsxs)(f,{children:[(0,h.jsxs)("p",{children:[e,": ",t]}),(0,h.jsx)(p,{type:"button",onClick:function(){return function(n){return o((0,d.GK)(n))}(r)},children:"Delete"})]})},m="NOT_FOUND";var x=function(n,e){return n===e};function g(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?x:r,u=t.maxSize,i=void 0===u?1:u,a=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),l=1===i?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:m},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return m}return{get:r,put:function(e,o){r(e)===m&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,c);function s(){var e=l.get(arguments);if(e===m){if(e=n.apply(null,arguments),a){var t=l.getEntries(),r=t.find((function(n){return a(n.value,e)}));r&&(e=r.value)}l.put(arguments,e)}return e}return s.clearCache=function(){return l.clear()},s}function y(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function b(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var u,i=0,a={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(a=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=a,s=l.memoizeOptions,f=void 0===s?t:s,p=Array.isArray(f)?f:[f],d=y(r),h=n.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(p)),v=n((function(){for(var n=[],e=d.length,t=0;t<e;t++)n.push(d[t].apply(null,arguments));return u=h.apply(null,n)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:h,dependencies:d,lastResult:function(){return u},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),v};return o}var j,w,Z,k,C,A=b(g),z=function(n){return n.contacts.items},_=function(n){return n.contacts.isLoading},P=function(n){return n.contacts.error},q=A([z,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),E=function(){var n=(0,i.v9)(q);return(0,h.jsx)("ul",{children:n.map((function(n){return(0,h.jsx)(v,(0,c.Z)({},n),n.id)}))})},F=t(6895),S=s.ZP.div(j||(j=(0,l.Z)(["\n  max-width: 300px;\n"]))),I=s.ZP.form(w||(w=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  border: 2px solid black;\n  margin: 10px 0;\n  padding: 5px;\n"]))),L=s.ZP.label(Z||(Z=(0,l.Z)(["\ndisplay: flex;\nflex-direction: column;\nmargin-top: 10px;\nmargin-bottom: 15px;\nfont-size: 20px;\n"]))),N=s.ZP.input(k||(k=(0,l.Z)(["\nborder: 1px solid lightgray;\npadding: 5px;\nwidth: 200px;\n"]))),O=s.ZP.button(C||(C=(0,l.Z)(["\n  cursor: pointer;\n  width: 100px;\n  background-color: white;\n  border: 1px solid lightgray;\n  &:hover {\n    background-color: lightblue;\n  }\n"]))),R=function(){var n=(0,i.I0)();return(0,h.jsxs)(L,{children:["Find contacts by name",(0,h.jsx)(N,{type:"text",onChange:function(e){return n((0,F.b)(e.currentTarget.value))}})]})},D=t(885),K=function(){var n=(0,u.useState)(""),e=(0,D.Z)(n,2),t=e[0],r=e[1],o=(0,u.useState)(""),a=(0,D.Z)(o,2),c=a[0],l=a[1],s=(0,i.I0)(),f=(0,i.v9)(z);return(0,h.jsx)(S,{children:(0,h.jsxs)(I,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.name.value,t=n.target.elements.number.value;f.some((function(n){return n.name.toLowerCase()===e.toLowerCase()}))?alert("".concat(e," is already in contacts.")):f.some((function(n){return n.number===t}))?alert("".concat(t," is already in contacts.")):(s((0,d.uK)({name:e,number:t})),r(""),l(""))},children:[(0,h.jsxs)(L,{children:["Name",(0,h.jsx)(N,{type:"text",name:"name",value:t,onChange:function(n){r(n.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)(L,{children:["Number",(0,h.jsx)(N,{type:"tel",name:"number",value:c,onChange:function(n){l(n.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)(O,{type:"submit",children:"Add contact"})]})})};function T(){var n=(0,i.I0)(),e=(0,i.v9)(_),t=(0,i.v9)(P);return(0,u.useEffect)((function(){n((0,d.yF)())}),[n]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.q,{children:(0,h.jsx)("title",{children:"Your contacts"})}),(0,h.jsx)(K,{}),(0,h.jsx)(R,{}),e&&!t&&(0,h.jsx)("b",{children:"Request in progress..."}),(0,h.jsx)(E,{})]})}}}]);
//# sourceMappingURL=591.8afc8476.chunk.js.map