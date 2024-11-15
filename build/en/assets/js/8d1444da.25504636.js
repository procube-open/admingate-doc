"use strict";(self.webpackChunkteigi_doc=self.webpackChunkteigi_doc||[]).push([[5536],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},k="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),k=o(n),u=r,s=k["".concat(p,".").concat(u)]||k[u]||N[u]||l;return n?a.createElement(s,i(i({ref:e},m),{},{components:n})):a.createElement(s,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[k]="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9884:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:20},i="SFTP\u63a5\u7d9a",d={unversionedId:"forDev/fastify/sftp",id:"forDev/fastify/sftp",title:"SFTP\u63a5\u7d9a",description:"fastify\u3068\u30d6\u30e9\u30a6\u30b6\u3067WebSocket\u3067\u63a5\u7d9a\u3092\u884c\u3044\u3001\u305d\u308c\u30681\u5bfe1\u5bfe\u5fdc\u3067fastify\u304c\u63a5\u7d9a\u5148\u3068SFTP\u63a5\u7d9a\u3092\u884c\u3046\u3053\u3068\u3067\u5b9f\u88c5\u3057\u3066\u3044\u308b\u3002",source:"@site/docs/forDev/fastify/sftp.md",sourceDirName:"forDev/fastify",slug:"/forDev/fastify/sftp",permalink:"/en/docs/forDev/fastify/sftp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/forDev/fastify/sftp.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"forDevSidebar",previous:{title:"API\u4e00\u89a7",permalink:"/en/docs/forDev/fastify/api"}},p={},o=[{value:"\u901a\u4fe1\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",id:"\u901a\u4fe1\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",level:2},{value:"\u53d7\u4fe1",id:"\u53d7\u4fe1",level:3},{value:"\u9001\u4fe1",id:"\u9001\u4fe1",level:3}],m={toc:o};function k(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sftp\u63a5\u7d9a"},"SFTP\u63a5\u7d9a"),(0,r.kt)("p",null,"fastify\u3068\u30d6\u30e9\u30a6\u30b6\u3067WebSocket\u3067\u63a5\u7d9a\u3092\u884c\u3044\u3001\u305d\u308c\u30681\u5bfe1\u5bfe\u5fdc\u3067fastify\u304c\u63a5\u7d9a\u5148\u3068SFTP\u63a5\u7d9a\u3092\u884c\u3046\u3053\u3068\u3067\u5b9f\u88c5\u3057\u3066\u3044\u308b\u3002"),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuU9wt3pjSVFAnqtB7ZTjKx3HjLD8IomkoKohLB1I24zD2ivFpaujuOA9WUIVhPp_TEOA1Ik5OBUG02w7rBoKqjmS0000",alt:null}),(0,r.kt)("h2",{id:"\u901a\u4fe1\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"},"\u901a\u4fe1\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),(0,r.kt)("p",null,"\u9001\u53d7\u4fe1\u3069\u3061\u3089\u3082\u6587\u5b57\u5217\u5316\u3055\u308c\u305fJSON\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u884c\u3046\u3002\n\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\u3068\u3001\u305d\u308c\u306b\u5fdc\u3058\u3066\u5fc5\u8981\u306a\u30d1\u30e9\u30e1\u30fc\u30bf\u304c\u4e0e\u3048\u3089\u308c\u308b\u3002"),(0,r.kt)("h3",{id:"\u53d7\u4fe1"},"\u53d7\u4fe1"),(0,r.kt)("p",null,"\u30d6\u30e9\u30a6\u30b6\u304b\u3089fastify\u3078\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u53d7\u4fe1\u5185\u5bb9\u4e00\u89a7"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"type")),(0,r.kt)("th",{parentName:"tr",align:null},"\u8ffd\u52a0\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30ec\u30b9\u30dd\u30f3\u30b9\u5185\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gethome")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u7d9a\u5148\u306e\u30db\u30fc\u30e0\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u53d6\u5f97\u3059\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"readdir")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path"),"\u3067\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30b9\u306e\u30d5\u30a1\u30a4\u30eb\u4e00\u89a7\u3092\u53d6\u5f97\u3059\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unlink")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path"),"\u3067\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30b9\u306e\u30d5\u30a1\u30a4\u30eb/\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3092\u524a\u9664\u3059\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mkdir")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path"),"\u3067\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30b9\u3067\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u4f5c\u6210\u3059\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rmdir")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path"),"\u3067\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30b9\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u524a\u9664\u3059\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"delete")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path"),"\u3067\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30b9\u306e\u30d5\u30a1\u30a4\u30eb/\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af/\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u524a\u9664\u3059\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transfer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id"),",",(0,r.kt)("inlineCode",{parentName:"td"},"uuid"),",",(0,r.kt)("inlineCode",{parentName:"td"},"cwd"),",",(0,r.kt)("inlineCode",{parentName:"td"},"dirId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id"),"\u306e\u4e00\u6587\u5b57\u76ee\u304c",(0,r.kt)("inlineCode",{parentName:"td"},'"/"'),"\u306e\u5834\u5408\u306f\u63a5\u7d9a\u5148\u304b\u3089\u30d5\u30a1\u30a4\u30eb\u30b5\u30fc\u30d0\u3078\u30d5\u30a1\u30a4\u30eb\u304c\u8ee2\u9001\u3055\u308c\u3001\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306f\u30d5\u30a1\u30a4\u30eb\u30b5\u30fc\u30d0\u304b\u3089\u63a5\u7d9a\u5148\u3078\u8ee2\u9001\u3055\u308c\u308b\u3002")))),(0,r.kt)("h3",{id:"\u9001\u4fe1"},"\u9001\u4fe1"),(0,r.kt)("p",null,"fastify\u304b\u3089\u30d6\u30e9\u30a6\u30b6\u3078\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u5185\u5bb9\u4e00\u89a7"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"type")),(0,r.kt)("th",{parentName:"tr",align:null},"\u8ffd\u52a0\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30ec\u30b9\u30dd\u30f3\u30b9\u5185\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"serverReady")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"SSH\u63a5\u7d9a\u304c\u5b8c\u4e86\u3057\u305f\u969b\u306bfastify\u30b5\u30fc\u30d0\u304b\u3089\u9001\u4fe1\u3055\u308c\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gethomeRes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"text")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"text"),"\u306b\u30db\u30fc\u30e0\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"readdirRes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path"),",",(0,r.kt)("inlineCode",{parentName:"td"},"list")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"list"),"\u306b\u30d5\u30a1\u30a4\u30eb\u4e00\u89a7\u304c\u683c\u7d0d\u3055\u308c\u3066\u304a\u308a\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"path"),"\u306f",(0,r.kt)("inlineCode",{parentName:"td"},"readdir"),"\u306e\u3082\u306e\u304c\u305d\u306e\u307e\u307e\u8fd4\u3055\u308c\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unlinkRes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},"\u524a\u9664\u304c\u5b8c\u4e86\u3059\u308b\u3068\u9001\u4fe1\u3055\u308c\u308b\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"path"),"\u306f",(0,r.kt)("inlineCode",{parentName:"td"},"unlink"),"\u306e\u3082\u306e\u304c\u305d\u306e\u307e\u307e\u9001\u4fe1\u3055\u308c\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mkdirRes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u4f5c\u6210\u304c\u5b8c\u4e86\u3059\u308b\u3068\u9001\u4fe1\u3055\u308c\u308b\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"path"),"\u306f",(0,r.kt)("inlineCode",{parentName:"td"},"mkdir"),"\u306e\u3082\u306e\u304c\u305d\u306e\u307e\u307e\u9001\u4fe1\u3055\u308c\u308b\u3002\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rmdirRes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},"\u524a\u9664\u304c\u5b8c\u4e86\u3059\u308b\u3068\u9001\u4fe1\u3055\u308c\u308b\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"path"),"\u306f",(0,r.kt)("inlineCode",{parentName:"td"},"rmdir"),"\u306e\u3082\u306e\u304c\u305d\u306e\u307e\u307e\u9001\u4fe1\u3055\u308c\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deleteRes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},"\u524a\u9664\u304c\u5b8c\u4e86\u3059\u308b\u3068\u9001\u4fe1\u3055\u308c\u308b\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"path"),"\u306f",(0,r.kt)("inlineCode",{parentName:"td"},"delete"),"\u306e\u3082\u306e\u304c\u305d\u306e\u307e\u307e\u9001\u4fe1\u3055\u308c\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transferRes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id"),",",(0,r.kt)("inlineCode",{parentName:"td"},"uuid"),",",(0,r.kt)("inlineCode",{parentName:"td"},"cwd"),",",(0,r.kt)("inlineCode",{parentName:"td"},"dirId")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ee2\u9001\u304c\u5b8c\u4e86\u3059\u308b\u3068\u9001\u4fe1\u3055\u308c\u308b\u3002\u30d1\u30e9\u30e1\u30fc\u30bf\u306f\u5168\u3066",(0,r.kt)("inlineCode",{parentName:"td"},"transfer"),"\u3067\u9001\u3089\u308c\u3066\u304d\u305f\u305d\u306e\u307e\u307e\u8fd4\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"error"),",",(0,r.kt)("inlineCode",{parentName:"td"},"info"),",",(0,r.kt)("inlineCode",{parentName:"td"},"inc")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30b5\u30fc\u30d0\u30fc\u5074\u3067\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u6642\u306b\u9001\u4fe1\u3055\u308c\u308b\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"error"),"\u306f\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"info"),"\u306f\u306a\u3093\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u767a\u751f\u3057\u305f\u304b\u304c\u683c\u7d0d\u3055\u308c\u308b\u3002")))))}k.isMDXComponent=!0}}]);