(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[162],{4635:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7711);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(n),d=a,m=g["".concat(s,".").concat(d)]||g[d]||u[d]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1948:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var r=n(7518),a=n(630),l=(n(7711),n(4635)),i=["components"],o={title:"Getting Started"},s=void 0,p={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Before getting started, it is best to understand the core concepts of Relay. It is likely best to read the Relay Getting Started guide to familiarize yourself with Relay.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/svelte-relay/docs/getting-started",editUrl:"https://github.com/kesne/svelte-relay/edit/master/website/docs/getting-started.md",version:"current",frontMatter:{title:"Getting Started"},sidebar:"someSidebar",next:{title:"Providing The Environment",permalink:"/svelte-relay/docs/usage/providing-the-environment"}},c=[{value:"Installing",id:"installing",children:[]},{value:"Configuring babel",id:"configuring-babel",children:[]},{value:"Configuring the Relay Compiler",id:"configuring-the-relay-compiler",children:[]}],u={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Before getting started, it is best to understand the core concepts of Relay. It is likely best to read the ",(0,l.kt)("a",{parentName:"p",href:"https://relay.dev/docs/en/quick-start-guide"},"Relay Getting Started guide")," to familiarize yourself with Relay."),(0,l.kt)("p",null,"Svelte Relay consists of two packages:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"svelte-relay"))," - Provides the runtime functionality for using Relay in Svelte."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"relay-compiler-language-svelte"))," - Provides support for Svelte files to be supported in the Relay Compiler.")),(0,l.kt)("p",null,"The code that is generated from the Relay Compiler is TypeScript, using the ",(0,l.kt)("inlineCode",{parentName:"p"},".ts")," extension. To accomodate this, your project will need be able to handle TypeScript files. The ",(0,l.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/home.html"},"TypeScript documentation")," contains examples for how to integrate TypeScript into your project."),(0,l.kt)("h2",{id:"installing"},"Installing"),(0,l.kt)("p",null,"To install Svelte Relay into an existing project, you must install the base package, along with the package language to add Svelte support to the Relay Compiler:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install svelte-relay\nnpm install relay-compiler relay-compiler-language-svelte --save-dev\n")),(0,l.kt)("h2",{id:"configuring-babel"},"Configuring babel"),(0,l.kt)("p",null,"Relay requires a Babel plugin to convert the GraphQL queries to runtime artifacts."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install babel-plugin-relay graphql --save-dev\n")),(0,l.kt)("p",null,"Once the package is installed, you will need to configure Babel to use this plugin."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".babelrc"',title:'".babelrc"'},'{\n    "plugins": ["relay"]\n}\n')),(0,l.kt)("p",null,'Please note that the "relay" plugin should run before other plugins or presets to ensure the graphql template literals are correctly transformed. See ',(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/plugins/#pluginpreset-ordering"},"Babel's documentation on this topic"),"."),(0,l.kt)("p",null,"Alternatively, instead of using ",(0,l.kt)("inlineCode",{parentName:"p"},"babel-plugin-relay"),", you can use Relay with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kentcdodds/babel-plugin-macros"},(0,l.kt)("inlineCode",{parentName:"a"},"babel-plugin-macros")),". After installing ",(0,l.kt)("inlineCode",{parentName:"p"},"babel-plugin-macros")," and adding it to your Babel config, you can use the macro in your project:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const graphql = require('babel-plugin-relay/macro');\n\nconst AppQuery = graphql`\n    query AppQuery {\n        # ...\n    }\n`;\n")),(0,l.kt)("h2",{id:"configuring-the-relay-compiler"},"Configuring the Relay Compiler"),(0,l.kt)("p",null,"While you can configure Relay with CLI arguments, we recommend using the ",(0,l.kt)("inlineCode",{parentName:"p"},"relay-config")," package to configure the Relay Compiler."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install relay-config --save-dev\n")),(0,l.kt)("p",null,"With this package installed, can then create a ",(0,l.kt)("inlineCode",{parentName:"p"},"relay.config.js")," file, where you can provide configuration to the relay comiler."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="relay.config.js"',title:'"relay.config.js"'},"module.exports = {\n    src: './src',\n    schema: './server/schema.graphql',\n    language: 'svelte',\n};\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Relay Compiler Documentation:")," ",(0,l.kt)("a",{parentName:"p",href:"https://relay.dev/docs/en/installation-and-setup#set-up-relay-compiler"},"https://relay.dev/docs/en/installation-and-setup#set-up-relay-compiler")))}g.isMDXComponent=!0}}]);