/*! For license information please see 14e5d97c.2ad0e3bc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{110:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,s({ref:t},l,{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},131:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(110),c=n.n(o),s=n(88),i=n.n(s);const l=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:s}=e,[p,b]=Object(a.useState)(o),d=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},s.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:c()("tab-item",i.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>d.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(d,e.target,e),onFocus:()=>b(e),onClick:()=>b(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===p)[0]))}},132:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(6),o=(n(0),n(112)),c=n(131),s=n(132),i={id:"overview",title:"Overview of Packages",sidebar_label:"Overview",keywords:["InstantHIE","Packages"],description:"An overview of all existing InstantHIE packages"},l={id:"packages/overview",title:"Overview of Packages",description:"An overview of all existing InstantHIE packages",source:"@site/docs/packages/overview.md",permalink:"/instant/docs/packages/overview",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/packages/overview.md",sidebar_label:"Overview",sidebar:"docs",previous:{title:"How to create an Instant OpenHIE package",permalink:"/instant/docs/concepts/creating-packages"},next:{title:"Core Package",permalink:"/instant/docs/packages/core"}},u=[{value:"Getting Started",id:"getting-started",children:[]}],p={rightToc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"So far InstantHIE consists of two packages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Core"),Object(o.b)("li",{parentName:"ul"},"Health Worker Force")),Object(o.b)("h2",{id:"getting-started"},"Getting Started"),Object(o.b)("p",null,"To start all the InstantHIE packages, select a deployment platform below."),Object(o.b)(c.a,{defaultValue:"dockerCompose",values:[{label:"Docker Compose",value:"dockerCompose"},{label:"Kubernetes",value:"kubernetes"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"dockerCompose",mdxType:"TabItem"},Object(o.b)("p",null,"Before proceeding, ensure you are in the main ",Object(o.b)("inlineCode",{parentName:"p"},"/instant")," directory containing ",Object(o.b)("inlineCode",{parentName:"p"},"instant.sh")," script. To start up the system, execute the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"./instant.sh up docker\n")),Object(o.b)("p",null,"To stop the running containers execute the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"./instant.sh down docker\n")),Object(o.b)("p",null,"Then to remove the containers run the command below. However, make sure you have ",Object(o.b)("strong",{parentName:"p"},"stopped all the containers before trying to delete")," them. This action will also delete any volumes created by the containers."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"./instant.sh destroy docker\n"))),Object(o.b)(s.a,{value:"kubernetes",mdxType:"TabItem"},Object(o.b)("p",null,"Before proceeding, ensure you are in the main ",Object(o.b)("inlineCode",{parentName:"p"},"/instant")," directory containing ",Object(o.b)("inlineCode",{parentName:"p"},"instant.sh")," script. Then you can execute the command below. This commands will output urls from which you can access your instantHIE instance."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"./instant.sh up k8s\n")),Object(o.b)("p",null,"To delete all the deployment related pods, run the command below. This command will leave services, and volumes intact."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"./instant.sh down k8s\n")),Object(o.b)("p",null,"To delete the entire instantHIE system run the command below."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"./instant.sh destroy k8s\n")))))}b.isMDXComponent=!0}}]);