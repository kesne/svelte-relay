(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[272],{4635:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7711);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,d=f["".concat(c,".").concat(m)]||f[m]||l[m]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2906:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7518),i=n(630),a=(n(7711),n(4635)),o=["components"],s={title:"Subscriptions"},c=void 0,u={unversionedId:"usage/subscriptions",id:"usage/subscriptions",isDocsHomePage:!1,title:"Subscriptions",description:"GraphQL Subscriptions are a mechanism which allows clients to subscribe to changes in a piece of data from the server, and get notified whenever that data changes.",source:"@site/docs/usage/subscriptions.md",sourceDirName:"usage",slug:"/usage/subscriptions",permalink:"/svelte-relay/docs/usage/subscriptions",editUrl:"https://github.com/kesne/svelte-relay/edit/master/website/docs/usage/subscriptions.md",version:"current",frontMatter:{title:"Subscriptions"},sidebar:"someSidebar",previous:{title:"Mutations",permalink:"/svelte-relay/docs/usage/mutations"},next:{title:"API Reference",permalink:"/svelte-relay/docs/api-reference"}},p=[],l={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"GraphQL Subscriptions are a mechanism which allows clients to subscribe to changes in a piece of data from the server, and get notified whenever that data changes."),(0,a.kt)("p",null,"In Svelte Relay, you can create a GraphQL subscription with the ",(0,a.kt)("inlineCode",{parentName:"p"},"getSubcription()")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="User.svelte"',title:'"User.svelte"'},"<script>\n    import { getSubscription, getQuery, graphql } from 'svelte-relay';\n\n    getSubscription({\n        subscription: graphql`\n            subscription UserUpdatedSubscription {\n                viewer {\n                    id\n                    firstName\n                    lastName\n                }\n            }\n        `;\n    });\n\n    const query = getQuery(graphql`\n        query UserQuery {\n            viewer {\n                id\n                firstName\n                lastName\n            }\n        }\n    `);\n<\/script>\n\n{#await $query then data}\n    <div>Welcome, {data.firstName} {data.lastName}</div>\n{/await}\n")),(0,a.kt)("p",null,"For more information about the configuration object that can be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"getSubscription()")," function, ",(0,a.kt)("a",{parentName:"p",href:"https://relay.dev/docs/en/subscriptions#__docusaurus"},"refer to the Relay documentation"),"."))}f.isMDXComponent=!0}}]);