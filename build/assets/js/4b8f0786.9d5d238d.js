"use strict";(self.webpackChunkteigi_doc=self.webpackChunkteigi_doc||[]).push([[3528],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:20},a="FTP",l={unversionedId:"forDev/fileserver/protocol/ftp-server",id:"forDev/fileserver/protocol/ftp-server",title:"FTP",description:"\u30d9\u30fc\u30b9\u3068\u306a\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u3057\u3066ftp-srv\u3092\u7528\u3044\u308b\u3002",source:"@site/docs/forDev/fileserver/protocol/ftp-server.md",sourceDirName:"forDev/fileserver/protocol",slug:"/forDev/fileserver/protocol/ftp-server",permalink:"/docs/forDev/fileserver/protocol/ftp-server",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/forDev/fileserver/protocol/ftp-server.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"forDevSidebar",previous:{title:"API",permalink:"/docs/forDev/fileserver/protocol/fastify-server"},next:{title:"SFTP",permalink:"/docs/forDev/fileserver/protocol/sftp-server"}},p={},c=[{value:"\u30ed\u30b0\u30a4\u30f3\u65b9\u6cd5",id:"\u30ed\u30b0\u30a4\u30f3\u65b9\u6cd5",level:3},{value:"\u30eb\u30fc\u30c8\u914d\u4e0b",id:"\u30eb\u30fc\u30c8\u914d\u4e0b",level:3},{value:"\u30d5\u30a1\u30a4\u30eb\u4e00\u89a7\uff08\u30d5\u30a1\u30a4\u30eb\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\uff09",id:"\u30d5\u30a1\u30a4\u30eb\u4e00\u89a7\u30d5\u30a1\u30a4\u30eb\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",level:3}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ftp"},"FTP"),(0,o.kt)("p",null,"\u30d9\u30fc\u30b9\u3068\u306a\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u3057\u3066",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ftp-srv"},(0,o.kt)("inlineCode",{parentName:"a"},"ftp-srv")),"\u3092\u7528\u3044\u308b\u3002\n",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.accessHistory"),"\u306e",(0,o.kt)("inlineCode",{parentName:"p"},"Protocol"),"\u306f",(0,o.kt)("inlineCode",{parentName:"p"},"ftp"),"\u3067\u8a18\u9332\u3055\u308c\u308b\u3002"),(0,o.kt)("h3",{id:"\u30ed\u30b0\u30a4\u30f3\u65b9\u6cd5"},"\u30ed\u30b0\u30a4\u30f3\u65b9\u6cd5"),(0,o.kt)("p",null,"\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u3057\u3066\u4f5c\u696dID\u3092\u5165\u529b\u3057\u3001\u4f5c\u696d\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u767b\u9332\u3055\u308c\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3059\u308b\u3053\u3068\u3067\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u308b\u3002\n\u3053\u306e\u6642\u30d5\u30a1\u30a4\u30eb\u4e00\u89a7\u3092\u53d6\u5f97\u3059\u308b\u3068\u3001\u30ed\u30b0\u30a4\u30f3\u6642\u306b\u5165\u529b\u3057\u305f\u4f5c\u696dID\u306e\u4f5c\u696d\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3068\u3001public\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u307f\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u3002"),(0,o.kt)("p",null,"\u3082\u3057\u304f\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u540d\u306b",(0,o.kt)("inlineCode",{parentName:"p"},"anonymous"),"\u3068\u5165\u529b\u3059\u308b\u3053\u3068\u3067public\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u306e\u307f\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u5f62\u3067\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u308b\u3002"),(0,o.kt)("p",null,"\u307e\u305f\u3001\u30ed\u30b0\u30a4\u30f3\u6642\u306b\u9001\u4fe1\u5143IP\u306b\u3088\u308b\u5236\u9650\u3092\u8a2d\u3051\u3001fs.works\u306e",(0,o.kt)("inlineCode",{parentName:"p"},"whitelist"),"\u306b\u767b\u9332\u3055\u308c\u305fIP\u306e\u307f\u30ed\u30b0\u30a4\u30f3\u3092\u8a31\u53ef\u3055\u308c\u308b\u3002"),(0,o.kt)("h3",{id:"\u30eb\u30fc\u30c8\u914d\u4e0b"},"\u30eb\u30fc\u30c8\u914d\u4e0b"),(0,o.kt)("p",null,"\u30ed\u30b0\u30a4\u30f3\u76f4\u5f8c\u306b",(0,o.kt)("inlineCode",{parentName:"p"},"pwd"),"\u3092\u5b9f\u884c\u3059\u308b\u3068",(0,o.kt)("inlineCode",{parentName:"p"},"/")," \u304c\u8fd4\u3063\u3066\u304d\u3066\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"/"),"\u306e\u914d\u4e0b\u306b\u5bfe\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u62d2\u5426\u3059\u308b\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30d5\u30a1\u30a4\u30eb\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9"),(0,o.kt)("li",{parentName:"ul"},"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u4f5c\u6210"),(0,o.kt)("li",{parentName:"ul"},"\u30eb\u30fc\u30c8\u914d\u4e0b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u540d\u524d\u5909\u66f4"),(0,o.kt)("li",{parentName:"ul"},"\u30eb\u30fc\u30c8\u914d\u4e0b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u524a\u9664")),(0,o.kt)("h3",{id:"\u30d5\u30a1\u30a4\u30eb\u4e00\u89a7\u30d5\u30a1\u30a4\u30eb\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"},"\u30d5\u30a1\u30a4\u30eb\u4e00\u89a7\uff08\u30d5\u30a1\u30a4\u30eb\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\uff09"),(0,o.kt)("p",null,"\u30d5\u30a1\u30a4\u30eb\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u4ee5\u4e0b\u306e\u5c5e\u6027\u306fMongoDB\u306b\u5024\u306f\u6301\u305f\u305a\u3001\u56fa\u5b9a\u306e\u5024\u3092\u8868\u793a\u3059\u308b\u3002\u8a18\u8f09\u306e\u306a\u3044\u5c5e\u6027\u306f\u3001\u8a72\u5f53\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u307e\u305f\u306f\u30d5\u30a1\u30a4\u30eb\u56fa\u6709\u306e\u5024\u3068\u306a\u308b\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"uid\u3001\u304a\u3088\u3073gid\u306f",(0,o.kt)("inlineCode",{parentName:"li"},"1000"),"\u3068\u3059\u308b"),(0,o.kt)("li",{parentName:"ul"},"mode\u3001\u304a\u3088\u3073permissions\u306f\u3001\u4f5c\u696d\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3068\u305d\u306e\u914d\u4e0b\u306b\u3042\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3068\u30d5\u30a1\u30a4\u30eb\u306f",(0,o.kt)("inlineCode",{parentName:"li"},"660"),"\u3001public\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3068\u305d\u306e\u914d\u4e0b\u306b\u3042\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3068\u30d5\u30a1\u30a4\u30eb\u306f",(0,o.kt)("inlineCode",{parentName:"li"},"666"),"\u3068\u3059\u308b"),(0,o.kt)("li",{parentName:"ul"},"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306esize\u306f",(0,o.kt)("inlineCode",{parentName:"li"},"0"),"\u3068\u3059\u308b")))}u.isMDXComponent=!0}}]);